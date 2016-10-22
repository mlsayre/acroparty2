import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import ReactDOM from 'react-dom';

import { Rooms } from '../api/rooms.js';
import { Gamedata } from '../api/gamedata.js';
export const Games = new Mongo.Collection('games');

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
roundTimes = [9,9,9,9,9,9,9,9] // [50, 60, 60, 80, 50, 60, 60 ,80]
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
      readyTimer = {}
      playTimer = {}
      playStartTimer = {}
      voteTimer = {}
      resultsTimer = {}
      finalTimer = {}
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
    }
  },

  'games.play'(roomId, roundtime) {
    if (playTimerStatus !== "Play running") { // one timer only
      playTimerStatus = "Play running"
      Games.update({room_id: roomId}, {
        $set: { turnLetters: true }
      })
      var numberOfLetters = roundAcroLength[Rooms.findOne({room_id: roomId}).round - 1]
      playTimer[roomId] = Meteor.setTimeout(function() {
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
        voteTimerStatus = "Vote complete"
      }, 4000); //35000
    }
  },

  'games.results'(roomId) {
    if (resultsTimerStatus !== "Results running") { // one timer only
      resultsTimerStatus = "Results running"
      var currentRound = Rooms.findOne({room_id: roomId}).round;
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
          resultsTimerStatus = "Results complete"
        }, 3000); //22000
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
          resultsTimerStatus = "Results complete"
        }, 3000); //22000
      }
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
      }, 25000);
    }
    readyTimerStatus = "init"
    playTimerStatus = "init"
    voteTimerStatus = "init"
    resultsTimerStatus = "init"
    finalTimerStatus = "init"
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
        $set: { voteStartTime:countdownStartTime }
      })
    }
    var count = seconds;
    var counter = Meteor.setInterval(tock, 1000);

    function tock() {
      count=count-1;
      if (count < 0) {
         Meteor.clearInterval(counter);
         Games.update({room_id: roomId}, {
            $set: { showAnswerForm: false }
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
