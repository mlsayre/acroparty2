import React, { Component, PropTypes } from 'react';

// Room component - represents a single room item
export default class Chat extends Component {
  render() {
    return (
      <div className="chatArea">
        <div className="playerList">
          {this.props.roomPlayers}
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
        <div className="chatMenuButtons">
          <button className="mainButton" onClick={this.props.clickStats}>Stats</button>
          <button className="mainButton" onClick={this.props.clickSettings}>Settings</button>
          <button className="mainButton" onClick={this.props.exitRoom}>Exit Room</button>
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
