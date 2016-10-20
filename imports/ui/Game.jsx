import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { gameRoomIdSelected } from './App.jsx'
import {validateAnswer} from '/client/utilities.js';

import { Rooms } from '../api/rooms.js';
import { Games } from '../api/games.js';
import { Gamedata } from '../api/gamedata.js';
import Room from './Room.jsx';

export default class Game extends Component {
  sendAnswer(event) {
    event.preventDefault();
    const answer = ReactDOM.findDOMNode(this.refs.answerInput).value.trim();
    const roundNumber = Rooms.findOne({room_id: gameRoomIdSelected.get()}).round;
    const acroLetters = Games.findOne({room_id: gameRoomIdSelected.get()}).roundletters[roundNumber - 1];
    var checkedAnswer = validateAnswer(answer, acroLetters);
    if (checkedAnswer === 1) {
      var failMessage = "Not feeling inspired?"
      $(".submittedInfo").css("color", "red");
      $(".submittedInfo").text(failMessage)
    } else if (checkedAnswer === 2) {
      var failMessage = "Your acro should have " + acroLetters.length + " words..."
      $(".submittedInfo").css("color", "red");
      $(".submittedInfo").text(failMessage)
    } else if (checkedAnswer === 3) {
      var failMessage = "Check your letters..."
      $(".submittedInfo").css("color", "red");
      $(".submittedInfo").text(failMessage)
    } else {
      $(".submittedInfo").css("color", "green");
      Meteor.call('gamedata.postAnswer', gameRoomIdSelected.get(), this.props.currentUser.username, checkedAnswer);
      var submitTime = Gamedata.findOne({room_id: gameRoomIdSelected.get(), user_id: this.props.currentUser.username}).finalAnswerTime
      $(".submittedInfo").text("Submitted: " + submitTime + "s");
    }
  }

  render() {
    if (this.props.selectedRoom) {
      var currentRound = this.props.selectedRoom.round;
      var currentSubround = this.props.selectedRoom.subround;
      if (currentSubround === "Waiting for players") {
        console.log(this.props.gamedata.length)
        if (this.props.gamedata.length < 2) { // number of players needed to start game
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
          $(".submittedInfo").text("")
          $(".answerEnter").value = "";
          Meteor.call('games.getready', gameRoomIdSelected.get(), );
        } else if (currentSubround === "Play") {
          $(".currentLetters").Morphext({
            animation: "flipInY", // Overrides default "bounceIn"
            separator: "", // Overrides default ","
            speed: 1000, // Overrides default 2000
            complete: function () {
                // Overrides default empty function
            }
          });
          $(".gamestate").hide();
          $(".play").show();
          var roundSeconds = this.props.gameInfo.roundtimes[currentRound - 1];
          Meteor.call('games.play', gameRoomIdSelected.get(), roundSeconds);
          if (this.props.gameInfo.playStartAnswering === true) {
            $(".gameTimer").css("visibility", "visible");
          } else {
            $(".gameTimer").css("visibility", "hidden");
          }
          if (this.props.gameInfo.showAnswerForm === true) {
            $(".answerForm").css("visibility", "visible");
          } else {
            $(".answerForm").css("visibility", "hidden").val("");
          }
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
          <div>Waiting for at least 3 players...</div>
        </div>
        <div className="gamestate getReady">
          <div className="gameTop">
            <div className="roundInfo">
              Round {this.props.selectedRoom ? this.props.selectedRoom.round : ""} of&nbsp;
              {this.props.gameInfo ? this.props.gameInfo.roundletters.length : ""}
            </div>
            <div className="gameTimer"></div>
          </div>
          <div className="gameMiddle">
            <div className="getReadyText">Get ready...</div>
          </div>
        </div>
        <div className="gamestate play">
          <div className="gameTop">
            <div className="roundInfo">
              Round {this.props.selectedRoom ? this.props.selectedRoom.round : ""} of&nbsp;
              {this.props.gameInfo ? this.props.gameInfo.roundletters.length : ""}
            </div>
            <div className="gameTimer">{this.props.gameInfo ? this.props.gameInfo.timerSeconds : 0}</div>
          </div>
          <div className="gameMiddle">
            <div className="numberSubmitted">0 of 3 Answers Submitted</div>
            <div className="categoryAndLetters">
              <div className="currentCat"><span className="catWord">Category:</span> {this.props.gameInfo ? this.props.gameInfo.roundcategories[currentRound - 1] : ""}</div>
              <div className="currentLetters">{this.props.gameInfo ? this.props.gameInfo.roundletters[currentRound - 1] : ""}</div>
            </div>
            <div className="submittedInfo"></div>
          </div>
          <div className="gameBottom">
            <form className="answerForm">
              <input type="text" ref="answerInput" className="answerEnter" placeholder="Enter acro here..."
                maxLength="70"></input>
              <button className="answerSend" onClick={this.sendAnswer.bind(this)}>Play</button>
            </form>
          </div>

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
    gameInfo: Games.findOne({room_id: gameRoomIdSelected.get()}) ? Games.findOne({room_id: gameRoomIdSelected.get()}) : "",
    gamedata: Gamedata.find({room_id: gameRoomIdSelected.get()}).fetch(),
  };
}, Game);

// Game.propTypes = {
//   // This component gets the game to display through a React prop.
//   // We can use propTypes to indicate it is required
//   game: PropTypes.object.isRequired,
// };
