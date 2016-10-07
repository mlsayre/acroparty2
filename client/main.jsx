import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});

Meteor.subscribe("userData");

// DB room setup
// db.rooms.insert({ room_id: "FamilyRoom", displayName: "Family Room", family: true, round: 0 });
