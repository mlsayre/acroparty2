import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { gameRoomIdSelected } from './App.jsx'

import { Messages } from '../api/messages.js';

export default class ListMessages extends Component {
  componentDidMount() {
    var $this = $(ReactDOM.findDOMNode(this));
    $(".messagesRead")[0].scrollTop = $(".messagesRead")[0].scrollHeight;
  }
  render() {
    return <li>
            <span className="authorMessage"><span className="messageAuthor">{this.props.author}:</span> {this.props.message}</span>
            <span className="messageTime">{this.props.timestamp}</span>
           </li>
  }
}

export default class ListItemPlayer extends Component {
  render() {
    return <li>{this.props.data}</li>;
  }
}

export default class Chat extends Component {
  listPlayers() {
    var playerListArray = this.props.roomPlayers
    var playerListItems = playerListArray.map(function(name) {
      return <li>name</li>
    });
    return playerListItems
  }

  sendMessage(event) {
    event.preventDefault();
    const message = ReactDOM.findDOMNode(this.refs.messageInput).value.trim();
    Messages.insert({
      user_id: this.props.currentUser.username,
      room_id: gameRoomIdSelected.get(),
      message: message,
      createdAt: new Date() });
    ReactDOM.findDOMNode(this.refs.messageInput).value = '';
  }

  renderMessages() {
    if (this.props.roomMessages) {
      return this.props.roomMessages.map((message) => (
        <ListMessages key={message._id} author={message.user_id} message={message.message}
                      timestamp={moment(message.createdAt).fromNow()} />
      ));
    } else {
      return "";
    }
  }
  // keyDown(event) {
  //   console.log(event)
  //   if (event.keyCode == 13) { {this.sendMessage.bind(this)}; return false;}
  // }

  render() {
    return (
      <div className="chatArea">
        <div className="listAndInfo">
          <div className="playerList">
            <div className="bigRoomName"><span>{this.props.roomName}</span></div>
            <ul><u>Players</u>
              {this.props.roomPlayers.map((name) => (
                <ListItemPlayer key={name} data={name} />
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
              <input type="text" ref="messageInput" className="messageEnter"></input>
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
  return {
    currentUser: Meteor.user(),
    roomMessages: Messages.find({ room_id: gameRoomIdSelected.get() }, { sort: { createdAt: 1 } }).fetch(),
  };
}, Chat);
