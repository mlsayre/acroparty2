import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {

  user.currentRoom = "";
  user.stats = {
    lifetimePoints : 0,
    lifetimeWins : 0,
    lifetimeGamesPlayed : 0
  };

  if (options.profile)
    user.profile = options.profile;

  return user;
});

Meteor.publish("userData", function () {
  if (this.userId) {
    return Meteor.users.find({_id: this.userId},
                             {fields: {'stats': 1, 'currentRoom': 1}});
  } else {
    this.ready();
  }
});
