import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Rooms } from '../api/rooms.js';
import { Games } from '../api/games.js';
export const Gamedata = new Mongo.Collection('gamedata');

if (Meteor.isServer) {
  Meteor.publish('gamedata', function tasksPublication() {
    return Gamedata.find();
  });
}

Meteor.methods({
  'gamedata.postAnswer'(roomId, userId, answer) {
    var submitAnswerTime = new Date();
    var randomNumber = Math.floor(Math.random()*200);
    Gamedata.update({room_id: roomId, user_id: userId}, {
      $set: { answer: answer,
              randomSorting: randomNumber,
              submitAnswerTime: submitAnswerTime },
    });
    var countStarted = Games.findOne({room_id: roomId}).playStartTime
    var finalSubmitTime = (submitAnswerTime - countStarted) / 1000;
    Gamedata.update({room_id: roomId, user_id: userId}, {
      $set: { finalAnswerTime: finalSubmitTime },
    });
  },

  'gamedata.vote'(roomId, userId, votedfor) {
    Gamedata.update({room_id: roomId, user_id: userId}, {
      $set: { votedFor: votedfor },
    });
  },

  // 'rooms.removePlayer'(roomId, playerRemoving) {
  //   Rooms.update(roomId, {
  //     $pull: { players:  playerRemoving
  //   }}, {multi: true})
  // }

})
