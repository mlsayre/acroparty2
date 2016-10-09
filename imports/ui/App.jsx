import React, { Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { ReactiveVar } from 'meteor/reactive-var';

import { Rooms } from '../api/rooms.js';
import { Chats } from '../api/chats.js';

import Room from './Room.jsx';
import Chat from './Chat.jsx';

var gameRoomIdSelected = new ReactiveVar("");

// App component - represents the whole app
export default class App extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     gameRoomId: "",
  //   };
  // }

  userRouting() {
    if (this.props.currentUser) {
      $(".frontSignin").hide();
    } else {
      $(".frontSignin").show();
      $(".mainScreen, .stats, .chat, .gamePlay, .settings").hide();
    }
    $(".acroparty").show()
  }

  // rooms
  gotoRoom(e) {
    var theroom = $(e.target).attr("data-room")
    gameRoomIdSelected.set(theroom);
    $(".mainScreen, .popup").hide();
    $(".chat").attr("id", theroom).show();
  }
  renderRooms() {
    return this.props.rooms.map((room) => (
      <Room key={room._id} room={room} updateRoom={this.gotoRoom.bind(this)}/>
    ));
  }
  renderRoomId() {
    return gameRoomIdSelected.get();
    // return this.props.currentUser.currentRoom
  }
  roomName() {
    if (this.props.selectedRoom) {
      var theRoomName = this.props.selectedRoom.displayName;
    } else {
      var theRoomName = ""
    }

    return theRoomName
  }

  // stats
  closePopup(e) {
    $(".popup").hide();
  }

  openStats(e) {
    $(".settings").hide();
    $(".stats").show();
  }

  renderUsername() {
    if (this.props.currentUser) {
      if (this.props.currentUser.username) {
        return  <span>{ this.props.currentUser.username }</span>;
      } else {
        return "";
      }
    } else {
      return "";
    }
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
          <div className="welcomeText">
            Welcome, { this.renderUsername() }! Please select a room to start playing...
          </div>
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
          <section className="gamePlay">
          </section>

          This is where chat will happen. This is game room id: {this.renderRoomId()}.
          <Chat clickStats={this.openStats.bind(this)} clickSettings={this.openSettings.bind(this)}
                roomName={this.roomName()} />
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
  //var userRoom = Meteor.user().currentRoom;
  return {
    currentUser: Meteor.user(),
    rooms: Rooms.find({}).fetch(),
    selectedRoom: Rooms.findOne({ room_id: gameRoomIdSelected.get() }),
  };
}, App);

