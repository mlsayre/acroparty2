//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Template = Package.templating.Template;
var _ = Package.underscore._;
var moment = Package['momentjs:moment'].moment;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var livestamp;

(function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/copleykj_livestamp/packages/copleykj_livestamp.js        //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
(function () {                                                       // 1
                                                                     // 2
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/copleykj:livestamp/lib/livestamp/livestamp.js                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// Livestamp.js / v1.1.2 / (c) 2012 Matt Bradley / MIT License                                                        // 1
(function($, moment) {                                                                                                // 2
  var updateInterval = 1e3,                                                                                           // 3
      paused = false,                                                                                                 // 4
      $livestamps = $([]),                                                                                            // 5
                                                                                                                      // 6
  init = function() {                                                                                                 // 7
    livestampGlobal.resume();                                                                                         // 8
  },                                                                                                                  // 9
                                                                                                                      // 10
  prep = function($el, timestamp) {                                                                                   // 11
    var oldData = $el.data('livestampdata');                                                                          // 12
    if (typeof timestamp == 'number')                                                                                 // 13
      timestamp *= 1e3;                                                                                               // 14
                                                                                                                      // 15
    $el.removeAttr('data-livestamp')                                                                                  // 16
      .removeData('livestamp');                                                                                       // 17
                                                                                                                      // 18
    timestamp = moment(timestamp);                                                                                    // 19
    if (moment.isMoment(timestamp) && !isNaN(+timestamp)) {                                                           // 20
      var newData = $.extend({ }, { 'original': $el.contents() }, oldData);                                           // 21
      newData.moment = moment(timestamp);                                                                             // 22
                                                                                                                      // 23
      $el.data('livestampdata', newData).empty();                                                                     // 24
      $livestamps.push($el[0]);                                                                                       // 25
    }                                                                                                                 // 26
  },                                                                                                                  // 27
                                                                                                                      // 28
  run = function() {                                                                                                  // 29
    if (paused) return;                                                                                               // 30
    livestampGlobal.update();                                                                                         // 31
    setTimeout(run, updateInterval);                                                                                  // 32
  },                                                                                                                  // 33
                                                                                                                      // 34
  livestampGlobal = {                                                                                                 // 35
    update: function() {                                                                                              // 36
      $('[data-livestamp]').each(function() {                                                                         // 37
        var $this = $(this);                                                                                          // 38
        prep($this, $this.data('livestamp'));                                                                         // 39
      });                                                                                                             // 40
                                                                                                                      // 41
      var toRemove = [];                                                                                              // 42
      $livestamps.each(function() {                                                                                   // 43
        var $this = $(this),                                                                                          // 44
            data = $this.data('livestampdata');                                                                       // 45
                                                                                                                      // 46
        if (data === undefined)                                                                                       // 47
          toRemove.push(this);                                                                                        // 48
        else if (moment.isMoment(data.moment)) {                                                                      // 49
          var from = $this.html(),                                                                                    // 50
              to = data.moment.fromNow();                                                                             // 51
                                                                                                                      // 52
          if (from != to) {                                                                                           // 53
            var e = $.Event('change.livestamp');                                                                      // 54
            $this.trigger(e, [from, to]);                                                                             // 55
            if (!e.isDefaultPrevented())                                                                              // 56
              $this.html(to);                                                                                         // 57
          }                                                                                                           // 58
        }                                                                                                             // 59
      });                                                                                                             // 60
                                                                                                                      // 61
      $livestamps = $livestamps.not(toRemove);                                                                        // 62
    },                                                                                                                // 63
                                                                                                                      // 64
    pause: function() {                                                                                               // 65
      paused = true;                                                                                                  // 66
    },                                                                                                                // 67
                                                                                                                      // 68
    resume: function() {                                                                                              // 69
      paused = false;                                                                                                 // 70
      run();                                                                                                          // 71
    },                                                                                                                // 72
                                                                                                                      // 73
    interval: function(interval) {                                                                                    // 74
      if (interval === undefined)                                                                                     // 75
        return updateInterval;                                                                                        // 76
      updateInterval = interval;                                                                                      // 77
    }                                                                                                                 // 78
  },                                                                                                                  // 79
                                                                                                                      // 80
  livestampLocal = {                                                                                                  // 81
    add: function($el, timestamp) {                                                                                   // 82
      if (typeof timestamp == 'number')                                                                               // 83
        timestamp *= 1e3;                                                                                             // 84
      timestamp = moment(timestamp);                                                                                  // 85
                                                                                                                      // 86
      if (moment.isMoment(timestamp) && !isNaN(+timestamp)) {                                                         // 87
        $el.each(function() {                                                                                         // 88
          prep($(this), timestamp);                                                                                   // 89
        });                                                                                                           // 90
        livestampGlobal.update();                                                                                     // 91
      }                                                                                                               // 92
                                                                                                                      // 93
      return $el;                                                                                                     // 94
    },                                                                                                                // 95
                                                                                                                      // 96
    destroy: function($el) {                                                                                          // 97
      $livestamps = $livestamps.not($el);                                                                             // 98
      $el.each(function() {                                                                                           // 99
        var $this = $(this),                                                                                          // 100
            data = $this.data('livestampdata');                                                                       // 101
                                                                                                                      // 102
        if (data === undefined)                                                                                       // 103
          return $el;                                                                                                 // 104
                                                                                                                      // 105
        $this                                                                                                         // 106
          .html(data.original ? data.original : '')                                                                   // 107
          .removeData('livestampdata');                                                                               // 108
      });                                                                                                             // 109
                                                                                                                      // 110
      return $el;                                                                                                     // 111
    },                                                                                                                // 112
                                                                                                                      // 113
    isLivestamp: function($el) {                                                                                      // 114
      return $el.data('livestampdata') !== undefined;                                                                 // 115
    }                                                                                                                 // 116
  };                                                                                                                  // 117
                                                                                                                      // 118
  $.livestamp = livestampGlobal;                                                                                      // 119
  $(init);                                                                                                            // 120
  $.fn.livestamp = function(method, options) {                                                                        // 121
    if (!livestampLocal[method]) {                                                                                    // 122
      options = method;                                                                                               // 123
      method = 'add';                                                                                                 // 124
    }                                                                                                                 // 125
                                                                                                                      // 126
    return livestampLocal[method](this, options);                                                                     // 127
  };                                                                                                                  // 128
})(jQuery, moment);                                                                                                   // 129
                                                                                                                      // 130
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 140
}).call(this);                                                       // 141
                                                                     // 142
                                                                     // 143
                                                                     // 144
                                                                     // 145
                                                                     // 146
                                                                     // 147
(function () {                                                       // 148
                                                                     // 149
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/copleykj:livestamp/export-livestamp.js                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
// This file exposes livestamp so that it works with Meteor's package system after v0.6.5                             // 1
if (typeof Package !== "undefined") {                                                                                 // 2
  livestamp = this.livestamp;                                                                                         // 3
}                                                                                                                     // 4
                                                                                                                      // 5
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 162
}).call(this);                                                       // 163
                                                                     // 164
                                                                     // 165
                                                                     // 166
                                                                     // 167
                                                                     // 168
                                                                     // 169
(function () {                                                       // 170
                                                                     // 171
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/copleykj:livestamp/helpers.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var Template = Package.templating.Template;                                                                           // 1
                                                                                                                      // 2
Template.registerHelper('livestamp', function(date) {                                                                 // 3
  var time = moment(date);                                                                                            // 4
                                                                                                                      // 5
  // Fallback to current time if `date` is invalid.                                                                   // 6
  if(!time.isValid()) {                                                                                               // 7
    time = moment();                                                                                                  // 8
  }                                                                                                                   // 9
                                                                                                                      // 10
  var timestamp = time.toISOString(),                                                                                 // 11
      timestring = time.fromNow();                                                                                    // 12
                                                                                                                      // 13
  return new Spacebars.SafeString('<span class="livestamp" data-livestamp="'+ timestamp  +'">'+timestring+'</span>'); // 14
});                                                                                                                   // 15
                                                                                                                      // 16
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                     // 195
}).call(this);                                                       // 196
                                                                     // 197
///////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['copleykj:livestamp'] = {}, {
  livestamp: livestamp
});

})();
