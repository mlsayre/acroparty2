import React, { Component, PropTypes } from 'react';

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


  render() {
    return (
      <div className="chatArea">
        <div className="listAndInfo">
          <div className="playerList">
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
            <div>This room name is {this.props.roomName} </div>
          </div>
          <div className="messagesSendArea">
            <button className="mobile openPlayerList">Plyrs</button>
            <input type="text" className="messageEnter"></input>
            <button className="messageSend">Send</button>
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
