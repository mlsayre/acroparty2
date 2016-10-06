import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {

  user.stats = {
    lifetimePoints : 0,
    lifetimeWins : 0,
    lifetimeGamesPlayed : 0
  };

  if (options.profile)
    user.profile = options.profile;
  return user;
});
