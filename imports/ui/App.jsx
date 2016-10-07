import React, { Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { createContainer } from 'meteor/react-meteor-data';

import { Rooms } from '../api/rooms.js';

import Room from './Room.jsx';

// App component - represents the whole app
export default class App extends Component {
  userRouting() {
    if (this.props.currentUser) {
      $(".frontSignin").hide();
      $(".mainScreen").show();
    } else {
      $(".frontSignin").show();
    }
    $(".acroparty").show()
  }

  // rooms
  renderRooms() {
    return this.props.rooms.map((room) => (
      <Room key={room._id} room={room} />
    ));
  }

  // stats
  closePopup(e) {
    $(".popup").hide();
  }

  openStats(e) {
    $(".settings").hide();
    $(".stats").show();
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

  //settings
  openSettings(e) {
    $(".stats").hide();
    $(".settings").show();
  }

  render() {
    return (

      <div className="acroparty">
        {this.userRouting()}
        <section className="frontSignin" style={{"display" : "none"}}>
          <h1>Welcome to AcroParty!</h1>
          <AccountsUIWrapper />
        </section>

        <section className="mainScreen">
          <header>
            <h1>AcroParty</h1>
          </header>
          <div className="roomList">
            <div className="roomListTitle">Rooms</div>
            { this.renderRooms() }
          </div>
          <div className="mainButtons">
            <button className="mainButton" onClick={this.openStats.bind(this)}>Stats</button>
            <button className="mainButton" onClick={this.openSettings.bind(this)}>Settings</button>
          </div>
        </section>

        <section className="chat">

        </section>

        <section className="gamePlay">

        </section>

        <section className="stats popup">
          <div>Life wins is { this.renderLifePoints() }</div>
          <button className="popupButton" onClick={this.closePopup.bind(this)}>Close</button>
        </section>

        <section className="settings popup">
          <AccountsUIWrapper />
          <button className="popupButton" onClick={this.closePopup.bind(this)}>Close</button>
        </section>


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

