import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { gameRoomIdSelected } from './App.jsx'
import {validateAnswer} from '/client/utilities.js';

import { Rooms } from '../api/rooms.js';
import { Games } from '../api/games.js';
import { Gamedata } from '../api/gamedata.js';
import Room from './Room.jsx';

export class ShowLetters extends Component {
  render() {
    var currentRound = this.props.currentRound;
    var theLetters = this.props.gameInfo ? this.props.gameInfo.roundletters[currentRound - 1] : ""
    return <span className="allLetters">
            <span className="letter1">{theLetters[0]}</span>
            <span className="letter2">{theLetters[1]}</span>
            <span className="letter3">{theLetters[2]}</span>
            <span className="letter4">{theLetters[3]}</span>
            <span className="letter5">{theLetters[4]}</span>
            <span className="letter6">{theLetters[5]}</span>
            <span className="letter7">{theLetters[6]}</span>
           </span>
  }
}

export class Answers extends Component {
  render() {
    return (<li className="answerItem">
              <button className="voteButton" data-answer={this.props.answer} onClick={this.props.vote}>Vote</button>
              <span>"{this.props.answer}"</span></li>
    );
  }
}

export class Results extends Component {
  render() {
    return (<tr className="resultItem">
              <td className="resultPlace">{this.props.place}</td>
              <td className="resultUsername">{this.props.username}</td>
              <td className="resultAnswer">"{this.props.answer}"</td>
              <td className="resultAnswerTime">({this.props.answertime}s)</td>
              <td className="resultVotesRec">{this.props.votesrec}</td>
              <td className="resultWinBonus">{this.props.winbonus}</td>
              <td className="resultFastest">{this.props.fastest}</td>
              <td className="resultVoteWinner">{this.props.voteforwinner}</td>
              <td className="resultTotalPoints">{this.props.totalpoints}</td>
            </tr>
    );
  }
}

export class FinalResults extends Component {
  render() {
    return (<tr className="resultItem">
              <td className="resultPlace">{this.props.place}</td>
              <td className="resultUsername">{this.props.username}</td>
              <td className="resultTotalPoints">{this.props.score}</td>
            </tr>
    );
  }
}

export class Game extends Component {
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

  vote(e) {
    var theanswer = $(e.target).attr("data-answer").toString();
    console.log(theanswer)
    var votedFor = Gamedata.findOne({ answer: theanswer }) ? Gamedata.findOne({ answer: theanswer }).user_id : "nobody";
    console.log(votedFor)
    Meteor.call('gamedata.vote', gameRoomIdSelected.get(), this.props.currentUser.username, votedFor);
  }

  showChoices() {
    return this.props.ransortgamedata.map((answer) => (
      <Answers key={answer._id} answer={answer.answer} vote={this.vote.bind(this)} />
    ));
  }

  showVotedAnswer() {
    if (Gamedata.findOne({room_id: gameRoomIdSelected.get()})) {
             if (Gamedata.findOne({room_id: gameRoomIdSelected.get(), user_id: this.props.usergamedata.votedFor})) {
              return Gamedata.findOne({room_id: gameRoomIdSelected.get(), user_id: this.props.usergamedata.votedFor}).answer
             } else {
              return ""
             }
           } else {
             return ""
           }
  }

  showResults() {
    return this.props.gamedataresults.map((result, index) => (
      <Results key={result._id} answer={result.answer} username={result.user_id} votesrec={result.roundVotesReceived}
       winbonus={result.roundWonBonus} fastest={result.roundSpeedBonus} voteforwinner={result.roundVotedForWinner}
       totalpoints={result.roundTotalPoints} answertime={result.finalAnswerTime} place={index + 1} />
    ));
  }

  showFinalResults() {
    return this.props.finalStandings.map((result, index) => (
      <FinalResults key={result._id} username={result.user_id} score={result.score} place={index + 1} />
    ));
  }

