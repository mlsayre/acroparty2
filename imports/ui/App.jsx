import React, { Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import { ReactiveVar } from 'meteor/reactive-var';
export var gameRoomIdSelected = new ReactiveVar("");

import { Rooms } from '../api/rooms.js';
import { Chats } from '../api/chats.js';
import { Messages } from '../api/messages.js';

import Room from './Room.jsx';
import Chat from './Chat.jsx';



// App component - represents the whole app
export default class App extends Component {

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
    var roomToJoin =  Rooms.findOne({ room_id: theroom })
    Rooms.update(roomToJoin._id, {
      $addToSet: { players: this.props.currentUser.username },
    });
    $(".mainScreen, .popup").hide();
    $(".chat").attr("id", theroom).show();
    var enteringRoomVerb = [" appears in the ", " saunters into the ", " walks into the ", " struts into the ",
                            " sprints into the ", " apparates into the ", " materializes in the ",
                            " mysteriously arises inside the ", " seems to have entered our ",
                            " ridiculously enters the ", " crashed through the window into the ",
                            " is suddenly in the ", " scoots on in to the ", " politely enters the "]
    var randomVerb = enteringRoomVerb[Math.floor(Math.random() * enteringRoomVerb.length)]
    Messages.insert({
      user_id: "<PartyHost>",
      room_id: gameRoomIdSelected.get(),
      message: this.props.currentUser.username + randomVerb +
                Rooms.findOne({ room_id: gameRoomIdSelected.get() }).displayName + "...",
      createdAt: new Date() });
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
  roomPlayers() {
    if (this.props.selectedRoom) {
      var theRoomPlayers = this.props.selectedRoom.players;
    } else {
      var theRoomPlayers = []
    }
    return theRoomPlayers
  }
  exitRoom(e) {
    Rooms.update(this.props.selectedRoom._id, { $pull: { players:  this.props.currentUser.username }}, {multi: true})
    $(".popup").hide();
    $("#" + gameRoomIdSelected.get()).hide();
    gameRoomIdSelected.set("");
    $(".chat").removeAttr("id");
    $(".mainScreen").show();
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
                roomName={this.roomName()} roomPlayers={this.roomPlayers()} exitRoom={this.exitRoom.bind(this)}
                roomId={this.renderRoomId()} />
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

