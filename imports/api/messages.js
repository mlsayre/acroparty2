import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Messages = new Mongo.Collection('messages');

if (Meteor.isServer) {
  Meteor.publish('messages', function tasksPublication() {
    return Messages.find();
  });
}

Meteor.methods({
  'messages.msgPlayer'(roomId, name, verb, roomName, className) {
    Messages.insert({
      user_id: "<PartyHost>",
      room_id: roomId,
      message: name + verb + roomName,
      messageClass: className,
      createdAt: new Date()
    });
  },

  'messages.postMessage'(name, roomId, message) {
    Messages.insert({
      user_id: name,
      room_id: roomId,
      message: message,
      createdAt: new Date() });
  },

  'messages.deleteOld'(messageId) {
    Messages.remove({ _id : messageId});
  }

})
