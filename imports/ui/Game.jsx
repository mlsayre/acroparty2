import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { gameRoomIdSelected } from './App.jsx'

import { Rooms } from '../api/rooms.js';
import { Games } from '../api/games.js';
import Room from './Room.jsx';

export default class Game extends Component {
  render() {
    if (this.props.selectedRoom) {
      var currentRound = this.props.selectedRoom.round;
      var currentSubround = this.props.selectedRoom.subround;
      if (currentSubround === "Waiting for players") {
        if (this.props.selectedRoom.players.length < 2) { // number of players needed to start game
          $(".gamestate").hide();
          $(".waitingForPlayers").show();
        } else {
          Meteor.call('games.init', gameRoomIdSelected.get(), );
        }
      } else {
        $(".gamestate").hide();
        if (currentSubround === "Waiting for players") {
          Meteor.call('games.init', gameRoomIdSelected.get(), );
        } else if (currentSubround === "Get ready") {
          $(".gamestate").hide();
          $(".getReady").show();
          Meteor.call('games.getready', gameRoomIdSelected.get(), );
        } else if (currentSubround === "Play") {
          $(".gamestate").hide();
          $(".play").show();
          var roundSeconds = this.props.gameInfo.roundtimes[currentRound - 1];
          Meteor.call('games.play', gameRoomIdSelected.get(), roundSeconds);
        } else if (currentSubround === "Vote") {
          $(".gamestate").hide();
          $(".vote").show();
          Meteor.call('games.vote', gameRoomIdSelected.get());
        } else if (currentSubround === "Results") {
          $(".gamestate").hide();
          $(".results").show();
          Meteor.call('games.results', gameRoomIdSelected.get());
        } else if (currentSubround === "Final results") {
          $(".gamestate").hide();
          $(".finalresults").show();
          Meteor.call('games.finalresults', gameRoomIdSelected.get());
        }
      }
    }
    return (
      <div>
        <div className="gamestate waitingForPlayers">
          <span>Waiting for at least 3 players...</span>
        </div>
        <div className="gamestate getReady">
          Get ready to play...
        </div>
        <div className="gamestate play">
          Letters: {this.props.gameInfo ? this.props.gameInfo.roundletters[currentRound - 1] : ""}
          Category: {this.props.gameInfo ? this.props.gameInfo.roundcategories[currentRound - 1] : ""}
        </div>
        <div className="gamestate vote">
          Now vote!
        </div>
        <div className="gamestate results">
          The results!
        </div>
        <div className="gamestate finalresults">
          Final game results!
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
    gameInfo: Games.findOne({room_id: gameRoomIdSelected.get()}) ? Games.findOne({room_id: gameRoomIdSelected.get()}) : ""
  };
}, Game);

// Game.propTypes = {
//   // This component gets the game to display through a React prop.
//   // We can use propTypes to indicate it is required
//   game: PropTypes.object.isRequired,
// };
