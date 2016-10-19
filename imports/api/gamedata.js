import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Rooms } from '../api/rooms.js';
export const Gamedata = new Mongo.Collection('gamedata');

Meteor.methods({
  'gamedata.postAnswer'(roomId, userId, answer, answerTime) {
    Gamedata.update({room_id: roomId, user_id: userId}, {
      $set: { answer: answer,
              answerTime: answerTime },
    });
  },

  // 'rooms.removePlayer'(roomId, playerRemoving) {
  //   Rooms.update(roomId, {
  //     $pull: { players:  playerRemoving
  //   }}, {multi: true})
  // }

})
