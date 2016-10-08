import { Accounts } from 'meteor/accounts-base';

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
});

Accounts.onLogin(function(user){
    console.log('hi');
    $(".mainScreen").show();
    //App.showPrivate();
});
