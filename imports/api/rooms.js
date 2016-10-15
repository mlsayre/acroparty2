import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Rooms = new Mongo.Collection('rooms');

Meteor.methods({
  'rooms.addPlayer'(roomId, playerAdding) {
    Rooms.update(roomId, {
      $addToSet: { players: playerAdding },
    });
  },

  'rooms.removePlayer'(roomId, playerRemoving) {
    Rooms.update(roomId, {
      $pull: { players:  playerRemoving
    }}, {multi: true})
  }

})
