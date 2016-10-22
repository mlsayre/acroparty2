import { Mongo } from 'meteor/mongo';

export const Chats = new Mongo.Collection('chats');

if (Meteor.isServer) {
  Meteor.publish('chats', function tasksPublication() {
    return Chats.find();
  });
}
