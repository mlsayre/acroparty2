import React, { Component, PropTypes } from 'react';

// Room component - represents a single room item
export default class Room extends Component {
  render() {
    return (
      <li><span className="roomlistTitle">{this.props.room.displayName}</span>
        <span className="roomlistRound"> Round: {this.props.room.round}</span></li>
    );
  }
}

Room.propTypes = {
  // This component gets the room to display through a React prop.
  // We can use propTypes to indicate it is required
  room: PropTypes.object.isRequired,
};
