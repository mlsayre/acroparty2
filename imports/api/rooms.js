import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Rooms = new Mongo.Collection('rooms');
import { Gamedata } from '../api/gamedata.js';

if (Meteor.isServer) {
  Meteor.publish('rooms', function tasksPublication() {
    return Rooms.find();
  });
}

Meteor.methods({
  'rooms.addPlayer'(roomId, playerAdding) {
    if (!Gamedata.findOne({room_id: roomId, user_id: playerAdding})) {
      Gamedata.insert({
        room_id: roomId,
        user_id: playerAdding,
        answer: "",
        votedFor: "",
        roundVotesReceived: 0,
        roundWonBonus: 0,
        roundSpeedBonus: 0,
        roundVotedForWinner: 0,
        roundTotalPoints: 0,
        score: 0 ,
        finalAnswerTime: ""
      });
    }
  },

  'rooms.removePlayer'(roomId, playerRemoving) {
    Gamedata.remove({room_id: roomId, user_id: playerRemoving});
  }

})
