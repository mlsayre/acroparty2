import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

import { Rooms } from '../api/rooms.js';
export const Gamedata = new Mongo.Collection('gamedata');

Meteor.methods({
  // 'rooms.addPlayer'(roomId, playerAdding) {
  //   Rooms.update(roomId, {
  //     $addToSet: { players: [playerAdding, 0] },
  //   });
  // },

  // 'rooms.removePlayer'(roomId, playerRemoving) {
  //   Rooms.update(roomId, {
  //     $pull: { players:  playerRemoving
  //   }}, {multi: true})
  // }

})
