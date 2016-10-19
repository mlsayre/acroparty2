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
roundTimes = [50, 60, 60, 80, 50, 60, 60 ,80]
roundAcroLength = [3, 4, 5, 6, 3, 4, 5, 6]
readyTimer = {}
playTimer = {}
playStartTimer = {}
voteTimer = {}
resultsTimer = {}
finalTimer = {}


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
    if (!readyTimer[roomId]) { // one timer only
      readyTimer[roomId] = Meteor.setTimeout(function() {
        if (Gamedata.find({room_id: roomId}).fetch().length === 0) {
          Meteor.call('games.reset', roomId );
        } else {
          Rooms.update({room_id: roomId}, {
            $set: { subround: "Play" },
          });
        }
        delete readyTimer[roomId];
      }, 7000);
    }
  },

  'games.play'(roomId, roundtime) {
    if (!playTimer[roomId]) { // one timer only
      playTimer[roomId] = Meteor.setTimeout(function() {
        if (Gamedata.find({room_id: roomId}).fetch().length === 0) {
          Meteor.call('games.reset', roomId );
        } else {
          Rooms.update({room_id: roomId}, {
            $set: { subround: "Vote" },
          });
        }
        delete playTimer[roomId];
      }, (roundtime * 1000) + 20000);
    }
    if (!playStartTimer[roomId]) {
      playStartTimer[roomId] = Meteor.setTimeout(function() {
        Games.update({room_id: roomId}, {
          $set: { playStartAnswering: true,
                  timerSeconds: roundtime }
        })
        timer(roundtime, roomId, "playtimerstate");
      }, 16000)
    }
  },

  'games.vote'(roomId) {
    delete playStartTimer[roomId]
    Games.update({room_id: roomId}, {
      $set: { playStartAnswering: false }
    })
    if (!voteTimer[roomId]) { // one timer only
      voteTimer[roomId] = Meteor.setTimeout(function() {
        if (Gamedata.find({room_id: roomId}).fetch().length === 0) {
          Meteor.call('games.reset', roomId );
        } else {
          Rooms.update({room_id: roomId}, {
            $set: { subround: "Results" },
          });
        }
        delete voteTimer[roomId];
      }, 35000);
    }
  },

  'games.results'(roomId) {
    if (!resultsTimer[roomId]) { // one timer only
      var currentRound = Rooms.findOne({room_id: roomId}).round;
      if (currentRound === roundsToPlay) {
        resultsTimer[roomId] = Meteor.setTimeout(function() {
          if (Gamedata.find({room_id: roomId}).fetch().length < 2) { // end game after results if not enough players
            delete resultsTimer[roomId];
            Meteor.call('games.reset', roomId );
          } else {
            Rooms.update({room_id: roomId}, {
              $set: { subround: "Final results" },
            });
          }
          delete resultsTimer[roomId];
        }, 22000);
      } else {
        resultsTimer[roomId] = Meteor.setTimeout(function() {
          if (Gamedata.find({room_id: roomId}).fetch().length < 2) { // end game after results if not enough players
            delete resultsTimer[roomId];
            Meteor.call('games.reset', roomId );
          } else {
            Rooms.update({room_id: roomId}, {
              $set: { round: currentRound + 1,
                      subround: "Get ready" },
            });
          }
          delete resultsTimer[roomId]
        }, 22000);
      }
    }
  },

  'games.finalresults'(roomId) {
    if (!finalTimer[roomId]) { // one timer only
      finalTimer[roomId] = Meteor.setTimeout(function() {
        if (Gamedata.find({room_id: roomId}).fetch().length < 2) { // end game after results if not enough players
          delete finalTimer[roomId];
          Meteor.call('games.reset', roomId );
        } else { // set up for new game
          Games.remove({ room_id: roomId });
          Meteor.call('games.init', roomId );
        }
        delete finalTimer[roomId];
      }, 25000);
    }
    readyTimer = {}
    playTimer = {}
    playStartTimer = {}
    voteTimer = {}
    resultsTimer = {}
  },

  'games.reset'(roomId) {
    Games.remove({ room_id: roomId });
    Gamedata.remove({ room_id: roomId });
    Rooms.update({room_id: roomId}, {
      $set: { round: 0,
              subround: "Waiting for players" },
    });
    readyTimer = {}
    playTimer = {}
    playStartTimer = {}
    voteTimer = {}
    resultsTimer = {}
  }

})

function timer(seconds, roomId, statetoactivate) {

  Meteor.setTimeout(function() {
    var countdownStartTime = new Date();
    if (statetoactivate === "playtimerstate") {
      Games.update({room_id: roomId}, {
        $set: { playStartTime:countdownStartTime }
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
      if (count <= 0) {
         Meteor.clearInterval(counter);
         return;
      }
      Games.update({room_id: roomId}, {
        $set: { timerSeconds: count }
      })
    }
  }, 2000);
}

    // Games.find({ room_id: roomId }).remove({});
