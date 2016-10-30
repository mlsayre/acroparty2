import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import ReactDOM from 'react-dom';

import { Rooms } from '../api/rooms.js';
import { Gamedata } from '../api/gamedata.js';
export const Games = new Mongo.Collection('games');

if (Meteor.isServer) {
  Meteor.publish('games', function tasksPublication() {
    return Games.find();
  });
}

// game config
acroLettersPool = "AAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBCCCCCCCCCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDDDDDDEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEFFFFFFFFFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHIIIIIIIIIIIIIIIIIIIIIIJJJJJKKKKKKLLLLLLLLLLLLLLLLLLLLLLLLMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNOOOOOOOOOOOOOOOOOOPPPPPPPPPPPPPPPPPPPPPPPPQQQQRRRRRRRRRRRRRRRRRRSSSSSSSSSSSSSSSSSSSSSSSSTTTTTTTTTTTTTTTTTTTTTTTTUUUUUUUVVVVVVVVVVVVWWWWWWWWWWWWXYYYYYYYYYYYYZZZZ";

acroCategories = ["General", "Sports", "Food", "Movies", "Television", "History", "Music", "Art", "Animals",
                  "Science", "Politics", "Fashion", "Books", "Travel", "Celebrities", "Romance", "Technology",
                  "Family", "School", "Nature", "Health", "Current Events", "Work", "Give Some Advice",
                  "Definitions", "Sayings", "Exercise/Fitness", "Baby's First Sentence", "My Greatest Fear",
                  "In the Year 3000", "Weird Laws", "I Was Late Because...", "Odd College Majors",
                  "My Biggest Secret", "New Ice Cream Flavors", "Bad Restaurant Names",
                  "I Got Fired Because...", "Odd Product Slogans", "Bad Habits", "Science Fiction",
                  "Strange Trends", "Embarrassing Moments", "CAVEMAN SAY...", "Superhero/villain Names",
                  "Horror Movie Titles", "In a Perfect World...", "Short Poetry", "New Year's Resolutions",
                  "My Dream Last Night", "Odd Tombstone Messages", "Awful First Dates", "Odd Holiday Customs",
                  "The Holidays", "Short Ghost Stories", "... Said No One Ever", "Fairy/Folk Tales"]

roundsToPlay = 8;
roundTimes = [50, 60, 60, 80, 50, 60, 60 ,80]
roundAcroLength = [3, 4, 5, 6, 3, 4, 5, 6]
var readyTimerStatus = "init"
var playTimerStatus = "init"
var voteTimerStatus = "init"
var resultsTimerStatus = "init"
var finalTimerStatus = "init"

////////////

