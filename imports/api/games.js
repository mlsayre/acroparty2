import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Games = new Mongo.Collection('games');

Meteor.methods({
  // 'games.something'(roomId, playerAdding) {
  //   Games.update(roomId, {
  //     $addToSet: { players: playerAdding },
  //   });
  // },


})
