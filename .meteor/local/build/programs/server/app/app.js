var require = meteorInstall({"imports":{"api":{"chats.js":["meteor/mongo",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/chats.js                                                                           //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.export({Chats:function(){return Chats}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                  //
var Chats = new Mongo.Collection('chats');                                                        // 3
                                                                                                  //
if (Meteor.isServer) {                                                                            // 5
  Meteor.publish('chats', function tasksPublication() {                                           // 6
    return Chats.find();                                                                          // 7
  });                                                                                             // 8
}                                                                                                 // 9
////////////////////////////////////////////////////////////////////////////////////////////////////

}],"gamedata.js":["meteor/meteor","meteor/mongo","meteor/check","../api/rooms.js","../api/games.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/gamedata.js                                                                        //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.export({Gamedata:function(){return Gamedata}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});var Rooms;module.import('../api/rooms.js',{"Rooms":function(v){Rooms=v}});var Games;module.import('../api/games.js',{"Games":function(v){Games=v}});
                                                                                                  // 2
                                                                                                  // 3
                                                                                                  //
                                                                                                  // 5
                                                                                                  // 6
var Gamedata = new Mongo.Collection('gamedata');                                                  // 7
                                                                                                  //
if (Meteor.isServer) {                                                                            // 9
  Meteor.publish('gamedata', function tasksPublication() {                                        // 10
    return Gamedata.find();                                                                       // 11
  });                                                                                             // 12
}                                                                                                 // 13
                                                                                                  //
Meteor.methods({                                                                                  // 15
  'gamedata.postAnswer': function gamedataPostAnswer(roomId, userId, answer) {                    // 16
    var submitAnswerTime = new Date();                                                            // 17
    Gamedata.update({ room_id: roomId, user_id: userId }, {                                       // 18
      $set: { answer: answer,                                                                     // 19
        submitAnswerTime: submitAnswerTime }                                                      // 20
    });                                                                                           // 18
    var countStarted = Games.findOne({ room_id: roomId }).playStartTime;                          // 22
    var finalSubmitTime = (submitAnswerTime - countStarted) / 1000;                               // 23
    Gamedata.update({ room_id: roomId, user_id: userId }, {                                       // 24
      $set: { finalAnswerTime: finalSubmitTime }                                                  // 25
    });                                                                                           // 24
  }                                                                                               // 27
});                                                                                               // 15
////////////////////////////////////////////////////////////////////////////////////////////////////

}],"games.js":["meteor/meteor","meteor/mongo","meteor/check","react-dom","../api/rooms.js","../api/gamedata.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/games.js                                                                           //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.export({Games:function(){return Games}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var Rooms;module.import('../api/rooms.js',{"Rooms":function(v){Rooms=v}});var Gamedata;module.import('../api/gamedata.js',{"Gamedata":function(v){Gamedata=v}});
                                                                                                  // 2
                                                                                                  // 3
                                                                                                  // 4
                                                                                                  //
                                                                                                  // 6
                                                                                                  // 7
var Games = new Mongo.Collection('games');                                                        // 8
                                                                                                  //
if (Meteor.isServer) {                                                                            // 10
  Meteor.publish('games', function tasksPublication() {                                           // 11
    return Games.find();                                                                          // 12
  });                                                                                             // 13
}                                                                                                 // 14
                                                                                                  //
// game config                                                                                    //
acroLettersPool = "AAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBCCCCCCCCCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDDDDDDEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEFFFFFFFFFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHIIIIIIIIIIIIIIIIIIIIIIJJJJJKKKKKKLLLLLLLLLLLLLLLLLLLLLLLLMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNOOOOOOOOOOOOOOOOOOPPPPPPPPPPPPPPPPPPPPPPPPQQQQRRRRRRRRRRRRRRRRRRSSSSSSSSSSSSSSSSSSSSSSSSTTTTTTTTTTTTTTTTTTTTTTTTUUUUUUUVVVVVVVVVVVVWWWWWWWWWWWWXYYYYYYYYYYYYZZZZ";
                                                                                                  //
acroCategories = ["General", "Sports", "Food", "Movies", "Television", "History", "Music", "Art", "Animals", "Science", "Politics", "Fashion", "Books", "Travel", "Celebrities", "Romance", "Technology", "Family", "School", "Nature", "Health", "Current Events", "Work", "Give Some Advice", "Definitions", "Sayings", "Exercise/Fitness", "Baby's First Sentence", "My Greatest Fear", "In the Year 3000", "Weird Laws", "I Was Late Because...", "Odd College Majors", "My Biggest Secret", "New Ice Cream Flavors", "Bad Restaurant Names", "I Got Fired Because...", "Odd Product Slogans", "Bad Habits", "Science Fiction", "Strange Trends", "Embarrassing Moments", "CAVEMAN SAY...", "Superhero/villain Names", "Horror Movie Titles", "In a Perfect World...", "Short Poetry", "New Year's Resolutions", "My Dream Last Night", "Odd Tombstone Messages", "Awful First Dates", "Odd Holiday Customs", "The Holidays", "Short Ghost Stories", "... Said No One Ever", "Fairy/Folk Tales"];
                                                                                                  //
roundsToPlay = 8;                                                                                 // 31
roundTimes = [12, 12, 12, 12, 12, 12, 12, 12]; // [50, 60, 60, 80, 50, 60, 60 ,80]                // 32
roundAcroLength = [3, 4, 5, 6, 3, 4, 5, 6];                                                       // 33
var readyTimerStatus = "init";                                                                    // 34
var playTimerStatus = "init";                                                                     // 35
var voteTimerStatus = "init";                                                                     // 36
var resultsTimerStatus = "init";                                                                  // 37
var finalTimerStatus = "init";                                                                    // 38
                                                                                                  //
////////////                                                                                      //
                                                                                                  //
Meteor.methods({                                                                                  // 42
  'games.init': function gamesInit(roomId) {                                                      // 43
    if (Games.find({ room_id: roomId }).fetch().length === 0) {                                   // 44
      //always make sure updates only happen once                                                 //
      readyTimer = {};                                                                            // 45
      playTimer = {};                                                                             // 46
      playStartTimer = {};                                                                        // 47
      voteTimer = {};                                                                             // 48
      resultsTimer = {};                                                                          // 49
      finalTimer = {};                                                                            // 50
      var roundletters;                                                                           // 51
      var acroPoolLength = acroLettersPool.length;                                                // 52
      var catPoolLength = acroCategories.length;                                                  // 53
      var acroPlayArray = [];                                                                     // 54
      var acroCatArray = [];                                                                      // 55
      for (var i = 0; i < roundsToPlay; i++) {                                                    // 56
        var acroToPlay = "";                                                                      // 57
        for (var j = 0; j < roundAcroLength[i]; j++) {                                            // 58
          acroToPlay = acroToPlay + acroLettersPool[Math.floor(Math.random() * acroPoolLength)];  // 59
        }                                                                                         // 60
        acroPlayArray.push(acroToPlay);                                                           // 61
        acroCatArray.push(acroCategories[Math.floor(Math.random() * catPoolLength)]);             // 62
      }                                                                                           // 63
      Games.insert({                                                                              // 64
        room_id: roomId,                                                                          // 65
        roundletters: acroPlayArray,                                                              // 66
        roundcategories: acroCatArray,                                                            // 67
        roundtimes: roundTimes                                                                    // 68
      });                                                                                         // 64
      Rooms.update({ room_id: roomId }, {                                                         // 70
        $set: { round: 1, subround: "Get ready" }                                                 // 71
      });                                                                                         // 70
    }                                                                                             // 73
  },                                                                                              // 74
  'games.getready': function gamesGetready(roomId) {                                              // 76
    if (readyTimerStatus !== "Ready running") {                                                   // 77
      // one timer only                                                                           //
      readyTimerStatus = "Ready running";                                                         // 78
      Meteor.setTimeout(function () {                                                             // 79
        if (Gamedata.find({ room_id: roomId }).fetch().length === 0) {                            // 80
          Meteor.call('games.reset', roomId);                                                     // 81
        } else {                                                                                  // 82
          Rooms.update({ room_id: roomId }, {                                                     // 83
            $set: { subround: "Play" }                                                            // 84
          });                                                                                     // 83
        }                                                                                         // 86
        readyTimerStatus = "Ready complete";                                                      // 87
      }, 3500);                                                                                   // 88
    }                                                                                             // 89
  },                                                                                              // 90
  'games.play': function gamesPlay(roomId, roundtime) {                                           // 92
    if (playTimerStatus !== "Play running") {                                                     // 93
      // one timer only                                                                           //
      playTimerStatus = "Play running";                                                           // 94
      Games.update({ room_id: roomId }, {                                                         // 95
        $set: { turnLetters: true }                                                               // 96
      });                                                                                         // 95
      var numberOfLetters = roundAcroLength[Rooms.findOne({ room_id: roomId }).round - 1];        // 98
      playTimer[roomId] = Meteor.setTimeout(function () {                                         // 99
        if (Gamedata.find({ room_id: roomId }).fetch().length === 0) {                            // 100
          Meteor.call('games.reset', roomId);                                                     // 101
        } else {                                                                                  // 102
          Rooms.update({ room_id: roomId }, {                                                     // 103
            $set: { subround: "Vote" }                                                            // 104
          });                                                                                     // 103
        }                                                                                         // 106
        playTimerStatus = "Play complete";                                                        // 107
        Games.update({ room_id: roomId }, {                                                       // 108
          $set: { playStartAnswering: false }                                                     // 109
        });                                                                                       // 108
      }, roundtime * 1000 + numberOfLetters * 1000 + 5000);                                       // 111
      Meteor.setTimeout(function () {                                                             // 112
        Games.update({ room_id: roomId }, {                                                       // 113
          $set: { playStartAnswering: true,                                                       // 114
            timerSeconds: roundtime }                                                             // 115
        });                                                                                       // 113
        timer(roundtime, roomId, "playtimerstate");                                               // 117
      }, numberOfLetters * 1000 + 2000);                                                          // 118
                                                                                                  //
      Meteor.setTimeout(function () {                                                             // 121
        Meteor.call('games.letterFlipFlagOff', roomId);                                           // 122
      }, numberOfLetters * 1000 + 600);                                                           // 123
    }                                                                                             // 124
  },                                                                                              // 125
  'games.vote': function gamesVote(roomId) {                                                      // 127
    if (voteTimerStatus !== "Vote running") {                                                     // 128
      // one timer only                                                                           //
      voteTimerStatus = "Vote running";                                                           // 129
      Meteor.setTimeout(function () {                                                             // 130
        if (Gamedata.find({ room_id: roomId }).fetch().length === 0) {                            // 131
          Meteor.call('games.reset', roomId);                                                     // 132
        } else {                                                                                  // 133
          Rooms.update({ room_id: roomId }, {                                                     // 134
            $set: { subround: "Results" }                                                         // 135
          });                                                                                     // 134
        }                                                                                         // 137
        voteTimerStatus = "Vote complete";                                                        // 138
      }, 4000); //35000                                                                           // 139
    }                                                                                             // 140
  },                                                                                              // 141
  'games.results': function gamesResults(roomId) {                                                // 143
    if (resultsTimerStatus !== "Results running") {                                               // 144
      // one timer only                                                                           //
      resultsTimerStatus = "Results running";                                                     // 145
      var currentRound = Rooms.findOne({ room_id: roomId }).round;                                // 146
      if (currentRound === roundsToPlay) {                                                        // 147
        Meteor.setTimeout(function () {                                                           // 148
          if (Gamedata.find({ room_id: roomId }).fetch().length < 2) {                            // 149
            // end game after results if not enough players                                       //
            resultsTimerStatus = "Results complete";                                              // 150
            Meteor.call('games.reset', roomId);                                                   // 151
          } else {                                                                                // 152
            Rooms.update({ room_id: roomId }, {                                                   // 153
              $set: { subround: "Final results" }                                                 // 154
            });                                                                                   // 153
          }                                                                                       // 156
          resultsTimerStatus = "Results complete";                                                // 157
        }, 3000); //22000                                                                         // 158
      } else {                                                                                    // 159
          Meteor.setTimeout(function () {                                                         // 160
            if (Gamedata.find({ room_id: roomId }).fetch().length < 2) {                          // 161
              // end game after results if not enough players                                     //
              resultsTimerStatus = "Results complete";                                            // 162
              Meteor.call('games.reset', roomId);                                                 // 163
            } else {                                                                              // 164
              Rooms.update({ room_id: roomId }, {                                                 // 165
                $set: { round: currentRound + 1,                                                  // 166
                  subround: "Get ready" }                                                         // 167
              });                                                                                 // 165
            }                                                                                     // 169
            resultsTimerStatus = "Results complete";                                              // 170
          }, 3000); //22000                                                                       // 171
        }                                                                                         // 172
    }                                                                                             // 173
  },                                                                                              // 174
  'games.finalresults': function gamesFinalresults(roomId) {                                      // 176
    if (finalTimerStatus !== "Final running") {                                                   // 177
      // one timer only                                                                           //
      finalTimerStatus = "Final running";                                                         // 178
      Meteor.setTimeout(function () {                                                             // 179
        if (Gamedata.find({ room_id: roomId }).fetch().length < 2) {                              // 180
          // end game after results if not enough players                                         //
          finalTimerStatus = "Final complete";                                                    // 181
          Meteor.call('games.reset', roomId);                                                     // 182
        } else {                                                                                  // 183
          // set up for new game                                                                  //
          Games.remove({ room_id: roomId });                                                      // 184
          Meteor.call('games.init', roomId);                                                      // 185
        }                                                                                         // 186
        finalTimerStatus = "Final complete";                                                      // 187
      }, 25000);                                                                                  // 188
    }                                                                                             // 189
    readyTimerStatus = "init";                                                                    // 190
    playTimerStatus = "init";                                                                     // 191
    voteTimerStatus = "init";                                                                     // 192
    resultsTimerStatus = "init";                                                                  // 193
    finalTimerStatus = "init";                                                                    // 194
  },                                                                                              // 195
  'games.reset': function gamesReset(roomId) {                                                    // 197
    Games.remove({ room_id: roomId });                                                            // 198
    Gamedata.remove({ room_id: roomId });                                                         // 199
    Rooms.update({ room_id: roomId }, {                                                           // 200
      $set: { round: 0,                                                                           // 201
        subround: "Waiting for players" }                                                         // 202
    });                                                                                           // 200
    readyTimerStatus = "init";                                                                    // 204
    playTimerStatus = "init";                                                                     // 205
    voteTimerStatus = "init";                                                                     // 206
    resultsTimerStatus = "init";                                                                  // 207
    finalTimerStatus = "init";                                                                    // 208
  },                                                                                              // 209
  'games.letterFlipFlagOff': function gamesLetterFlipFlagOff(roomId) {                            // 211
    Games.update({ room_id: roomId }, {                                                           // 212
      $set: { turnLetters: false }                                                                // 213
    });                                                                                           // 212
  }                                                                                               // 215
});                                                                                               // 42
                                                                                                  //
function timer(seconds, roomId, statetoactivate) {                                                // 219
                                                                                                  //
  Meteor.setTimeout(function () {                                                                 // 221
    var countdownStartTime = new Date();                                                          // 222
    if (statetoactivate === "playtimerstate") {                                                   // 223
      Games.update({ room_id: roomId }, {                                                         // 224
        $set: { playStartTime: countdownStartTime,                                                // 225
          showAnswerForm: true }                                                                  // 226
      });                                                                                         // 224
    } else {                                                                                      // 228
      Games.update({ room_id: roomId }, {                                                         // 229
        $set: { voteStartTime: countdownStartTime }                                               // 230
      });                                                                                         // 229
    }                                                                                             // 232
    var count = seconds;                                                                          // 233
    var counter = Meteor.setInterval(tock, 1000);                                                 // 234
                                                                                                  //
    function tock() {                                                                             // 236
      count = count - 1;                                                                          // 237
      if (count < 0) {                                                                            // 238
        Meteor.clearInterval(counter);                                                            // 239
        Games.update({ room_id: roomId }, {                                                       // 240
          $set: { showAnswerForm: false }                                                         // 241
        });                                                                                       // 240
        return;                                                                                   // 243
      }                                                                                           // 244
      Games.update({ room_id: roomId }, {                                                         // 245
        $set: { timerSeconds: count }                                                             // 246
      });                                                                                         // 245
    }                                                                                             // 248
  }, 2000);                                                                                       // 249
}                                                                                                 // 250
                                                                                                  //
// Games.find({ room_id: roomId }).remove({});                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////

}],"messages.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/messages.js                                                                        //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.export({Messages:function(){return Messages}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});
                                                                                                  // 2
                                                                                                  // 3
                                                                                                  //
var Messages = new Mongo.Collection('messages');                                                  // 5
                                                                                                  //
if (Meteor.isServer) {                                                                            // 7
  Meteor.publish('messages', function tasksPublication() {                                        // 8
    return Messages.find();                                                                       // 9
  });                                                                                             // 10
}                                                                                                 // 11
                                                                                                  //
Meteor.methods({                                                                                  // 13
  'messages.msgPlayer': function messagesMsgPlayer(roomId, name, verb, roomName, className) {     // 14
    Messages.insert({                                                                             // 15
      user_id: "<PartyHost>",                                                                     // 16
      room_id: roomId,                                                                            // 17
      message: name + verb + roomName,                                                            // 18
      messageClass: className,                                                                    // 19
      createdAt: new Date()                                                                       // 20
    });                                                                                           // 15
  },                                                                                              // 22
  'messages.postMessage': function messagesPostMessage(name, roomId, message) {                   // 24
    Messages.insert({                                                                             // 25
      user_id: name,                                                                              // 26
      room_id: roomId,                                                                            // 27
      message: message,                                                                           // 28
      createdAt: new Date() });                                                                   // 29
  },                                                                                              // 30
  'messages.deleteOld': function messagesDeleteOld(messageId) {                                   // 32
    Messages.remove({ _id: messageId });                                                          // 33
  }                                                                                               // 34
});                                                                                               // 13
////////////////////////////////////////////////////////////////////////////////////////////////////

}],"rooms.js":["meteor/meteor","meteor/mongo","meteor/check","../api/gamedata.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/rooms.js                                                                           //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.export({Rooms:function(){return Rooms}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});var Gamedata;module.import('../api/gamedata.js',{"Gamedata":function(v){Gamedata=v}});
                                                                                                  // 2
                                                                                                  // 3
                                                                                                  //
var Rooms = new Mongo.Collection('rooms');                                                        // 5
                                                                                                  // 6
                                                                                                  //
if (Meteor.isServer) {                                                                            // 8
  Meteor.publish('rooms', function tasksPublication() {                                           // 9
    return Rooms.find();                                                                          // 10
  });                                                                                             // 11
}                                                                                                 // 12
                                                                                                  //
Meteor.methods({                                                                                  // 14
  'rooms.addPlayer': function roomsAddPlayer(roomId, playerAdding) {                              // 15
    if (!Gamedata.findOne({ room_id: roomId, user_id: playerAdding })) {                          // 16
      Gamedata.insert({                                                                           // 17
        room_id: roomId,                                                                          // 18
        user_id: playerAdding,                                                                    // 19
        score: 0                                                                                  // 20
      });                                                                                         // 17
    }                                                                                             // 22
  },                                                                                              // 23
  'rooms.removePlayer': function roomsRemovePlayer(roomId, playerRemoving) {                      // 25
    Gamedata.remove({ room_id: roomId, user_id: playerRemoving });                                // 26
  }                                                                                               // 27
});                                                                                               // 14
////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},"server":{"accounts-server-config.js":["meteor/accounts-base",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// server/accounts-server-config.js                                                               //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});          // 1
                                                                                                  //
Accounts.onCreateUser(function (options, user) {                                                  // 3
                                                                                                  //
  user.currentRoom = "";                                                                          // 5
  user.stats = {                                                                                  // 6
    lifetimePoints: 0,                                                                            // 7
    lifetimeWins: 0,                                                                              // 8
    lifetimeGamesPlayed: 0                                                                        // 9
  };                                                                                              // 6
                                                                                                  //
  if (options.profile) user.profile = options.profile;                                            // 12
                                                                                                  //
  return user;                                                                                    // 15
});                                                                                               // 16
                                                                                                  //
Meteor.publish("userData", function () {                                                          // 18
  if (this.userId) {                                                                              // 19
    return Meteor.users.find({ _id: this.userId }, { fields: { 'stats': 1, 'currentRoom': 1 } });
  } else {                                                                                        // 22
    this.ready();                                                                                 // 23
  }                                                                                               // 24
});                                                                                               // 25
////////////////////////////////////////////////////////////////////////////////////////////////////

}],"main.js":["meteor/meteor","../imports/api/rooms.js","../imports/api/chats.js","../imports/api/messages.js","../imports/api/games.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// server/main.js                                                                                 //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});module.import('../imports/api/rooms.js');module.import('../imports/api/chats.js');module.import('../imports/api/messages.js');module.import('../imports/api/games.js');
                                                                                                  // 2
                                                                                                  // 3
                                                                                                  // 4
                                                                                                  // 5
                                                                                                  //
Meteor.startup(function () {                                                                      // 7
  // code to run on server at startup                                                             //
});                                                                                               // 9
////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".jsx"]});
require("./server/accounts-server-config.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
