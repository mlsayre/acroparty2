import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { gameRoomIdSelected } from './App.jsx'

import { Messages } from '../api/messages.js';
import { Gamedata } from '../api/gamedata.js';

export class ListMessages extends Component {
  componentDidMount() {
    var $this = $(ReactDOM.findDOMNode(this));
    $(".messagesRead")[0].scrollTop = $(".messagesRead")[0].scrollHeight;
  }
  render() {
    return <li className={(this.props.author === "<PartyHost>" ? "hostMessage" : "") +
            (this.props.exitClass ? " " + this.props.exitClass : "")}>
            <span className="authorMessage"><span className="messageAuthor">{this.props.author}:</span> {this.props.message}</span>
            <span className="messageTime" data-livestamp={this.props.timestamp}></span>
           </li>
  }
}

export class ListItemPlayer extends Component {
  render() {
    return <li className="playerInList" data-playerInList={this.props.name}>{this.props.name}
    <span className="scoresRight">{this.props.score}</span></li>;
  }
}

export class Chat extends Component {
  listPlayers() {
    var playerListArray = [];
    this.props.roomPlayers.forEach(function() {
      playerListArray.push(this.user_id)
    })
    var playerListItems = playerListArray.map(function(name) {
      return <li>name</li>
    });
    return playerListItems
  }

  sendMessage(event) {
    event.preventDefault();
    const message = ReactDOM.findDOMNode(this.refs.messageInput).value.trim();
    if (message === "") {return} // blank messages don't send
    Meteor.call('messages.postMessage', this.props.currentUser.username, gameRoomIdSelected.get(), message);
    ReactDOM.findDOMNode(this.refs.messageInput).value = '';
    // delete old messages in room
    if (this.props.roomMessages.length > 150) { // 200 chat messages per room
      var indexToTrim = this.props.roomMessages.length - 150;
      var oldestMessageTime = this.props.roomMessages[indexToTrim].createdAt;
      var messagesToDelete = Messages.find({
        room_id : gameRoomIdSelected.get(),
        createdAt: { $lt: oldestMessageTime }
      }).fetch();
      messagesToDelete.forEach(function(message) {
        Meteor.call('messages.deleteOld', message._id);
      });
    }
  }

  renderMessages() {
    if (this.props.roomMessages) {
      return this.props.roomMessages.map((message) => (
        <ListMessages key={message._id} author={message.user_id} message={message.message}
                      timestamp={message.createdAt} exitClass={message.messageClass}/>
      ));
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="chatArea">
        <div className="listAndInfo">
          <div className="playerList">
            <div className="bigRoomName"><span>{this.props.roomName}</span></div>
            <ul className="playerNameList"><u>Players</u><span className="scoresRight"><u>Scores</u></span>
              {this.props.roomPlayers.map((player) => (
                <ListItemPlayer key={player.user_id} name={player.user_id} score={player.score} />
              ))}
            </ul>
          </div>
          <div className="chatMenuButtons">
            <button className="mainButton" onClick={this.props.clickStats}>Stats</button>
            <button className="mainButton" onClick={this.props.clickSettings}>Settings</button>
            <button className="mainButton" onClick={this.props.exitRoom}>Exit Room</button>
          </div>
        </div>
        <div className="messagesArea">
          <div className="messagesRead">
            {this.renderMessages()}
          </div>
          <div className="messagesSendArea">
            <button className="mobile openPlayerList">Plyrs</button>
            <form onSubmit={this.sendMessage.bind(this)}>
              <input type="text" ref="messageInput" className="messageEnter" placeholder="Enter chat here..."
                maxLength="100"></input>
              <button className="messageSend" onClick={this.sendMessage.bind(this)}>Send</button>
            </form>
            <button className="mobile openChatMenu">Menu</button>
          </div>
        </div>
      </div>
    );
  }
}

// Chat.propTypes = {
  // This component gets the room to display through a React prop.
  // We can use propTypes to indicate it is required
//   chat: PropTypes.object.isRequired,
// };

export default createContainer(() => {
  Meteor.subscribe('messages');
  Meteor.subscribe('gamedata');
  return {
    currentUser: Meteor.user(),
    roomMessages: Messages.find({ room_id: gameRoomIdSelected.get() }, { sort: { createdAt: 1 } }).fetch(),
    roomPlayers: Gamedata.find({ room_id: gameRoomIdSelected.get() }, {sort: { score: -1 } }).fetch()
  };
}, Chat);
