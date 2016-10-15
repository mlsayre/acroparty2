import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { moment } from 'meteor/momentjs:moment';

import '../imports/startup/accounts-config.js';
import './utilities.js';
import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});

Meteor.subscribe("userData");

// DB room setup
// db.rooms.insert({ room_id: "FamilyRoom", displayName: "Family Room", family: true, round: 0, subround: "notstarted", players: [] });
// db.rooms.insert({ room_id: "HotTub", displayName: "Hot Tub", family: false, round: 0, subround: "notstarted", players: [] });


