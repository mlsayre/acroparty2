import React, { Component, PropTypes } from 'react';
import { Gamedata } from '../api/gamedata.js';

// Room component - represents a single room item
export default class Room extends Component {
  render() {
    return (<li><button className="roomSelect" data-room={this.props.room.room_id} onClick={this.props.updateRoom}>Join</button>
        <span className="roomlistTitle">{this.props.room.displayName}</span>
        <span className="roomlistRound"> Rnd: {this.props.room.round}</span>
        <span className="roomlistSubround"> ({this.props.room.subround})</span>
        <span className="roomlistPlayers"> Players: {Gamedata.find({room_id: this.props.room.room_id }).fetch().length}</span></li>
    );
  }
}

Room.propTypes = {
  // This component gets the room to display through a React prop.
  // We can use propTypes to indicate it is required
  room: PropTypes.object.isRequired,
};

