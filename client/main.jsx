import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { moment } from 'meteor/momentjs:moment';

import '../imports/startup/accounts-config.js';
import './utilities.js';
import './jquery.lettering.js';
import './jquery.textillate.js';
import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});

Meteor.subscribe("userData");

// DB room setup
// db.rooms.insert({ room_id: "FamilyRoom", displayName: "Family Room", family: true, round: 0, subround: "Waiting for players" });
// db.rooms.insert({ room_id: "HotTub", displayName: "Hot Tub", family: false, round: 0, subround: "Waiting for players" });

            // <span className="letter1">{theLetters[0]}</span>
            // <span className="letter2">{theLetters[1]}</span>
            // <span className="letter3">{theLetters[2]}</span>
            // {theLetters[3] ? <span className="letter4">{theLetters[3]}</span> : ""}
            // {theLetters[4] ? <span className="letter5">{theLetters[4]}</span> : ""}
            // {theLetters[5] ? <span className="letter6">{theLetters[5]}</span> : ""}
            // {theLetters[6] ? <span className="letter7">{theLetters[6]}</span> : ""}
