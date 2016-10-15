import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { gameRoomIdSelected } from './App.jsx'

import { Rooms } from '../api/rooms.js';
import Room from './Room.jsx';

export default class Game extends Component {
  render() {
    if (this.props.selectedRoom) {
      if (this.props.selectedRoom.players.length < 2) { // number of players needed to start game
        if (this.props.selectedRoom.subround === "Waiting for players") {
          $(".gamestate").hide();
          $(".waitingForPlayers").show();
        }
      } else {
        $(".waitingForPlayers").hide();
        if (this.props.selectedRoom.subround === "Waiting for players") {
          console.log("games.init should be called")
          Meteor.call('games.init', gameRoomIdSelected.get(), );
        }
      }
    }
    return (
      <div>
        <div className="gamestate waitingForPlayers">
          <span>Waiting for at least 3 players...</span>
        </div>
        <div className="gamestate getReady">
        </div>
        <div className="gamestate play">
        </div>
        <div className="gamestate vote">
        </div>
        <div className="gamestate results">
        </div>
      </div>
      // <div>{this.props.selectedRoom && this.props.selectedRoom.players.length > 1 ?
      // <div>THERE IS MORE THAN ONE PLAYER HERE.</div> : <div>This is the game area.</div>}</div>
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
