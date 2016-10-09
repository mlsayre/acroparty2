import React, { Component, PropTypes } from 'react';

// Room component - represents a single room item
export default class Chat extends Component {
  render() {
    return (

      <div className="mainButtons">
        <div>This room name is {this.props.roomName} </div>
        <button className="mainButton" onClick={this.props.clickStats}>Stats</button>
        <button className="mainButton" onClick={this.props.clickSettings}>Settings</button>
      </div>
    );
  }
}

// Chat.propTypes = {
  // This component gets the room to display through a React prop.
  // We can use propTypes to indicate it is required
//   chat: PropTypes.object.isRequired,
// };
