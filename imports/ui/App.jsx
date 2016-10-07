import React, { Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { createContainer } from 'meteor/react-meteor-data';

import { Rooms } from '../api/rooms.js';

import Room from './Room.jsx';

// App component - represents the whole app
export default class App extends Component {
  renderRooms() {
    return this.props.rooms.map((room) => (
      <Room key={room._id} room={room} />
    ));
  }

  renderLifePoints() {
    // this.props.currentUser ? <span>{ this.props.currentUser.stats.lifetimePoints }</span> : '';
    if (this.props.currentUser) {
      if (this.props.currentUser.stats) {
        return  <span>{ this.props.currentUser.stats.lifetimePoints }</span>;
      } else {
        return "";
      }
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Welcome to AcroParty!</h1>
        </header>
        <div>Life wins is { this.renderLifePoints() }</div>
        <div className="roomList"><div className="roomListTitle">Rooms</div>{ this.renderRooms() }</div>
        <AccountsUIWrapper />

      </div>
    );
  }
}

export default createContainer(() => {
  return {
    currentUser: Meteor.user(),
    rooms: Rooms.find({}).fetch(),
  };
}, App);
