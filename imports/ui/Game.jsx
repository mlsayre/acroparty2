import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { gameRoomIdSelected } from './App.jsx'

import { Rooms } from '../api/rooms.js';
import Room from './Room.jsx';

export default class Game extends Component {
  render() {
    return ( <div>{this.props.selectedRoom && this.props.selectedRoom.players.length > 1 ?
      "<div>THERE IS MORE THAN ONE PLAYER HERE!</div>" : "<div>This is the game area!</div>"}</div>
    );
  }
}

export default createContainer(() => {
  //var userRoom = Meteor.user().currentRoom;
  return {
    currentUser: Meteor.user(),
    selectedRoom: Rooms.findOne({ room_id: gameRoomIdSelected.get() }),
  };
}, Game);

// Game.propTypes = {
//   // This component gets the game to display through a React prop.
//   // We can use propTypes to indicate it is required
//   game: PropTypes.object.isRequired,
// };
