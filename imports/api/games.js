import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Rooms } from '../api/rooms.js';
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

////////////

Meteor.methods({
  'games.init'(roomId) {
    if (Games.find({ room_id: roomId }).fetch().length === 0) { //always make sure updates only happen once
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
    if (!readyTimer) { // one timer only
      var readyTimer = Meteor.setTimeout(function() {
        if (Rooms.findOne({room_id: roomId}).players.length === 0) {
          Meteor.call('games.reset', roomId );
        } else {
          Rooms.update({room_id: roomId}, {
            $set: { subround: "Play" },
          });
        }
      }, 7000);
      readyTimer = null;
    }
  },

  'games.play'(roomId, roundtime) {
    if (!playTimer) { // one timer only
      var playTimer = Meteor.setTimeout(function() {
        if (Rooms.findOne({room_id: roomId}).players.length === 0) {
          Meteor.call('games.reset', roomId );
        } else {
          Rooms.update({room_id: roomId}, {
            $set: { subround: "Vote" },
          });
        }
      }, (roundtime * 1000) + 20000);
      playTimer = null;
    }
  },

  'games.vote'(roomId) {
    if (!voteTimer) { // one timer only
      var voteTimer = Meteor.setTimeout(function() {
        if (Rooms.findOne({room_id: roomId}).players.length === 0) {
          Meteor.call('games.reset', roomId );
        } else {
          Rooms.update({room_id: roomId}, {
            $set: { subround: "Results" },
          });
        }
      }, 35000);
      voteTimer = null;
    }
  },

  'games.results'(roomId) {
    if (!resultsTimer) { // one timer only
      var currentRound = Rooms.findOne({room_id: roomId}).round;
      if (currentRound === roundsToPlay) {
        var resultsTimer = Meteor.setTimeout(function() {
          if (Rooms.findOne({room_id: roomId}).players.length < 2) { // end game after results if not enough players
            Meteor.call('games.reset', roomId );
          } else {
            Rooms.update({room_id: roomId}, {
              $set: { subround: "Final results" },
            });
          }
        }, 22000);
      } else {
        var resultsTimer = Meteor.setTimeout(function() {
          if (Rooms.findOne({room_id: roomId}).players.length < 2) { // end game after results if not enough players
            Meteor.call('games.reset', roomId );
          } else {
            Rooms.update({room_id: roomId}, {
              $set: { round: currentRound + 1,
                      subround: "Get ready" },
            });
          }
        }, 22000);
      }
      resultsTimer = null;
    }
  },

  'games.finalresults'(roomId) {
    if (!finalTimer) { // one timer only
      var finalTimer = Meteor.setTimeout(function() {
        if (Rooms.findOne({room_id: roomId}).players.length < 2) { // end game after results if not enough players
          Meteor.call('games.reset', roomId );
        } else { // set up for new game
          Games.remove({ room_id: roomId });
          Meteor.call('games.init', roomId );
        }
      }, 25000);
    }
    finalTimer = null;
  },

  'games.reset'(roomId) {
    Games.remove({ room_id: roomId });
    Rooms.update({room_id: roomId}, {
      $set: { round: 0,
              subround: "Waiting for players" },
    });
  }




})

    // Games.find({ room_id: roomId }).remove({});