Meteor.methods({
  'games.init'(roomId) {
    if (Games.find({ room_id: roomId }).fetch().length === 0) { //always make sure updates only happen once
      readyTimerStatus = "init"
      playTimerStatus = "init"
      voteTimerStatus = "init"
      resultsTimerStatus = "init"
      finalTimerStatus = "init"
      var roundletters;
      var acroPoolLength = acroLettersPool.length;
      var catPoolLength = acroCategories.length;
      var acroPlayArray = [];
      var acroCatArray = [];
      for (var i = 0; i < roundsToPlay; i++) {
        var acroToPlay = "";
        for (var j = 0; j < roundAcroLength[i]; j++) {
          acroToPlay = acroToPlay + acroLettersPool[Math.floor(Math.random() * acroPoolLength)]
        }
        acroPlayArray.push(acroToPlay);
        acroCatArray.push(acroCategories[Math.floor(Math.random() * catPoolLength)])
      }
      Games.insert({
        room_id: roomId,
        roundletters: acroPlayArray,
        roundcategories: acroCatArray,
        roundtimes: roundTimes
      });
      Rooms.update({room_id: roomId}, {
        $set: { round: 1 , subround: "Get ready" },
      });
    }
  },

  'games.getready'(roomId) {
    if (readyTimerStatus !== "Ready running") { // one timer only
      readyTimerStatus = "Ready running"
      Meteor.setTimeout(function() {
        if (Gamedata.find({room_id: roomId}).fetch().length === 0) {
          Meteor.call('games.reset', roomId );
        } else {
          Rooms.update({room_id: roomId}, {
            $set: { subround: "Play" },
          });
        }
        readyTimerStatus = "Ready complete"
      }, 3500);
      Gamedata.update({room_id: roomId}, {
        $set: { answer: "",
                votedFor: "",
                roundVotesReceived: 0,
                roundWonBonus: 0,
                roundSpeedBonus: 0,
                roundVotedForWinner: 0,
                roundTotalPoints: 0 },
      }, { multi: true } );
    }
  },

  'games.play'(roomId, roundtime) {
    if (playTimerStatus !== "Play running") { // one timer only
      playTimerStatus = "Play running"
      Games.update({room_id: roomId}, {
        $set: { turnLetters: true }
      })
      var numberOfLetters = roundAcroLength[Rooms.findOne({room_id: roomId}).round - 1]
      Meteor.setTimeout(function() {
        if (Gamedata.find({room_id: roomId}).fetch().length === 0) {
          Meteor.call('games.reset', roomId );
        } else {
          Rooms.update({room_id: roomId}, {
            $set: { subround: "Vote" },
          });
        }
        playTimerStatus = "Play complete"
        Games.update({room_id: roomId}, {
          $set: { playStartAnswering: false }
        })
      }, (roundtime * 1000) + (numberOfLetters * 1000) + 5000);
      Meteor.setTimeout(function() {
        Games.update({room_id: roomId}, {
          $set: { playStartAnswering: true,
                  timerSeconds: roundtime }
        })
        timer(roundtime, roomId, "playtimerstate");
      }, (numberOfLetters * 1000) + 2000)


      Meteor.setTimeout(function() {
        Meteor.call('games.letterFlipFlagOff', roomId);
      }, (numberOfLetters * 1000) + 600)
    }
  },

  'games.vote'(roomId) {
    if (voteTimerStatus !== "Vote running") { // one timer only
      voteTimerStatus = "Vote running"
      Meteor.setTimeout(function() {
        if (Gamedata.find({room_id: roomId}).fetch().length === 0) {
          Meteor.call('games.reset', roomId );
        } else {
          Rooms.update({room_id: roomId}, {
            $set: { subround: "Results" },
          });
        }
        Games.update({room_id: roomId}, {
        $set: { voteStartVoting: false }
      })
        voteTimerStatus = "Vote complete"
      }, 37000); //37000
      Games.update({room_id: roomId}, {
        $set: { voteStartVoting: true,
                timerSeconds: 35 }
      })
      timer(35, roomId, "votetimerstate");
    }
  },

  'games.results'(roomId) {
    if (resultsTimerStatus !== "Results running") { // one timer only
      resultsTimerStatus = "Results running"
      //tally votes, etc.
      var currentRound = Rooms.findOne({room_id: roomId}).round;
      var roundBonus = Games.findOne({room_id: roomId}).roundletters[currentRound - 1].length
      Gamedata.find({room_id: roomId}).fetch().forEach(function(gamedata) {
        if ( Gamedata.findOne({room_id: roomId, user_id: gamedata.votedFor})) {
          Gamedata.update({room_id: roomId, user_id: gamedata.votedFor, votedFor: { $ne: "" } }, {
            $inc: { roundVotesReceived: 1 }
          })
        }
      })
      // bonus for vote winner
      var voteWinner = Gamedata.findOne({ room_id: roomId, votedFor: { $ne: "" } }, {$sort: { roundVotesReceived : -1, finalAnswerTime : 1} })
      if (typeof voteWinner !== "undefined") {
        Gamedata.update(voteWinner._id, {
          $inc: { roundWonBonus: roundBonus }
        })
      }
      // bonus for speediest answer getting at least one vote
      var speedWinner = Gamedata.findOne({ room_id: roomId, votedFor: { $ne: "" }  }, {$sort: { roundVotesReceived : { $ne: 0 }, finalAnswerTime : 1} })
      if (typeof speedWinner !== "undefined") {
        Gamedata.update(speedWinner._id, {
          $inc: { roundSpeedBonus: 2 }
        })
      }
      // bonus for players voting for winner
      if (typeof voteWinner !== "undefined") {
        Gamedata.find({room_id: roomId, votedFor: voteWinner.user_id}).fetch().forEach(function(gamedata) {
          if (typeof gamedata !== "undefined") {
            Gamedata.update(gamedata._id, {
              $inc: { roundVotedForWinner: 1 }
            })
          }
        })
      }
      // total the points
      Gamedata.find({room_id: roomId}).fetch().forEach(function(gamedata) {
        var totalpoints = gamedata.roundVotesReceived + gamedata.roundWonBonus + gamedata.roundSpeedBonus + gamedata.roundVotedForWinner
        if (typeof gamedata !== "undefined") {
          Gamedata.update(gamedata._id, {
            $inc: { roundTotalPoints: totalpoints,
                    score: totalpoints }
          })
        }
      })

      if (currentRound === roundsToPlay) {
        Meteor.setTimeout(function() {
          if (Gamedata.find({room_id: roomId}).fetch().length < 2) { // end game after results if not enough players
            resultsTimerStatus = "Results complete"
            Meteor.call('games.reset', roomId );
          } else {
            Rooms.update({room_id: roomId}, {
              $set: { subround: "Final results" },
            });
          }
          Games.update({room_id: roomId}, {
            $set: { showResults: false}
          })
          resultsTimerStatus = "Results complete"
        }, 22000); //22000
      } else {
        Meteor.setTimeout(function() {
          if (Gamedata.find({room_id: roomId}).fetch().length < 2) { // end game after results if not enough players
            resultsTimerStatus = "Results complete"
            Meteor.call('games.reset', roomId );
          } else {
            Rooms.update({room_id: roomId}, {
              $set: { round: currentRound + 1,
                      subround: "Get ready" },
            });
          }
          Games.update({room_id: roomId}, {
            $set: { showResults: false}
          })
          resultsTimerStatus = "Results complete"
        }, 22000); //22000
      }
      Meteor.setTimeout(function() {
        Games.update({room_id: roomId}, {
          $set: { showResults: true}
        })
      }, 2000);
    }
  },

  'games.finalresults'(roomId) {
    if (finalTimerStatus !== "Final running") { // one timer only
      finalTimerStatus = "Final running"
      Meteor.setTimeout(function() {
        if (Gamedata.find({room_id: roomId}).fetch().length < 2) { // end game after results if not enough players
          finalTimerStatus = "Final complete"
          Meteor.call('games.reset', roomId );
        } else { // set up for new game
          Games.remove({ room_id: roomId });
          Meteor.call('games.init', roomId );
        }
        finalTimerStatus = "Final complete"
      }, 8000); //25000
    }
  },

  'games.reset'(roomId) {
    Games.remove({ room_id: roomId });
    Gamedata.remove({ room_id: roomId });
    Rooms.update({room_id: roomId}, {
      $set: { round: 0,
              subround: "Waiting for players" },
    });
    readyTimerStatus = "init"
    playTimerStatus = "init"
    voteTimerStatus = "init"
    resultsTimerStatus = "init"
    finalTimerStatus = "init"
  },

  'games.letterFlipFlagOff'(roomId) {
    Games.update({room_id: roomId}, {
      $set: { turnLetters: false }
    })
  }

})

function timer(seconds, roomId, statetoactivate) {

  Meteor.setTimeout(function() {
    var countdownStartTime = new Date();
    if (statetoactivate === "playtimerstate") {
      Games.update({room_id: roomId}, {
        $set: { playStartTime:countdownStartTime,
                showAnswerForm: true }
      })
    } else {
      Games.update({room_id: roomId}, {
        $set: { showAnswersForVote: true }
      })
    }
    var count = seconds;
    var counter = Meteor.setInterval(tock, 1000);

    function tock() {
      count=count-1;
      if (count < 0) {
         Meteor.clearInterval(counter);
         Games.update({room_id: roomId}, {
            $set: { showAnswerForm: false,
                    showAnswersForVote: false }
          })
         return;
      }
      Games.update({room_id: roomId}, {
        $set: { timerSeconds: count }
      })
    }
  }, 2000);
}

    // Games.find({ room_id: roomId }).remove({});