  render() {
    if (this.props.selectedRoom) {
      var currentRound = this.props.selectedRoom.round;
      var currentSubround = this.props.selectedRoom.subround;
      if (currentSubround === "Waiting for players") {
        if (this.props.gamedata.length < 3) { // number of players needed to start game
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
          $(".answerEnter").val("");
          $(".allLetters").hide();
          Meteor.call('games.getready', gameRoomIdSelected.get(), );
        } else if (currentSubround === "Play") {
          $(".gamestate").hide();
          $(".play").show();
          var roundSeconds = this.props.gameInfo.roundtimes[currentRound - 1];
          Meteor.call('games.play', gameRoomIdSelected.get(), roundSeconds);
          if (this.props.gameInfo.turnLetters === true) {
            $(".allLetters span").addClass("animated flipInY");
            $(".allLetters").show();
          } else {
            $(".allLetters span").removeClass("animated flipInY");
          }
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
          if (this.props.gameInfo.voteStartVoting === true) {
            $(".gameTimer").css("visibility", "visible");
          } else {
            $(".gameTimer").css("visibility", "hidden");
          }
          if (this.props.gameInfo.showAnswersForVote === true) {
            $(".voteTitle").hide();
            $(".voteArea").css("visibility", "visible");
          } else {
            $(".voteTitle").show();
            $(".voteArea").css("visibility", "hidden");
          }
          if (this.props.usergamedata.votedFor === "") {
            $(".haveNotVoted").show();
            $(".haveVoted").hide();
          } else {
            $(".haveNotVoted").hide();
            $(".haveVoted").show();
          }
        } else if (currentSubround === "Results") {
          $(".gamestate").hide();
          $(".results").show();
          Meteor.call('games.results', gameRoomIdSelected.get());
          if (this.props.gameInfo.showResults === true) {
            $(".resultsTitle").hide();
            $(".resultsArea").css("visibility", "visible");
          } else {
            $(".resultsTitle").show();
            $(".resultsArea").css("visibility", "hidden");
          }
        } else if (currentSubround === "Final results") {
          $(".gamestate").hide();
          $(".finalresults").show();
          Meteor.call('games.finalresults', gameRoomIdSelected.get());
          if (this.props.gameInfo.showResults === true) {
            $(".resultsTitle").hide();
            $(".resultsArea").css("visibility", "visible");
          } else {
            $(".resultsTitle").show();
            $(".resultsArea").css("visibility", "hidden");
          }
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
            <div className="numberSubmitted">{this.props.gamedataanswered ? this.props.gamedataanswered.length : "0"} of&nbsp;
              {this.props.gamedata ? this.props.gamedata.length : "0"} Answers Submitted</div>
            <div className="categoryAndLetters">
              <div className="currentCat"><span className="catWord">Category:</span> {this.props.gameInfo ? this.props.gameInfo.roundcategories[currentRound - 1] : ""}</div>
              <div className="currentLetters">
                <ShowLetters gameInfo={this.props.gameInfo}
                             currentRound={this.props.selectedRoom ? this.props.selectedRoom.round : 0} />
              </div>
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
          <div className="gameTop">
            <div className="roundInfo">
              Round {this.props.selectedRoom ? this.props.selectedRoom.round : ""} of&nbsp;
              {this.props.gameInfo ? this.props.gameInfo.roundletters.length : ""}
            </div>
            <div className="gameTimer">{this.props.gameInfo ? this.props.gameInfo.timerSeconds : 0}</div>
          </div>
          <div className="gameMiddle">
            <div className="voteTitle animated">Time to vote!</div>
            <div className="voteArea">
              { this.showChoices() }
            </div>
          </div>
          <div className="gameBottom">
            <div className="voteStatus haveNotVoted">You have not voted yet...</div>
            <div className="voteStatus haveVoted">You voted for "{this.showVotedAnswer()}".</div>
          </div>
        </div>
        <div className="gamestate results">
          <div className="gameTop">
            <div className="roundInfo">
              Round {this.props.selectedRoom ? this.props.selectedRoom.round : ""} of&nbsp;
              {this.props.gameInfo ? this.props.gameInfo.roundletters.length : ""}
            </div>
          </div>
          <div className="gameMiddle">
            <div className="resultsTitle animated">
              Round {this.props.selectedRoom ? this.props.selectedRoom.round : ""} results!
            </div>
            <div className="resultsArea">
              <div className="resultWinner">Winner: {this.props.voteWinner ? this.props.voteWinner.user_id : ""}!</div>
              <table>
                <thead>
                  <tr className="resultItem resultsTitles">
                    <th className="resultPlace"></th>
                    <th className="resultUsername">Player</th>
                    <th className="resultAnswer">Acro</th>
                    <th className="resultAnswerTime">Time</th>
                    <th className="resultVotesRec">Vts</th>
                    <th className="resultWinBonus">WB</th>
                    <th className="resultFastest">SB</th>
                    <th className="resultVoteWinner">VfW</th>
                    <th className="resultTotalPoints">Total</th>
                  </tr>
                </thead>
                <tbody>
                  { this.showResults() }
                </tbody>
              </table>
            </div>
          </div>
          <div className="gameBottom">

          </div>
        </div>
        <div className="gamestate finalresults">
          <div className="gameTop">
            <div className="roundInfo">
              Final Results
            </div>
          </div>
          <div className="gameMiddle">
            <div className="resultsTitle animated">
              And the winner is...
            </div>
            <div className="resultsArea">
              <div className="resultWinner">Winner:
                {this.props.finalStandings[0] ? this.props.finalStandings[0].score !== this.props.finalStandings[1].score ? this.props.finalStandings[0].user_id : "Tie!" : ""}!</div>
              <table>
                <thead>
                  <tr className="resultItem resultsTitles">
                    <th className="resultPlace"></th>
                    <th className="resultUsername">Player</th>
                    <th className="resultTotalPoints">Points</th>
                  </tr>
                </thead>
                <tbody>
                  { this.showFinalResults() }
                </tbody>
              </table>
            </div>
          </div>
          <div className="gameBottom">

          </div>
        </div>
      </div>

    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('rooms');
  Meteor.subscribe('games');
  Meteor.subscribe('gamedata');
  //var userRoom = Meteor.user().currentRoom;
  return {
    currentUser: Meteor.user(),
    selectedRoom: Rooms.findOne({ room_id: gameRoomIdSelected.get() }),
    gameInfo: Games.findOne({room_id: gameRoomIdSelected.get()}) ? Games.findOne({room_id: gameRoomIdSelected.get()}) : "",
    gamedata: Gamedata.find({room_id: gameRoomIdSelected.get()}).fetch(),
    gamedataanswered: Gamedata.find( { room_id: gameRoomIdSelected.get(), answer: { $ne: "" } } ).fetch(),
    ransortgamedata: Gamedata.find({ room_id: gameRoomIdSelected.get(), answer: { $ne: "" }, user_id: { $ne: Meteor.user() ? Meteor.user().username : "" } }, {sort: { randomSorting : 1} }).fetch(),
    gamedataresults: Gamedata.find({ room_id: gameRoomIdSelected.get(), answer: { $ne: "" } }, { sort: { roundTotalPoints : -1 } }).fetch(),
    usergamedata: Gamedata.findOne({ room_id: gameRoomIdSelected.get(), user_id: Meteor.user() ? Meteor.user().username : ""}),
    voteWinner: Gamedata.find({ room_id: gameRoomIdSelected.get() }, { sort: { roundVotesReceived : -1, finalAnswerTime : 1} }).fetch()[0],
    finalStandings: Gamedata.find({ room_id: gameRoomIdSelected.get() }, { sort: { score : -1} }).fetch()
  };
}, Game);

// Game.propTypes = {
//   // This component gets the game to display through a React prop.
//   // We can use propTypes to indicate it is required
//   game: PropTypes.object.isRequired,
// };
