var require = meteorInstall({"client":{"template.main.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/template.main.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
Template.body.addContent((function() {                                                                                // 2
  var view = this;                                                                                                    // 3
  return HTML.Raw('<div id="render-target"></div>');                                                                  // 4
}));                                                                                                                  // 5
Meteor.startup(Template.body.renderToDocument);                                                                       // 6
                                                                                                                      // 7
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"jquery.lettering.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/jquery.lettering.js                                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/*global jQuery */                                                                                                    //
/*!                                                                                                                   //
* Lettering.JS 0.7.0                                                                                                  //
*                                                                                                                     //
* Copyright 2010, Dave Rupert http://daverupert.com                                                                   //
* Released under the WTFPL license                                                                                    //
* http://sam.zoy.org/wtfpl/                                                                                           //
*                                                                                                                     //
* Thanks to Paul Irish - http://paulirish.com - for the feedback.                                                     //
*                                                                                                                     //
* Date: Mon Sep 20 17:14:00 2010 -0600                                                                                //
*/                                                                                                                    //
(function ($) {                                                                                                       // 13
  function injector(t, splitter, klass, after) {                                                                      // 14
    var text = t.text(),                                                                                              // 15
        a = text.split(splitter),                                                                                     // 15
        inject = '';                                                                                                  // 15
    if (a.length) {                                                                                                   // 18
      $(a).each(function (i, item) {                                                                                  // 19
        inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;             // 20
      });                                                                                                             // 21
      t.attr('aria-label', text).empty().append(inject);                                                              // 22
    }                                                                                                                 // 26
  }                                                                                                                   // 27
                                                                                                                      //
  var methods = {                                                                                                     // 30
    init: function () {                                                                                               // 31
      function init() {                                                                                               // 31
                                                                                                                      //
        return this.each(function () {                                                                                // 33
          injector($(this), '', 'char', '');                                                                          // 34
        });                                                                                                           // 35
      }                                                                                                               // 37
                                                                                                                      //
      return init;                                                                                                    // 31
    }(),                                                                                                              // 31
                                                                                                                      //
    words: function () {                                                                                              // 39
      function words() {                                                                                              // 39
                                                                                                                      //
        return this.each(function () {                                                                                // 41
          injector($(this), ' ', 'word', ' ');                                                                        // 42
        });                                                                                                           // 43
      }                                                                                                               // 45
                                                                                                                      //
      return words;                                                                                                   // 39
    }(),                                                                                                              // 39
                                                                                                                      //
    lines: function () {                                                                                              // 47
      function lines() {                                                                                              // 47
                                                                                                                      //
        return this.each(function () {                                                                                // 49
          var r = "eefec303079ad17405c889e092e105b0";                                                                 // 50
          // Because it's hard to split a <br/> tag consistently across browsers,                                     //
          // (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash                                      //
          // (of the word "split").  If you're trying to use this plugin on that                                      //
          // md5 hash string, it will fail because you're being ridiculous.                                           //
          injector($(this).children("br").replaceWith(r).end(), r, 'line', '');                                       // 55
        });                                                                                                           // 56
      }                                                                                                               // 58
                                                                                                                      //
      return lines;                                                                                                   // 47
    }()                                                                                                               // 47
  };                                                                                                                  // 30
                                                                                                                      //
  $.fn.lettering = function (method) {                                                                                // 61
    // Method calling logic                                                                                           //
    if (method && methods[method]) {                                                                                  // 63
      return methods[method].apply(this, [].slice.call(arguments, 1));                                                // 64
    } else if (method === 'letters' || !method) {                                                                     // 65
      return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array                           // 66
    }                                                                                                                 // 67
    $.error('Method ' + method + ' does not exist on jQuery.lettering');                                              // 68
    return this;                                                                                                      // 69
  };                                                                                                                  // 70
})(jQuery);                                                                                                           // 72
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"jquery.textillate.js":["babel-runtime/helpers/typeof",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/jquery.textillate.js                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _typeof;module.import("babel-runtime/helpers/typeof",{"default":function(v){_typeof=v}});                         //
/*                                                                                                                    //
 * textillate.js                                                                                                      //
 * http://jschr.github.com/textillate                                                                                 //
 * MIT licensed                                                                                                       //
 *                                                                                                                    //
 * Copyright (C) 2012-2013 Jordan Schroter                                                                            //
 */                                                                                                                   //
                                                                                                                      //
(function ($) {                                                                                                       // 9
  "use strict";                                                                                                       // 10
                                                                                                                      //
  function isInEffect(effect) {                                                                                       // 12
    return (/In/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.inEffects) >= 0                           // 13
    );                                                                                                                // 13
  };                                                                                                                  // 14
                                                                                                                      //
  function isOutEffect(effect) {                                                                                      // 16
    return (/Out/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.outEffects) >= 0                         // 17
    );                                                                                                                // 17
  };                                                                                                                  // 18
                                                                                                                      //
  function stringToBoolean(str) {                                                                                     // 21
    if (str !== "true" && str !== "false") return str;                                                                // 22
    return str === "true";                                                                                            // 23
  };                                                                                                                  // 24
                                                                                                                      //
  // custom get data api method                                                                                       //
  function getData(node) {                                                                                            // 27
    var attrs = node.attributes || [],                                                                                // 28
        data = {};                                                                                                    // 28
                                                                                                                      //
    if (!attrs.length) return data;                                                                                   // 31
                                                                                                                      //
    $.each(attrs, function (i, attr) {                                                                                // 33
      var nodeName = attr.nodeName.replace(/delayscale/, 'delayScale');                                               // 34
      if (/^data-in-*/.test(nodeName)) {                                                                              // 35
        data["in"] = data["in"] || {};                                                                                // 36
        data["in"][nodeName.replace(/data-in-/, '')] = stringToBoolean(attr.nodeValue);                               // 37
      } else if (/^data-out-*/.test(nodeName)) {                                                                      // 38
        data.out = data.out || {};                                                                                    // 39
        data.out[nodeName.replace(/data-out-/, '')] = stringToBoolean(attr.nodeValue);                                // 40
      } else if (/^data-*/.test(nodeName)) {                                                                          // 41
        data[nodeName.replace(/data-/, '')] = stringToBoolean(attr.nodeValue);                                        // 42
      }                                                                                                               // 43
    });                                                                                                               // 44
                                                                                                                      //
    return data;                                                                                                      // 46
  }                                                                                                                   // 47
                                                                                                                      //
  function shuffle(o) {                                                                                               // 49
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {}            // 50
    return o;                                                                                                         // 51
  }                                                                                                                   // 52
                                                                                                                      //
  function animate($t, effect, cb) {                                                                                  // 54
    $t.addClass('animated ' + effect).css('visibility', 'visible').show();                                            // 55
                                                                                                                      //
    $t.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {              // 59
      $t.removeClass('animated ' + effect);                                                                           // 60
      cb && cb();                                                                                                     // 61
    });                                                                                                               // 62
  }                                                                                                                   // 63
                                                                                                                      //
  function animateTokens($tokens, options, cb) {                                                                      // 65
    var that = this,                                                                                                  // 66
        count = $tokens.length;                                                                                       // 66
                                                                                                                      //
    if (!count) {                                                                                                     // 69
      cb && cb();                                                                                                     // 70
      return;                                                                                                         // 71
    }                                                                                                                 // 72
                                                                                                                      //
    if (options.shuffle) $tokens = shuffle($tokens);                                                                  // 74
    if (options.reverse) $tokens = $tokens.toArray().reverse();                                                       // 75
                                                                                                                      //
    $.each($tokens, function (i, t) {                                                                                 // 77
      var $token = $(t);                                                                                              // 78
                                                                                                                      //
      function complete() {                                                                                           // 80
        if (isInEffect(options.effect)) {                                                                             // 81
          $token.css('visibility', 'visible');                                                                        // 82
        } else if (isOutEffect(options.effect)) {                                                                     // 83
          $token.css('visibility', 'hidden');                                                                         // 84
        }                                                                                                             // 85
        count -= 1;                                                                                                   // 86
        if (!count && cb) cb();                                                                                       // 87
      }                                                                                                               // 88
                                                                                                                      //
      var delay = options.sync ? options.delay : options.delay * i * options.delayScale;                              // 90
                                                                                                                      //
      $token.text() ? setTimeout(function () {                                                                        // 92
        animate($token, options.effect, complete);                                                                    // 93
      }, delay) : complete();                                                                                         // 93
    });                                                                                                               // 95
  };                                                                                                                  // 96
                                                                                                                      //
  var Textillate = function Textillate(element, options) {                                                            // 98
    var base = this,                                                                                                  // 99
        $element = $(element);                                                                                        // 99
                                                                                                                      //
    base.init = function () {                                                                                         // 102
      base.$texts = $element.find(options.selector);                                                                  // 103
                                                                                                                      //
      if (!base.$texts.length) {                                                                                      // 105
        base.$texts = $('<ul class="texts"><li>' + $element.html() + '</li></ul>');                                   // 106
        $element.html(base.$texts);                                                                                   // 107
      }                                                                                                               // 108
                                                                                                                      //
      base.$texts.hide();                                                                                             // 110
                                                                                                                      //
      base.$current = $('<span>').html(base.$texts.find(':first-child').html()).prependTo($element);                  // 112
                                                                                                                      //
      if (isInEffect(options["in"].effect)) {                                                                         // 116
        base.$current.css('visibility', 'hidden');                                                                    // 117
      } else if (isOutEffect(options.out.effect)) {                                                                   // 118
        base.$current.css('visibility', 'visible');                                                                   // 119
      }                                                                                                               // 120
                                                                                                                      //
      base.setOptions(options);                                                                                       // 122
                                                                                                                      //
      base.timeoutRun = null;                                                                                         // 124
                                                                                                                      //
      setTimeout(function () {                                                                                        // 126
        base.options.autoStart && base.start();                                                                       // 127
      }, base.options.initialDelay);                                                                                  // 128
    };                                                                                                                // 129
                                                                                                                      //
    base.setOptions = function (options) {                                                                            // 131
      base.options = options;                                                                                         // 132
    };                                                                                                                // 133
                                                                                                                      //
    base.triggerEvent = function (name) {                                                                             // 135
      var e = $.Event(name + '.tlt');                                                                                 // 136
      $element.trigger(e, base);                                                                                      // 137
      return e;                                                                                                       // 138
    };                                                                                                                // 139
                                                                                                                      //
    base["in"] = function (index, cb) {                                                                               // 141
      index = index || 0;                                                                                             // 142
                                                                                                                      //
      var $elem = base.$texts.find(':nth-child(' + ((index || 0) + 1) + ')'),                                         // 144
          options = $.extend(true, {}, base.options, $elem.length ? getData($elem[0]) : {}),                          // 144
          $tokens;                                                                                                    // 144
                                                                                                                      //
      $elem.addClass('current');                                                                                      // 148
                                                                                                                      //
      base.triggerEvent('inAnimationBegin');                                                                          // 150
                                                                                                                      //
      base.$current.html($elem.html()).lettering('words');                                                            // 152
                                                                                                                      //
      // split words to individual characters if token type is set to 'char'                                          //
      if (base.options.type == "char") {                                                                              // 157
        base.$current.find('[class^="word"]').css({                                                                   // 158
          'display': 'inline-block',                                                                                  // 160
          // fix for poor ios performance                                                                             //
          '-webkit-transform': 'translate3d(0,0,0)',                                                                  // 162
          '-moz-transform': 'translate3d(0,0,0)',                                                                     // 163
          '-o-transform': 'translate3d(0,0,0)',                                                                       // 164
          'transform': 'translate3d(0,0,0)'                                                                           // 165
        }).each(function () {                                                                                         // 159
          $(this).lettering();                                                                                        // 167
        });                                                                                                           // 167
      }                                                                                                               // 168
                                                                                                                      //
      $tokens = base.$current.find('[class^="' + base.options.type + '"]').css('display', 'inline-block');            // 170
                                                                                                                      //
      if (isInEffect(options["in"].effect)) {                                                                         // 174
        $tokens.css('visibility', 'hidden');                                                                          // 175
      } else if (isOutEffect(options["in"].effect)) {                                                                 // 176
        $tokens.css('visibility', 'visible');                                                                         // 177
      }                                                                                                               // 178
                                                                                                                      //
      base.currentIndex = index;                                                                                      // 180
                                                                                                                      //
      animateTokens($tokens, options["in"], function () {                                                             // 182
        base.triggerEvent('inAnimationEnd');                                                                          // 183
        if (options["in"].callback) options["in"].callback();                                                         // 184
        if (cb) cb(base);                                                                                             // 185
      });                                                                                                             // 186
    };                                                                                                                // 187
                                                                                                                      //
    base.out = function (cb) {                                                                                        // 189
      var $elem = base.$texts.find(':nth-child(' + ((base.currentIndex || 0) + 1) + ')'),                             // 190
          $tokens = base.$current.find('[class^="' + base.options.type + '"]'),                                       // 190
          options = $.extend(true, {}, base.options, $elem.length ? getData($elem[0]) : {});                          // 190
                                                                                                                      //
      base.triggerEvent('outAnimationBegin');                                                                         // 194
                                                                                                                      //
      animateTokens($tokens, options.out, function () {                                                               // 196
        $elem.removeClass('current');                                                                                 // 197
        base.triggerEvent('outAnimationEnd');                                                                         // 198
        if (options.out.callback) options.out.callback();                                                             // 199
        if (cb) cb(base);                                                                                             // 200
      });                                                                                                             // 201
    };                                                                                                                // 202
                                                                                                                      //
    base.start = function (index) {                                                                                   // 204
      setTimeout(function () {                                                                                        // 205
        base.triggerEvent('start');                                                                                   // 206
                                                                                                                      //
        (function () {                                                                                                // 208
          function run(index) {                                                                                       // 208
            base["in"](index, function () {                                                                           // 209
              var length = base.$texts.children().length;                                                             // 210
                                                                                                                      //
              index += 1;                                                                                             // 212
                                                                                                                      //
              if (!base.options.loop && index >= length) {                                                            // 214
                if (base.options.callback) base.options.callback();                                                   // 215
                base.triggerEvent('end');                                                                             // 216
              } else {                                                                                                // 217
                index = index % length;                                                                               // 218
                                                                                                                      //
                base.timeoutRun = setTimeout(function () {                                                            // 220
                  base.out(function () {                                                                              // 221
                    run(index);                                                                                       // 222
                  });                                                                                                 // 223
                }, base.options.minDisplayTime);                                                                      // 224
              }                                                                                                       // 225
            });                                                                                                       // 226
          }                                                                                                           // 227
                                                                                                                      //
          return run;                                                                                                 // 208
        })()(index || 0);                                                                                             // 208
      }, base.options.initialDelay);                                                                                  // 228
    };                                                                                                                // 229
                                                                                                                      //
    base.stop = function () {                                                                                         // 231
      if (base.timeoutRun) {                                                                                          // 232
        clearInterval(base.timeoutRun);                                                                               // 233
        base.timeoutRun = null;                                                                                       // 234
      }                                                                                                               // 235
    };                                                                                                                // 236
                                                                                                                      //
    base.init();                                                                                                      // 238
  };                                                                                                                  // 239
                                                                                                                      //
  $.fn.textillate = function (settings, args) {                                                                       // 241
    return this.each(function () {                                                                                    // 242
      var $this = $(this),                                                                                            // 243
          data = $this.data('textillate'),                                                                            // 243
          options = $.extend(true, {}, $.fn.textillate.defaults, getData(this), (typeof settings === "undefined" ? "undefined" : _typeof(settings)) == 'object' && settings);
                                                                                                                      //
      if (!data) {                                                                                                    // 247
        $this.data('textillate', data = new Textillate(this, options));                                               // 248
      } else if (typeof settings == 'string') {                                                                       // 249
        data[settings].apply(data, [].concat(args));                                                                  // 250
      } else {                                                                                                        // 251
        data.setOptions.call(data, options);                                                                          // 252
      }                                                                                                               // 253
    });                                                                                                               // 254
  };                                                                                                                  // 255
                                                                                                                      //
  $.fn.textillate.defaults = {                                                                                        // 257
    selector: '.texts',                                                                                               // 258
    loop: false,                                                                                                      // 259
    minDisplayTime: 2000,                                                                                             // 260
    initialDelay: 0,                                                                                                  // 261
    "in": {                                                                                                           // 262
      effect: 'fadeInLeftBig',                                                                                        // 263
      delayScale: 1.5,                                                                                                // 264
      delay: 50,                                                                                                      // 265
      sync: false,                                                                                                    // 266
      reverse: false,                                                                                                 // 267
      shuffle: false,                                                                                                 // 268
      callback: function () {                                                                                         // 269
        function callback() {}                                                                                        // 269
                                                                                                                      //
        return callback;                                                                                              // 269
      }()                                                                                                             // 269
    },                                                                                                                // 262
    out: {                                                                                                            // 271
      effect: 'hinge',                                                                                                // 272
      delayScale: 1.5,                                                                                                // 273
      delay: 50,                                                                                                      // 274
      sync: false,                                                                                                    // 275
      reverse: false,                                                                                                 // 276
      shuffle: false,                                                                                                 // 277
      callback: function () {                                                                                         // 278
        function callback() {}                                                                                        // 278
                                                                                                                      //
        return callback;                                                                                              // 278
      }()                                                                                                             // 278
    },                                                                                                                // 271
    autoStart: true,                                                                                                  // 280
    inEffects: [],                                                                                                    // 281
    outEffects: ['hinge'],                                                                                            // 282
    callback: function () {                                                                                           // 283
      function callback() {}                                                                                          // 283
                                                                                                                      //
      return callback;                                                                                                // 283
    }(),                                                                                                              // 283
    type: 'char'                                                                                                      // 284
  };                                                                                                                  // 257
})(jQuery);                                                                                                           // 287
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"utilities.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/utilities.js                                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({validateAnswer:function(){return validateAnswer},timer:function(){return timer}});function validateAnswer(answer, acroletters) {
  var acrolength = acroletters.length;                                                                                // 2
  var theAnswer = answer.replace(/(\s+)/g, " ");                                                                      // 3
  var answersplit = theAnswer.split(" ");                                                                             // 4
  var answerlength = answersplit.length;                                                                              // 5
                                                                                                                      //
  if (theAnswer === [""] || theAnswer === ["", ""]) {                                                                 // 7
    return 1; // answer fail code 1 ("Not feeling inspired?")                                                         // 8
  }                                                                                                                   // 9
  if (acrolength !== answerlength) {                                                                                  // 10
    return 2; // answer fail code 2 ("Incorrect answer length...")                                                    // 11
  }                                                                                                                   // 12
  for (var i = 0; i < acrolength; i++) {                                                                              // 13
    if (answersplit[i][0].toUpperCase() !== acroletters[i]) {                                                         // 14
      return 3; // answer fail code 3 ("Check your letters...")                                                       // 15
    }                                                                                                                 // 16
  }                                                                                                                   // 17
  return theAnswer;                                                                                                   // 18
}                                                                                                                     // 19
                                                                                                                      //
function timer(seconds, container) {                                                                                  // 21
  $("." + container).text(":" + seconds);                                                                             // 22
  $("." + container).css("display", "inline-block");                                                                  // 23
                                                                                                                      //
  setTimeout(function () {                                                                                            // 25
    var count = seconds;                                                                                              // 26
    var counter = setInterval(tock, 1000);                                                                            // 27
                                                                                                                      //
    function tock() {                                                                                                 // 29
      count = count - 1;                                                                                              // 30
      if (count <= 0) {                                                                                               // 31
        clearInterval(counter);                                                                                       // 32
        playtimerflag = "notrunning";                                                                                 // 33
        return;                                                                                                       // 34
      }                                                                                                               // 35
                                                                                                                      //
      $("." + container).text(":" + count);                                                                           // 37
      if (count < 6) {                                                                                                // 38
        $("." + container).css("color", "red");                                                                       // 39
      }                                                                                                               // 40
    }                                                                                                                 // 41
  }, 4000);                                                                                                           // 42
}                                                                                                                     // 43
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.jsx":["react","meteor/meteor","react-dom","meteor/momentjs:moment","../imports/startup/accounts-config.js","./utilities.js","./jquery.lettering.js","./jquery.textillate.js","../imports/ui/App.jsx",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// client/main.jsx                                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var React;module.import('react',{"default":function(v){React=v}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var render;module.import('react-dom',{"render":function(v){render=v}});var moment;module.import('meteor/momentjs:moment',{"moment":function(v){moment=v}});module.import('../imports/startup/accounts-config.js');module.import('./utilities.js');module.import('./jquery.lettering.js');module.import('./jquery.textillate.js');var App;module.import('../imports/ui/App.jsx',{"default":function(v){App=v}});
                                                                                                                      // 2
                                                                                                                      // 3
                                                                                                                      // 4
                                                                                                                      //
                                                                                                                      // 6
                                                                                                                      // 7
                                                                                                                      // 8
                                                                                                                      // 9
                                                                                                                      // 10
                                                                                                                      //
Meteor.startup(function () {                                                                                          // 12
  render(React.createElement(App, null), document.getElementById('render-target'));                                   // 13
});                                                                                                                   // 14
                                                                                                                      //
Meteor.subscribe("userData");                                                                                         // 16
                                                                                                                      //
// DB room setup                                                                                                      //
// db.rooms.insert({ room_id: "FamilyRoom", displayName: "Family Room", family: true, round: 0, subround: "Waiting for players" });
// db.rooms.insert({ room_id: "HotTub", displayName: "Hot Tub", family: false, round: 0, subround: "Waiting for players" });
                                                                                                                      //
// <span className="letter1">{theLetters[0]}</span>                                                                   //
// <span className="letter2">{theLetters[1]}</span>                                                                   //
// <span className="letter3">{theLetters[2]}</span>                                                                   //
// {theLetters[3] ? <span className="letter4">{theLetters[3]}</span> : ""}                                            //
// {theLetters[4] ? <span className="letter5">{theLetters[4]}</span> : ""}                                            //
// {theLetters[5] ? <span className="letter6">{theLetters[5]}</span> : ""}                                            //
// {theLetters[6] ? <span className="letter7">{theLetters[6]}</span> : ""}                                            //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"imports":{"api":{"chats.js":["meteor/mongo",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/chats.js                                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Chats:function(){return Chats}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});
                                                                                                                      //
var Chats = new Mongo.Collection('chats');                                                                            // 3
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 5
  Meteor.publish('chats', function () {                                                                               // 6
    function tasksPublication() {                                                                                     // 6
      return Chats.find();                                                                                            // 7
    }                                                                                                                 // 8
                                                                                                                      //
    return tasksPublication;                                                                                          // 6
  }());                                                                                                               // 6
}                                                                                                                     // 9
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"gamedata.js":["meteor/meteor","meteor/mongo","meteor/check","../api/rooms.js","../api/games.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/gamedata.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Gamedata:function(){return Gamedata}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});var Rooms;module.import('../api/rooms.js',{"Rooms":function(v){Rooms=v}});var Games;module.import('../api/games.js',{"Games":function(v){Games=v}});
                                                                                                                      // 2
                                                                                                                      // 3
                                                                                                                      //
                                                                                                                      // 5
                                                                                                                      // 6
var Gamedata = new Mongo.Collection('gamedata');                                                                      // 7
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 9
  Meteor.publish('gamedata', function () {                                                                            // 10
    function tasksPublication() {                                                                                     // 10
      return Gamedata.find();                                                                                         // 11
    }                                                                                                                 // 12
                                                                                                                      //
    return tasksPublication;                                                                                          // 10
  }());                                                                                                               // 10
}                                                                                                                     // 13
                                                                                                                      //
Meteor.methods({                                                                                                      // 15
  'gamedata.postAnswer': function () {                                                                                // 16
    function gamedataPostAnswer(roomId, userId, answer) {                                                             // 15
      var submitAnswerTime = new Date();                                                                              // 17
      Gamedata.update({ room_id: roomId, user_id: userId }, {                                                         // 18
        $set: { answer: answer,                                                                                       // 19
          submitAnswerTime: submitAnswerTime }                                                                        // 20
      });                                                                                                             // 18
      var countStarted = Games.findOne({ room_id: roomId }).playStartTime;                                            // 22
      var finalSubmitTime = (submitAnswerTime - countStarted) / 1000;                                                 // 23
      Gamedata.update({ room_id: roomId, user_id: userId }, {                                                         // 24
        $set: { finalAnswerTime: finalSubmitTime }                                                                    // 25
      });                                                                                                             // 24
    }                                                                                                                 // 27
                                                                                                                      //
    return gamedataPostAnswer;                                                                                        // 15
  }()                                                                                                                 // 15
});                                                                                                                   // 15
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"games.js":["meteor/meteor","meteor/mongo","meteor/check","react-dom","../api/rooms.js","../api/gamedata.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/games.js                                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Games:function(){return Games}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var Rooms;module.import('../api/rooms.js',{"Rooms":function(v){Rooms=v}});var Gamedata;module.import('../api/gamedata.js',{"Gamedata":function(v){Gamedata=v}});
                                                                                                                      // 2
                                                                                                                      // 3
                                                                                                                      // 4
                                                                                                                      //
                                                                                                                      // 6
                                                                                                                      // 7
var Games = new Mongo.Collection('games');                                                                            // 8
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 10
  Meteor.publish('games', function () {                                                                               // 11
    function tasksPublication() {                                                                                     // 11
      return Games.find();                                                                                            // 12
    }                                                                                                                 // 13
                                                                                                                      //
    return tasksPublication;                                                                                          // 11
  }());                                                                                                               // 11
}                                                                                                                     // 14
                                                                                                                      //
// game config                                                                                                        //
acroLettersPool = "AAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBCCCCCCCCCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDDDDDDEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEFFFFFFFFFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHIIIIIIIIIIIIIIIIIIIIIIJJJJJKKKKKKLLLLLLLLLLLLLLLLLLLLLLLLMMMMMMMMMMMMMMMMMMMMMMMMNNNNNNNNNNNNNNNNNNNNNNNNOOOOOOOOOOOOOOOOOOPPPPPPPPPPPPPPPPPPPPPPPPQQQQRRRRRRRRRRRRRRRRRRSSSSSSSSSSSSSSSSSSSSSSSSTTTTTTTTTTTTTTTTTTTTTTTTUUUUUUUVVVVVVVVVVVVWWWWWWWWWWWWXYYYYYYYYYYYYZZZZ";
                                                                                                                      //
acroCategories = ["General", "Sports", "Food", "Movies", "Television", "History", "Music", "Art", "Animals", "Science", "Politics", "Fashion", "Books", "Travel", "Celebrities", "Romance", "Technology", "Family", "School", "Nature", "Health", "Current Events", "Work", "Give Some Advice", "Definitions", "Sayings", "Exercise/Fitness", "Baby's First Sentence", "My Greatest Fear", "In the Year 3000", "Weird Laws", "I Was Late Because...", "Odd College Majors", "My Biggest Secret", "New Ice Cream Flavors", "Bad Restaurant Names", "I Got Fired Because...", "Odd Product Slogans", "Bad Habits", "Science Fiction", "Strange Trends", "Embarrassing Moments", "CAVEMAN SAY...", "Superhero/villain Names", "Horror Movie Titles", "In a Perfect World...", "Short Poetry", "New Year's Resolutions", "My Dream Last Night", "Odd Tombstone Messages", "Awful First Dates", "Odd Holiday Customs", "The Holidays", "Short Ghost Stories", "... Said No One Ever", "Fairy/Folk Tales"];
                                                                                                                      //
roundsToPlay = 8;                                                                                                     // 31
roundTimes = [12, 12, 12, 12, 12, 12, 12, 12]; // [50, 60, 60, 80, 50, 60, 60 ,80]                                    // 32
roundAcroLength = [3, 4, 5, 6, 3, 4, 5, 6];                                                                           // 33
var readyTimerStatus = "init";                                                                                        // 34
var playTimerStatus = "init";                                                                                         // 35
var voteTimerStatus = "init";                                                                                         // 36
var resultsTimerStatus = "init";                                                                                      // 37
var finalTimerStatus = "init";                                                                                        // 38
                                                                                                                      //
////////////                                                                                                          //
                                                                                                                      //
Meteor.methods({                                                                                                      // 42
  'games.init': function () {                                                                                         // 43
    function gamesInit(roomId) {                                                                                      // 42
      if (Games.find({ room_id: roomId }).fetch().length === 0) {                                                     // 44
        //always make sure updates only happen once                                                                   //
        readyTimer = {};                                                                                              // 45
        playTimer = {};                                                                                               // 46
        playStartTimer = {};                                                                                          // 47
        voteTimer = {};                                                                                               // 48
        resultsTimer = {};                                                                                            // 49
        finalTimer = {};                                                                                              // 50
        var roundletters;                                                                                             // 51
        var acroPoolLength = acroLettersPool.length;                                                                  // 52
        var catPoolLength = acroCategories.length;                                                                    // 53
        var acroPlayArray = [];                                                                                       // 54
        var acroCatArray = [];                                                                                        // 55
        for (var i = 0; i < roundsToPlay; i++) {                                                                      // 56
          var acroToPlay = "";                                                                                        // 57
          for (var j = 0; j < roundAcroLength[i]; j++) {                                                              // 58
            acroToPlay = acroToPlay + acroLettersPool[Math.floor(Math.random() * acroPoolLength)];                    // 59
          }                                                                                                           // 60
          acroPlayArray.push(acroToPlay);                                                                             // 61
          acroCatArray.push(acroCategories[Math.floor(Math.random() * catPoolLength)]);                               // 62
        }                                                                                                             // 63
        Games.insert({                                                                                                // 64
          room_id: roomId,                                                                                            // 65
          roundletters: acroPlayArray,                                                                                // 66
          roundcategories: acroCatArray,                                                                              // 67
          roundtimes: roundTimes                                                                                      // 68
        });                                                                                                           // 64
        Rooms.update({ room_id: roomId }, {                                                                           // 70
          $set: { round: 1, subround: "Get ready" }                                                                   // 71
        });                                                                                                           // 70
      }                                                                                                               // 73
    }                                                                                                                 // 74
                                                                                                                      //
    return gamesInit;                                                                                                 // 42
  }(),                                                                                                                // 42
  'games.getready': function () {                                                                                     // 76
    function gamesGetready(roomId) {                                                                                  // 42
      if (readyTimerStatus !== "Ready running") {                                                                     // 77
        // one timer only                                                                                             //
        readyTimerStatus = "Ready running";                                                                           // 78
        Meteor.setTimeout(function () {                                                                               // 79
          if (Gamedata.find({ room_id: roomId }).fetch().length === 0) {                                              // 80
            Meteor.call('games.reset', roomId);                                                                       // 81
          } else {                                                                                                    // 82
            Rooms.update({ room_id: roomId }, {                                                                       // 83
              $set: { subround: "Play" }                                                                              // 84
            });                                                                                                       // 83
          }                                                                                                           // 86
          readyTimerStatus = "Ready complete";                                                                        // 87
        }, 3500);                                                                                                     // 88
      }                                                                                                               // 89
    }                                                                                                                 // 90
                                                                                                                      //
    return gamesGetready;                                                                                             // 42
  }(),                                                                                                                // 42
  'games.play': function () {                                                                                         // 92
    function gamesPlay(roomId, roundtime) {                                                                           // 42
      if (playTimerStatus !== "Play running") {                                                                       // 93
        // one timer only                                                                                             //
        playTimerStatus = "Play running";                                                                             // 94
        Games.update({ room_id: roomId }, {                                                                           // 95
          $set: { turnLetters: true }                                                                                 // 96
        });                                                                                                           // 95
        var numberOfLetters = roundAcroLength[Rooms.findOne({ room_id: roomId }).round - 1];                          // 98
        playTimer[roomId] = Meteor.setTimeout(function () {                                                           // 99
          if (Gamedata.find({ room_id: roomId }).fetch().length === 0) {                                              // 100
            Meteor.call('games.reset', roomId);                                                                       // 101
          } else {                                                                                                    // 102
            Rooms.update({ room_id: roomId }, {                                                                       // 103
              $set: { subround: "Vote" }                                                                              // 104
            });                                                                                                       // 103
          }                                                                                                           // 106
          playTimerStatus = "Play complete";                                                                          // 107
          Games.update({ room_id: roomId }, {                                                                         // 108
            $set: { playStartAnswering: false }                                                                       // 109
          });                                                                                                         // 108
        }, roundtime * 1000 + numberOfLetters * 1000 + 5000);                                                         // 111
        Meteor.setTimeout(function () {                                                                               // 112
          Games.update({ room_id: roomId }, {                                                                         // 113
            $set: { playStartAnswering: true,                                                                         // 114
              timerSeconds: roundtime }                                                                               // 115
          });                                                                                                         // 113
          timer(roundtime, roomId, "playtimerstate");                                                                 // 117
        }, numberOfLetters * 1000 + 2000);                                                                            // 118
                                                                                                                      //
        Meteor.setTimeout(function () {                                                                               // 121
          Meteor.call('games.letterFlipFlagOff', roomId);                                                             // 122
        }, numberOfLetters * 1000 + 600);                                                                             // 123
      }                                                                                                               // 124
    }                                                                                                                 // 125
                                                                                                                      //
    return gamesPlay;                                                                                                 // 42
  }(),                                                                                                                // 42
  'games.vote': function () {                                                                                         // 127
    function gamesVote(roomId) {                                                                                      // 42
      if (voteTimerStatus !== "Vote running") {                                                                       // 128
        // one timer only                                                                                             //
        voteTimerStatus = "Vote running";                                                                             // 129
        Meteor.setTimeout(function () {                                                                               // 130
          if (Gamedata.find({ room_id: roomId }).fetch().length === 0) {                                              // 131
            Meteor.call('games.reset', roomId);                                                                       // 132
          } else {                                                                                                    // 133
            Rooms.update({ room_id: roomId }, {                                                                       // 134
              $set: { subround: "Results" }                                                                           // 135
            });                                                                                                       // 134
          }                                                                                                           // 137
          voteTimerStatus = "Vote complete";                                                                          // 138
        }, 4000); //35000                                                                                             // 139
      }                                                                                                               // 140
    }                                                                                                                 // 141
                                                                                                                      //
    return gamesVote;                                                                                                 // 42
  }(),                                                                                                                // 42
  'games.results': function () {                                                                                      // 143
    function gamesResults(roomId) {                                                                                   // 42
      if (resultsTimerStatus !== "Results running") {                                                                 // 144
        // one timer only                                                                                             //
        resultsTimerStatus = "Results running";                                                                       // 145
        var currentRound = Rooms.findOne({ room_id: roomId }).round;                                                  // 146
        if (currentRound === roundsToPlay) {                                                                          // 147
          Meteor.setTimeout(function () {                                                                             // 148
            if (Gamedata.find({ room_id: roomId }).fetch().length < 2) {                                              // 149
              // end game after results if not enough players                                                         //
              resultsTimerStatus = "Results complete";                                                                // 150
              Meteor.call('games.reset', roomId);                                                                     // 151
            } else {                                                                                                  // 152
              Rooms.update({ room_id: roomId }, {                                                                     // 153
                $set: { subround: "Final results" }                                                                   // 154
              });                                                                                                     // 153
            }                                                                                                         // 156
            resultsTimerStatus = "Results complete";                                                                  // 157
          }, 3000); //22000                                                                                           // 158
        } else {                                                                                                      // 159
            Meteor.setTimeout(function () {                                                                           // 160
              if (Gamedata.find({ room_id: roomId }).fetch().length < 2) {                                            // 161
                // end game after results if not enough players                                                       //
                resultsTimerStatus = "Results complete";                                                              // 162
                Meteor.call('games.reset', roomId);                                                                   // 163
              } else {                                                                                                // 164
                Rooms.update({ room_id: roomId }, {                                                                   // 165
                  $set: { round: currentRound + 1,                                                                    // 166
                    subround: "Get ready" }                                                                           // 167
                });                                                                                                   // 165
              }                                                                                                       // 169
              resultsTimerStatus = "Results complete";                                                                // 170
            }, 3000); //22000                                                                                         // 171
          }                                                                                                           // 172
      }                                                                                                               // 173
    }                                                                                                                 // 174
                                                                                                                      //
    return gamesResults;                                                                                              // 42
  }(),                                                                                                                // 42
  'games.finalresults': function () {                                                                                 // 176
    function gamesFinalresults(roomId) {                                                                              // 42
      if (finalTimerStatus !== "Final running") {                                                                     // 177
        // one timer only                                                                                             //
        finalTimerStatus = "Final running";                                                                           // 178
        Meteor.setTimeout(function () {                                                                               // 179
          if (Gamedata.find({ room_id: roomId }).fetch().length < 2) {                                                // 180
            // end game after results if not enough players                                                           //
            finalTimerStatus = "Final complete";                                                                      // 181
            Meteor.call('games.reset', roomId);                                                                       // 182
          } else {                                                                                                    // 183
            // set up for new game                                                                                    //
            Games.remove({ room_id: roomId });                                                                        // 184
            Meteor.call('games.init', roomId);                                                                        // 185
          }                                                                                                           // 186
          finalTimerStatus = "Final complete";                                                                        // 187
        }, 25000);                                                                                                    // 188
      }                                                                                                               // 189
      readyTimerStatus = "init";                                                                                      // 190
      playTimerStatus = "init";                                                                                       // 191
      voteTimerStatus = "init";                                                                                       // 192
      resultsTimerStatus = "init";                                                                                    // 193
      finalTimerStatus = "init";                                                                                      // 194
    }                                                                                                                 // 195
                                                                                                                      //
    return gamesFinalresults;                                                                                         // 42
  }(),                                                                                                                // 42
  'games.reset': function () {                                                                                        // 197
    function gamesReset(roomId) {                                                                                     // 42
      Games.remove({ room_id: roomId });                                                                              // 198
      Gamedata.remove({ room_id: roomId });                                                                           // 199
      Rooms.update({ room_id: roomId }, {                                                                             // 200
        $set: { round: 0,                                                                                             // 201
          subround: "Waiting for players" }                                                                           // 202
      });                                                                                                             // 200
      readyTimerStatus = "init";                                                                                      // 204
      playTimerStatus = "init";                                                                                       // 205
      voteTimerStatus = "init";                                                                                       // 206
      resultsTimerStatus = "init";                                                                                    // 207
      finalTimerStatus = "init";                                                                                      // 208
    }                                                                                                                 // 209
                                                                                                                      //
    return gamesReset;                                                                                                // 42
  }(),                                                                                                                // 42
  'games.letterFlipFlagOff': function () {                                                                            // 211
    function gamesLetterFlipFlagOff(roomId) {                                                                         // 42
      Games.update({ room_id: roomId }, {                                                                             // 212
        $set: { turnLetters: false }                                                                                  // 213
      });                                                                                                             // 212
    }                                                                                                                 // 215
                                                                                                                      //
    return gamesLetterFlipFlagOff;                                                                                    // 42
  }()                                                                                                                 // 42
});                                                                                                                   // 42
                                                                                                                      //
function timer(seconds, roomId, statetoactivate) {                                                                    // 219
                                                                                                                      //
  Meteor.setTimeout(function () {                                                                                     // 221
    var countdownStartTime = new Date();                                                                              // 222
    if (statetoactivate === "playtimerstate") {                                                                       // 223
      Games.update({ room_id: roomId }, {                                                                             // 224
        $set: { playStartTime: countdownStartTime,                                                                    // 225
          showAnswerForm: true }                                                                                      // 226
      });                                                                                                             // 224
    } else {                                                                                                          // 228
      Games.update({ room_id: roomId }, {                                                                             // 229
        $set: { voteStartTime: countdownStartTime }                                                                   // 230
      });                                                                                                             // 229
    }                                                                                                                 // 232
    var count = seconds;                                                                                              // 233
    var counter = Meteor.setInterval(tock, 1000);                                                                     // 234
                                                                                                                      //
    function tock() {                                                                                                 // 236
      count = count - 1;                                                                                              // 237
      if (count < 0) {                                                                                                // 238
        Meteor.clearInterval(counter);                                                                                // 239
        Games.update({ room_id: roomId }, {                                                                           // 240
          $set: { showAnswerForm: false }                                                                             // 241
        });                                                                                                           // 240
        return;                                                                                                       // 243
      }                                                                                                               // 244
      Games.update({ room_id: roomId }, {                                                                             // 245
        $set: { timerSeconds: count }                                                                                 // 246
      });                                                                                                             // 245
    }                                                                                                                 // 248
  }, 2000);                                                                                                           // 249
}                                                                                                                     // 250
                                                                                                                      //
// Games.find({ room_id: roomId }).remove({});                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"messages.js":["meteor/meteor","meteor/mongo","meteor/check",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/messages.js                                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Messages:function(){return Messages}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});
                                                                                                                      // 2
                                                                                                                      // 3
                                                                                                                      //
var Messages = new Mongo.Collection('messages');                                                                      // 5
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 7
  Meteor.publish('messages', function () {                                                                            // 8
    function tasksPublication() {                                                                                     // 8
      return Messages.find();                                                                                         // 9
    }                                                                                                                 // 10
                                                                                                                      //
    return tasksPublication;                                                                                          // 8
  }());                                                                                                               // 8
}                                                                                                                     // 11
                                                                                                                      //
Meteor.methods({                                                                                                      // 13
  'messages.msgPlayer': function () {                                                                                 // 14
    function messagesMsgPlayer(roomId, name, verb, roomName, className) {                                             // 13
      Messages.insert({                                                                                               // 15
        user_id: "<PartyHost>",                                                                                       // 16
        room_id: roomId,                                                                                              // 17
        message: name + verb + roomName,                                                                              // 18
        messageClass: className,                                                                                      // 19
        createdAt: new Date()                                                                                         // 20
      });                                                                                                             // 15
    }                                                                                                                 // 22
                                                                                                                      //
    return messagesMsgPlayer;                                                                                         // 13
  }(),                                                                                                                // 13
  'messages.postMessage': function () {                                                                               // 24
    function messagesPostMessage(name, roomId, message) {                                                             // 13
      Messages.insert({                                                                                               // 25
        user_id: name,                                                                                                // 26
        room_id: roomId,                                                                                              // 27
        message: message,                                                                                             // 28
        createdAt: new Date() });                                                                                     // 29
    }                                                                                                                 // 30
                                                                                                                      //
    return messagesPostMessage;                                                                                       // 13
  }(),                                                                                                                // 13
  'messages.deleteOld': function () {                                                                                 // 32
    function messagesDeleteOld(messageId) {                                                                           // 13
      Messages.remove({ _id: messageId });                                                                            // 33
    }                                                                                                                 // 34
                                                                                                                      //
    return messagesDeleteOld;                                                                                         // 13
  }()                                                                                                                 // 13
});                                                                                                                   // 13
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"rooms.js":["meteor/meteor","meteor/mongo","meteor/check","../api/gamedata.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/api/rooms.js                                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({Rooms:function(){return Rooms}});var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var Mongo;module.import('meteor/mongo',{"Mongo":function(v){Mongo=v}});var check;module.import('meteor/check',{"check":function(v){check=v}});var Gamedata;module.import('../api/gamedata.js',{"Gamedata":function(v){Gamedata=v}});
                                                                                                                      // 2
                                                                                                                      // 3
                                                                                                                      //
var Rooms = new Mongo.Collection('rooms');                                                                            // 5
                                                                                                                      // 6
                                                                                                                      //
if (Meteor.isServer) {                                                                                                // 8
  Meteor.publish('rooms', function () {                                                                               // 9
    function tasksPublication() {                                                                                     // 9
      return Rooms.find();                                                                                            // 10
    }                                                                                                                 // 11
                                                                                                                      //
    return tasksPublication;                                                                                          // 9
  }());                                                                                                               // 9
}                                                                                                                     // 12
                                                                                                                      //
Meteor.methods({                                                                                                      // 14
  'rooms.addPlayer': function () {                                                                                    // 15
    function roomsAddPlayer(roomId, playerAdding) {                                                                   // 14
      if (!Gamedata.findOne({ room_id: roomId, user_id: playerAdding })) {                                            // 16
        Gamedata.insert({                                                                                             // 17
          room_id: roomId,                                                                                            // 18
          user_id: playerAdding,                                                                                      // 19
          score: 0                                                                                                    // 20
        });                                                                                                           // 17
      }                                                                                                               // 22
    }                                                                                                                 // 23
                                                                                                                      //
    return roomsAddPlayer;                                                                                            // 14
  }(),                                                                                                                // 14
  'rooms.removePlayer': function () {                                                                                 // 25
    function roomsRemovePlayer(roomId, playerRemoving) {                                                              // 14
      Gamedata.remove({ room_id: roomId, user_id: playerRemoving });                                                  // 26
    }                                                                                                                 // 27
                                                                                                                      //
    return roomsRemovePlayer;                                                                                         // 14
  }()                                                                                                                 // 14
});                                                                                                                   // 14
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"startup":{"accounts-config.js":["meteor/accounts-base",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/startup/accounts-config.js                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});                              // 1
                                                                                                                      //
Accounts.ui.config({                                                                                                  // 3
    passwordSignupFields: 'USERNAME_AND_EMAIL'                                                                        // 4
});                                                                                                                   // 3
                                                                                                                      //
Accounts.onLogin(function (user) {                                                                                    // 7
    $(".mainScreen").show();                                                                                          // 8
    //App.showPrivate();                                                                                              //
});                                                                                                                   // 10
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"ui":{"AccountsUIWrapper.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/templating","meteor/blaze",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/AccountsUIWrapper.jsx                                                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var Template;module.import('meteor/templating',{"Template":function(v){Template=v}});var Blaze;module.import('meteor/blaze',{"Blaze":function(v){Blaze=v}});
                                                                                                                      //
                                                                                                                      //
                                                                                                                      // 1
                                                                                                                      // 2
                                                                                                                      // 3
                                                                                                                      // 4
                                                                                                                      //
var AccountsUIWrapper = function (_Component) {                                                                       //
  _inherits(AccountsUIWrapper, _Component);                                                                           //
                                                                                                                      //
  function AccountsUIWrapper() {                                                                                      //
    _classCallCheck(this, AccountsUIWrapper);                                                                         //
                                                                                                                      //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                       //
  }                                                                                                                   //
                                                                                                                      //
  AccountsUIWrapper.prototype.componentDidMount = function () {                                                       //
    function componentDidMount() {                                                                                    //
      // Use Meteor Blaze to render login buttons                                                                     //
      this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));                     // 9
    }                                                                                                                 // 11
                                                                                                                      //
    return componentDidMount;                                                                                         //
  }();                                                                                                                //
                                                                                                                      //
  AccountsUIWrapper.prototype.componentWillUnmount = function () {                                                    //
    function componentWillUnmount() {                                                                                 //
      // Clean up Blaze view                                                                                          //
      Blaze.remove(this.view);                                                                                        // 14
    }                                                                                                                 // 15
                                                                                                                      //
    return componentWillUnmount;                                                                                      //
  }();                                                                                                                //
                                                                                                                      //
  AccountsUIWrapper.prototype.render = function () {                                                                  //
    function render() {                                                                                               //
      // Just render a placeholder container that will be filled in                                                   //
      return React.createElement('span', { ref: 'container' });                                                       // 18
    }                                                                                                                 // 19
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return AccountsUIWrapper;                                                                                           //
}(Component);                                                                                                         //
                                                                                                                      //
module.export("default",exports.default=(AccountsUIWrapper));                                                         //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"App.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","./AccountsUIWrapper.jsx","meteor/react-meteor-data","meteor/reactive-var","../api/rooms.js","../api/chats.js","../api/messages.js","../api/games.js","../api/gamedata.js","./Room.jsx","./Chat.jsx","./Game.jsx",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/App.jsx                                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({gameRoomIdSelected:function(){return gameRoomIdSelected}});var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v}});var AccountsUIWrapper;module.import('./AccountsUIWrapper.jsx',{"default":function(v){AccountsUIWrapper=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var ReactiveVar;module.import('meteor/reactive-var',{"ReactiveVar":function(v){ReactiveVar=v}});var Rooms;module.import('../api/rooms.js',{"Rooms":function(v){Rooms=v}});var Chats;module.import('../api/chats.js',{"Chats":function(v){Chats=v}});var Messages;module.import('../api/messages.js',{"Messages":function(v){Messages=v}});var Games;module.import('../api/games.js',{"Games":function(v){Games=v}});var Gamedata;module.import('../api/gamedata.js',{"Gamedata":function(v){Gamedata=v}});var Room;module.import('./Room.jsx',{"default":function(v){Room=v}});var Chat;module.import('./Chat.jsx',{"default":function(v){Chat=v}});var Game;module.import('./Game.jsx',{"default":function(v){Game=v}});
                                                                                                                      //
                                                                                                                      //
                                                                                                                      // 1
                                                                                                                      // 2
                                                                                                                      // 3
                                                                                                                      // 4
var gameRoomIdSelected = new ReactiveVar("");                                                                         // 5
                                                                                                                      //
                                                                                                                      // 7
                                                                                                                      // 8
                                                                                                                      // 9
                                                                                                                      // 10
                                                                                                                      // 11
                                                                                                                      //
                                                                                                                      // 13
                                                                                                                      // 14
                                                                                                                      // 15
                                                                                                                      //
// App component - represents the whole app                                                                           //
                                                                                                                      //
var App = function (_Component) {                                                                                     //
  _inherits(App, _Component);                                                                                         //
                                                                                                                      //
  function App() {                                                                                                    //
    _classCallCheck(this, App);                                                                                       //
                                                                                                                      //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                       //
  }                                                                                                                   //
                                                                                                                      //
  App.prototype.userRouting = function () {                                                                           //
    function userRouting() {                                                                                          //
      if (this.props.currentUser) {                                                                                   // 23
        $(".frontSignin").hide();                                                                                     // 24
      } else {                                                                                                        // 25
        $(".frontSignin").show();                                                                                     // 26
        $(".mainScreen, .stats, .chat, .settings").hide();                                                            // 27
      }                                                                                                               // 28
      $(".acroparty").show();                                                                                         // 29
    }                                                                                                                 // 30
                                                                                                                      //
    return userRouting;                                                                                               //
  }();                                                                                                                //
                                                                                                                      //
  // rooms                                                                                                            //
                                                                                                                      //
                                                                                                                      //
  App.prototype.gotoRoom = function () {                                                                              //
    function gotoRoom(e) {                                                                                            //
      var theroom = $(e.target).attr("data-room");                                                                    // 34
      gameRoomIdSelected.set(theroom);                                                                                // 35
      var roomToJoin = Rooms.findOne({ room_id: theroom });                                                           // 36
      Meteor.call('rooms.addPlayer', gameRoomIdSelected.get(), this.props.currentUser.username);                      // 37
      $(".mainScreen, .popup").hide();                                                                                // 38
      $(".chat").attr("id", theroom).show();                                                                          // 39
      var enteringRoomVerb = [" appears in the ", " saunters into the ", " walks into the ", " struts into the ", " sprints into the ", " apparates into the ", " materializes in the ", " mysteriously arises inside the ", " seems to have entered our ", " ridiculously enters the ", " crashed through the window into the ", " is suddenly in the ", " scoots on in to the ", " politely enters the "];
      var randomVerb = enteringRoomVerb[Math.floor(Math.random() * enteringRoomVerb.length)];                         // 45
      Meteor.call('messages.msgPlayer', gameRoomIdSelected.get(), this.props.currentUser.username, randomVerb, Rooms.findOne({ room_id: gameRoomIdSelected.get() }).displayName + "...");
    }                                                                                                                 // 48
                                                                                                                      //
    return gotoRoom;                                                                                                  //
  }();                                                                                                                //
                                                                                                                      //
  App.prototype.renderRooms = function () {                                                                           //
    function renderRooms() {                                                                                          //
      var _this2 = this;                                                                                              // 49
                                                                                                                      //
      return this.props.rooms.map(function (room) {                                                                   // 50
        return React.createElement(Room, { key: room._id, room: room, updateRoom: _this2.gotoRoom.bind(_this2) });    // 50
      });                                                                                                             // 50
    }                                                                                                                 // 53
                                                                                                                      //
    return renderRooms;                                                                                               //
  }();                                                                                                                //
                                                                                                                      //
  App.prototype.renderRoomId = function () {                                                                          //
    function renderRoomId() {                                                                                         //
      return gameRoomIdSelected.get();                                                                                // 55
    }                                                                                                                 // 56
                                                                                                                      //
    return renderRoomId;                                                                                              //
  }();                                                                                                                //
                                                                                                                      //
  App.prototype.roomName = function () {                                                                              //
    function roomName() {                                                                                             //
      if (this.props.selectedRoom) {                                                                                  // 58
        var theRoomName = this.props.selectedRoom.displayName;                                                        // 59
      } else {                                                                                                        // 60
        var theRoomName = "";                                                                                         // 61
      }                                                                                                               // 62
      return theRoomName;                                                                                             // 63
    }                                                                                                                 // 64
                                                                                                                      //
    return roomName;                                                                                                  //
  }();                                                                                                                //
                                                                                                                      //
  App.prototype.exitRoom = function () {                                                                              //
    function exitRoom(e) {                                                                                            //
      var exitingRoomVerb = [" leaves the room", " runs out of the room", " walks out of the room", " vanishes", " disappears", " backs out of the room slowly", " suddenly dematerializes", " scurries out of the room", " rushes out of here", " bids everyone a fond farewell", " leaps out the window", " takes off", " silently slips out of the room", " graciously exits the scene", " politely goes elsewhere", " backflips out of here"];
      var randomExitVerb = exitingRoomVerb[Math.floor(Math.random() * exitingRoomVerb.length)];                       // 73
      Meteor.call('messages.msgPlayer', gameRoomIdSelected.get(), this.props.currentUser.username, randomExitVerb, "...", "leavingMessage");
      Meteor.call('rooms.removePlayer', this.props.selectedRoom.room_id, this.props.currentUser.username);            // 76
      $(".popup").hide();                                                                                             // 77
      $("#" + gameRoomIdSelected.get()).hide();                                                                       // 78
      gameRoomIdSelected.set("");                                                                                     // 79
      $(".chat").removeAttr("id");                                                                                    // 80
      $(".mainScreen").show();                                                                                        // 81
    }                                                                                                                 // 82
                                                                                                                      //
    return exitRoom;                                                                                                  //
  }();                                                                                                                //
                                                                                                                      //
  // stats                                                                                                            //
                                                                                                                      //
                                                                                                                      //
  App.prototype.closePopup = function () {                                                                            //
    function closePopup(e) {                                                                                          //
      $(".popup").hide();                                                                                             // 86
    }                                                                                                                 // 87
                                                                                                                      //
    return closePopup;                                                                                                //
  }();                                                                                                                //
                                                                                                                      //
  App.prototype.openStats = function () {                                                                             //
    function openStats(e) {                                                                                           //
      $(".settings").hide();                                                                                          // 90
      $(".stats").show();                                                                                             // 91
    }                                                                                                                 // 92
                                                                                                                      //
    return openStats;                                                                                                 //
  }();                                                                                                                //
                                                                                                                      //
  App.prototype.renderUsername = function () {                                                                        //
    function renderUsername() {                                                                                       //
      if (this.props.currentUser) {                                                                                   // 95
        if (this.props.currentUser.username) {                                                                        // 96
          return React.createElement(                                                                                 // 97
            'span',                                                                                                   // 97
            null,                                                                                                     // 97
            this.props.currentUser.username                                                                           // 97
          );                                                                                                          // 97
        } else {                                                                                                      // 98
          return "";                                                                                                  // 99
        }                                                                                                             // 100
      } else {                                                                                                        // 101
        return "";                                                                                                    // 102
      }                                                                                                               // 103
    }                                                                                                                 // 104
                                                                                                                      //
    return renderUsername;                                                                                            //
  }();                                                                                                                //
                                                                                                                      //
  App.prototype.renderLifePoints = function () {                                                                      //
    function renderLifePoints() {                                                                                     //
      // this.props.currentUser ? <span>{ this.props.currentUser.stats.lifetimePoints }</span> : '';                  //
      if (this.props.currentUser) {                                                                                   // 108
        if (this.props.currentUser.stats) {                                                                           // 109
          return React.createElement(                                                                                 // 110
            'span',                                                                                                   // 110
            null,                                                                                                     // 110
            this.props.currentUser.stats.lifetimePoints                                                               // 110
          );                                                                                                          // 110
        } else {                                                                                                      // 111
          return "";                                                                                                  // 112
        }                                                                                                             // 113
      } else {                                                                                                        // 114
        return "";                                                                                                    // 115
      }                                                                                                               // 116
    }                                                                                                                 // 117
                                                                                                                      //
    return renderLifePoints;                                                                                          //
  }();                                                                                                                //
                                                                                                                      //
  //settings                                                                                                          //
                                                                                                                      //
                                                                                                                      //
  App.prototype.openSettings = function () {                                                                          //
    function openSettings(e) {                                                                                        //
      $(".stats").hide();                                                                                             // 121
      $(".settings").show();                                                                                          // 122
    }                                                                                                                 // 123
                                                                                                                      //
    return openSettings;                                                                                              //
  }();                                                                                                                //
                                                                                                                      //
  App.prototype.render = function () {                                                                                //
    function render() {                                                                                               //
      return React.createElement(                                                                                     // 126
        'div',                                                                                                        // 128
        { className: 'acroparty' },                                                                                   // 128
        this.userRouting(),                                                                                           // 129
        React.createElement(                                                                                          // 130
          'section',                                                                                                  // 130
          { className: 'frontSignin', style: { "display": "none" } },                                                 // 130
          React.createElement(                                                                                        // 131
            'h1',                                                                                                     // 131
            null,                                                                                                     // 131
            'Welcome to AcroParty!'                                                                                   // 131
          ),                                                                                                          // 131
          React.createElement(AccountsUIWrapper, null)                                                                // 132
        ),                                                                                                            // 130
        React.createElement(                                                                                          // 135
          'section',                                                                                                  // 135
          { className: 'mainScreen' },                                                                                // 135
          React.createElement(                                                                                        // 136
            'header',                                                                                                 // 136
            null,                                                                                                     // 136
            React.createElement(                                                                                      // 137
              'h1',                                                                                                   // 137
              null,                                                                                                   // 137
              'AcroParty'                                                                                             // 137
            )                                                                                                         // 137
          ),                                                                                                          // 136
          React.createElement(                                                                                        // 139
            'div',                                                                                                    // 139
            { className: 'welcomeText' },                                                                             // 139
            'Welcome, ',                                                                                              // 139
            this.renderUsername(),                                                                                    // 140
            '! Please select a room to start playing...'                                                              // 139
          ),                                                                                                          // 139
          React.createElement(                                                                                        // 142
            'div',                                                                                                    // 142
            { className: 'roomList' },                                                                                // 142
            React.createElement(                                                                                      // 143
              'div',                                                                                                  // 143
              { className: 'roomListTitle' },                                                                         // 143
              'Rooms'                                                                                                 // 143
            ),                                                                                                        // 143
            this.renderRooms()                                                                                        // 144
          ),                                                                                                          // 142
          React.createElement(                                                                                        // 146
            'div',                                                                                                    // 146
            { className: 'mainButtons' },                                                                             // 146
            React.createElement(                                                                                      // 147
              'button',                                                                                               // 147
              { className: 'mainButton', onClick: this.openStats.bind(this) },                                        // 147
              'Stats'                                                                                                 // 147
            ),                                                                                                        // 147
            React.createElement(                                                                                      // 148
              'button',                                                                                               // 148
              { className: 'mainButton', onClick: this.openSettings.bind(this) },                                     // 148
              'Settings'                                                                                              // 148
            )                                                                                                         // 148
          )                                                                                                           // 146
        ),                                                                                                            // 135
        React.createElement(                                                                                          // 152
          'section',                                                                                                  // 152
          { className: 'chat' },                                                                                      // 152
          React.createElement(                                                                                        // 153
            'section',                                                                                                // 153
            { className: 'gamePlay' },                                                                                // 153
            React.createElement(Game, { roomId: this.renderRoomId(), roomName: this.roomName() })                     // 154
          ),                                                                                                          // 153
          React.createElement(Chat, { clickStats: this.openStats.bind(this), clickSettings: this.openSettings.bind(this),
            roomName: this.roomName(), exitRoom: this.exitRoom.bind(this),                                            // 158
            roomId: this.renderRoomId() })                                                                            // 159
        ),                                                                                                            // 152
        React.createElement(                                                                                          // 162
          'section',                                                                                                  // 162
          { className: 'stats popup' },                                                                               // 162
          React.createElement(                                                                                        // 163
            'div',                                                                                                    // 163
            null,                                                                                                     // 163
            'Life wins is ',                                                                                          // 163
            this.renderLifePoints()                                                                                   // 163
          ),                                                                                                          // 163
          React.createElement(                                                                                        // 164
            'button',                                                                                                 // 164
            { className: 'popupButton', onClick: this.closePopup.bind(this) },                                        // 164
            'Close'                                                                                                   // 164
          )                                                                                                           // 164
        ),                                                                                                            // 162
        React.createElement(                                                                                          // 167
          'section',                                                                                                  // 167
          { className: 'settings popup' },                                                                            // 167
          React.createElement(AccountsUIWrapper, null),                                                               // 168
          React.createElement(                                                                                        // 169
            'button',                                                                                                 // 169
            { className: 'popupButton', onClick: this.closePopup.bind(this) },                                        // 169
            'Close'                                                                                                   // 169
          )                                                                                                           // 169
        )                                                                                                             // 167
      );                                                                                                              // 128
    }                                                                                                                 // 175
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return App;                                                                                                         //
}(Component);                                                                                                         //
                                                                                                                      //
module.export("default",exports.default=(App));                                                                       //
                                                                                                                      //
                                                                                                                      //
module.export("default",exports.default=(createContainer(function () {                                                // 178
  Meteor.subscribe('rooms');                                                                                          // 179
  Meteor.subscribe('chats');                                                                                          // 180
  Meteor.subscribe('games');                                                                                          // 181
  Meteor.subscribe('gamedata');                                                                                       // 182
  Meteor.subscribe('messages');                                                                                       // 183
  //var userRoom = Meteor.user().currentRoom;                                                                         //
  return {                                                                                                            // 185
    currentUser: Meteor.user(),                                                                                       // 186
    rooms: Rooms.find({}).fetch(),                                                                                    // 187
    selectedRoom: Rooms.findOne({ room_id: gameRoomIdSelected.get() }),                                               // 188
    gamedata: Gamedata.find({}).fetch()                                                                               // 189
  };                                                                                                                  // 185
}, App)));                                                                                                            // 191
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Chat.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/react-meteor-data","./App.jsx","../api/messages.js","../api/gamedata.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/Chat.jsx                                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var gameRoomIdSelected;module.import('./App.jsx',{"gameRoomIdSelected":function(v){gameRoomIdSelected=v}});var Messages;module.import('../api/messages.js',{"Messages":function(v){Messages=v}});var Gamedata;module.import('../api/gamedata.js',{"Gamedata":function(v){Gamedata=v}});
                                                                                                                      //
                                                                                                                      //
                                                                                                                      // 1
                                                                                                                      // 2
                                                                                                                      // 3
                                                                                                                      // 4
                                                                                                                      //
                                                                                                                      // 6
                                                                                                                      // 7
                                                                                                                      //
var ListMessages = function (_Component) {                                                                            //
  _inherits(ListMessages, _Component);                                                                                //
                                                                                                                      //
  function ListMessages() {                                                                                           //
    _classCallCheck(this, ListMessages);                                                                              //
                                                                                                                      //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                       //
  }                                                                                                                   //
                                                                                                                      //
  ListMessages.prototype.componentDidMount = function () {                                                            //
    function componentDidMount() {                                                                                    //
      var $this = $(ReactDOM.findDOMNode(this));                                                                      // 11
      $(".messagesRead")[0].scrollTop = $(".messagesRead")[0].scrollHeight;                                           // 12
    }                                                                                                                 // 13
                                                                                                                      //
    return componentDidMount;                                                                                         //
  }();                                                                                                                //
                                                                                                                      //
  ListMessages.prototype.render = function () {                                                                       //
    function render() {                                                                                               //
      return React.createElement(                                                                                     // 15
        'li',                                                                                                         // 15
        { className: (this.props.author === "<PartyHost>" ? "hostMessage" : "") + (this.props.exitClass ? " " + this.props.exitClass : "") },
        React.createElement(                                                                                          // 17
          'span',                                                                                                     // 17
          { className: 'authorMessage' },                                                                             // 17
          React.createElement(                                                                                        // 17
            'span',                                                                                                   // 17
            { className: 'messageAuthor' },                                                                           // 17
            this.props.author,                                                                                        // 17
            ':'                                                                                                       // 17
          ),                                                                                                          // 17
          ' ',                                                                                                        // 17
          this.props.message                                                                                          // 17
        ),                                                                                                            // 17
        React.createElement('span', { className: 'messageTime', 'data-livestamp': this.props.timestamp })             // 18
      );                                                                                                              // 15
    }                                                                                                                 // 20
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return ListMessages;                                                                                                //
}(Component);                                                                                                         //
                                                                                                                      //
module.export("default",exports.default=(ListMessages));                                                              //
                                                                                                                      //
var ListItemPlayer = function (_Component2) {                                                                         //
  _inherits(ListItemPlayer, _Component2);                                                                             //
                                                                                                                      //
  function ListItemPlayer() {                                                                                         //
    _classCallCheck(this, ListItemPlayer);                                                                            //
                                                                                                                      //
    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));                                      //
  }                                                                                                                   //
                                                                                                                      //
  ListItemPlayer.prototype.render = function () {                                                                     //
    function render() {                                                                                               //
      return React.createElement(                                                                                     // 25
        'li',                                                                                                         // 25
        { className: 'playerInList', 'data-playerInList': this.props.name },                                          // 25
        this.props.name,                                                                                              // 25
        React.createElement(                                                                                          // 26
          'span',                                                                                                     // 26
          { className: 'scoresRight' },                                                                               // 26
          this.props.score                                                                                            // 26
        )                                                                                                             // 26
      );                                                                                                              // 25
    }                                                                                                                 // 27
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return ListItemPlayer;                                                                                              //
}(Component);                                                                                                         //
                                                                                                                      //
module.export("default",exports.default=(ListItemPlayer));                                                            //
                                                                                                                      //
var Chat = function (_Component3) {                                                                                   //
  _inherits(Chat, _Component3);                                                                                       //
                                                                                                                      //
  function Chat() {                                                                                                   //
    _classCallCheck(this, Chat);                                                                                      //
                                                                                                                      //
    return _possibleConstructorReturn(this, _Component3.apply(this, arguments));                                      //
  }                                                                                                                   //
                                                                                                                      //
  Chat.prototype.listPlayers = function () {                                                                          //
    function listPlayers() {                                                                                          //
      var playerListArray = [];                                                                                       // 32
      this.props.roomPlayers.forEach(function () {                                                                    // 33
        playerListArray.push(this.user_id);                                                                           // 34
      });                                                                                                             // 35
      var playerListItems = playerListArray.map(function (name) {                                                     // 36
        return React.createElement(                                                                                   // 37
          'li',                                                                                                       // 37
          null,                                                                                                       // 37
          'name'                                                                                                      // 37
        );                                                                                                            // 37
      });                                                                                                             // 38
      return playerListItems;                                                                                         // 39
    }                                                                                                                 // 40
                                                                                                                      //
    return listPlayers;                                                                                               //
  }();                                                                                                                //
                                                                                                                      //
  Chat.prototype.sendMessage = function () {                                                                          //
    function sendMessage(event) {                                                                                     //
      event.preventDefault();                                                                                         // 43
      var message = ReactDOM.findDOMNode(this.refs.messageInput).value.trim();                                        // 44
      if (message === "") {                                                                                           // 45
        return;                                                                                                       // 45
      } // blank messages don't send                                                                                  // 45
      Meteor.call('messages.postMessage', this.props.currentUser.username, gameRoomIdSelected.get(), message);        // 46
      ReactDOM.findDOMNode(this.refs.messageInput).value = '';                                                        // 47
      // delete old messages in room                                                                                  //
      if (this.props.roomMessages.length > 150) {                                                                     // 49
        // 200 chat messages per room                                                                                 //
        var indexToTrim = this.props.roomMessages.length - 150;                                                       // 50
        var oldestMessageTime = this.props.roomMessages[indexToTrim].createdAt;                                       // 51
        var messagesToDelete = Messages.find({                                                                        // 52
          room_id: gameRoomIdSelected.get(),                                                                          // 53
          createdAt: { $lt: oldestMessageTime }                                                                       // 54
        }).fetch();                                                                                                   // 52
        messagesToDelete.forEach(function (message) {                                                                 // 56
          Meteor.call('messages.deleteOld', message._id);                                                             // 57
        });                                                                                                           // 58
      }                                                                                                               // 59
    }                                                                                                                 // 60
                                                                                                                      //
    return sendMessage;                                                                                               //
  }();                                                                                                                //
                                                                                                                      //
  Chat.prototype.renderMessages = function () {                                                                       //
    function renderMessages() {                                                                                       //
      if (this.props.roomMessages) {                                                                                  // 63
        return this.props.roomMessages.map(function (message) {                                                       // 64
          return React.createElement(ListMessages, { key: message._id, author: message.user_id, message: message.message,
            timestamp: message.createdAt, exitClass: message.messageClass });                                         // 66
        });                                                                                                           // 64
      } else {                                                                                                        // 68
        return "";                                                                                                    // 69
      }                                                                                                               // 70
    }                                                                                                                 // 71
                                                                                                                      //
    return renderMessages;                                                                                            //
  }();                                                                                                                //
                                                                                                                      //
  Chat.prototype.render = function () {                                                                               //
    function render() {                                                                                               //
      return React.createElement(                                                                                     // 74
        'div',                                                                                                        // 75
        { className: 'chatArea' },                                                                                    // 75
        React.createElement(                                                                                          // 76
          'div',                                                                                                      // 76
          { className: 'listAndInfo' },                                                                               // 76
          React.createElement(                                                                                        // 77
            'div',                                                                                                    // 77
            { className: 'playerList' },                                                                              // 77
            React.createElement(                                                                                      // 78
              'div',                                                                                                  // 78
              { className: 'bigRoomName' },                                                                           // 78
              React.createElement(                                                                                    // 78
                'span',                                                                                               // 78
                null,                                                                                                 // 78
                this.props.roomName                                                                                   // 78
              )                                                                                                       // 78
            ),                                                                                                        // 78
            React.createElement(                                                                                      // 79
              'ul',                                                                                                   // 79
              { className: 'playerNameList' },                                                                        // 79
              React.createElement(                                                                                    // 79
                'u',                                                                                                  // 79
                null,                                                                                                 // 79
                'Players'                                                                                             // 79
              ),                                                                                                      // 79
              React.createElement(                                                                                    // 79
                'span',                                                                                               // 79
                { className: 'scoresRight' },                                                                         // 79
                React.createElement(                                                                                  // 79
                  'u',                                                                                                // 79
                  null,                                                                                               // 79
                  'Scores'                                                                                            // 79
                )                                                                                                     // 79
              ),                                                                                                      // 79
              this.props.roomPlayers.map(function (player) {                                                          // 80
                return React.createElement(ListItemPlayer, { key: player.user_id, name: player.user_id, score: player.score });
              })                                                                                                      // 80
            )                                                                                                         // 79
          ),                                                                                                          // 77
          React.createElement(                                                                                        // 85
            'div',                                                                                                    // 85
            { className: 'chatMenuButtons' },                                                                         // 85
            React.createElement(                                                                                      // 86
              'button',                                                                                               // 86
              { className: 'mainButton', onClick: this.props.clickStats },                                            // 86
              'Stats'                                                                                                 // 86
            ),                                                                                                        // 86
            React.createElement(                                                                                      // 87
              'button',                                                                                               // 87
              { className: 'mainButton', onClick: this.props.clickSettings },                                         // 87
              'Settings'                                                                                              // 87
            ),                                                                                                        // 87
            React.createElement(                                                                                      // 88
              'button',                                                                                               // 88
              { className: 'mainButton', onClick: this.props.exitRoom },                                              // 88
              'Exit Room'                                                                                             // 88
            )                                                                                                         // 88
          )                                                                                                           // 85
        ),                                                                                                            // 76
        React.createElement(                                                                                          // 91
          'div',                                                                                                      // 91
          { className: 'messagesArea' },                                                                              // 91
          React.createElement(                                                                                        // 92
            'div',                                                                                                    // 92
            { className: 'messagesRead' },                                                                            // 92
            this.renderMessages()                                                                                     // 93
          ),                                                                                                          // 92
          React.createElement(                                                                                        // 95
            'div',                                                                                                    // 95
            { className: 'messagesSendArea' },                                                                        // 95
            React.createElement(                                                                                      // 96
              'button',                                                                                               // 96
              { className: 'mobile openPlayerList' },                                                                 // 96
              'Plyrs'                                                                                                 // 96
            ),                                                                                                        // 96
            React.createElement(                                                                                      // 97
              'form',                                                                                                 // 97
              { onSubmit: this.sendMessage.bind(this) },                                                              // 97
              React.createElement('input', { type: 'text', ref: 'messageInput', className: 'messageEnter', placeholder: 'Enter chat here...',
                maxLength: '100' }),                                                                                  // 99
              React.createElement(                                                                                    // 100
                'button',                                                                                             // 100
                { className: 'messageSend', onClick: this.sendMessage.bind(this) },                                   // 100
                'Send'                                                                                                // 100
              )                                                                                                       // 100
            ),                                                                                                        // 97
            React.createElement(                                                                                      // 102
              'button',                                                                                               // 102
              { className: 'mobile openChatMenu' },                                                                   // 102
              'Menu'                                                                                                  // 102
            )                                                                                                         // 102
          )                                                                                                           // 95
        )                                                                                                             // 91
      );                                                                                                              // 75
    }                                                                                                                 // 107
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return Chat;                                                                                                        //
}(Component);                                                                                                         //
                                                                                                                      //
// Chat.propTypes = {                                                                                                 //
// This component gets the room to display through a React prop.                                                      //
// We can use propTypes to indicate it is required                                                                    //
//   chat: PropTypes.object.isRequired,                                                                               //
// };                                                                                                                 //
                                                                                                                      //
module.export("default",exports.default=(Chat));                                                                      //
module.export("default",exports.default=(createContainer(function () {                                                // 116
  Meteor.subscribe('messages');                                                                                       // 117
  Meteor.subscribe('gamedata');                                                                                       // 118
  return {                                                                                                            // 119
    currentUser: Meteor.user(),                                                                                       // 120
    roomMessages: Messages.find({ room_id: gameRoomIdSelected.get() }, { sort: { createdAt: 1 } }).fetch(),           // 121
    roomPlayers: Gamedata.find({ room_id: gameRoomIdSelected.get() }, { sort: { score: -1 } }).fetch()                // 122
  };                                                                                                                  // 119
}, Chat)));                                                                                                           // 124
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Game.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/react-meteor-data","./App.jsx","/client/utilities.js","../api/rooms.js","../api/games.js","../api/gamedata.js","./Room.jsx",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/Game.jsx                                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var ReactDOM;module.import('react-dom',{"default":function(v){ReactDOM=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var gameRoomIdSelected;module.import('./App.jsx',{"gameRoomIdSelected":function(v){gameRoomIdSelected=v}});var validateAnswer;module.import('/client/utilities.js',{"validateAnswer":function(v){validateAnswer=v}});var Rooms;module.import('../api/rooms.js',{"Rooms":function(v){Rooms=v}});var Games;module.import('../api/games.js',{"Games":function(v){Games=v}});var Gamedata;module.import('../api/gamedata.js',{"Gamedata":function(v){Gamedata=v}});var Room;module.import('./Room.jsx',{"default":function(v){Room=v}});
                                                                                                                      //
                                                                                                                      //
                                                                                                                      // 1
                                                                                                                      // 2
                                                                                                                      // 3
                                                                                                                      // 4
                                                                                                                      // 5
                                                                                                                      //
                                                                                                                      // 7
                                                                                                                      // 8
                                                                                                                      // 9
                                                                                                                      // 10
                                                                                                                      //
var ShowLetters = function (_Component) {                                                                             //
  _inherits(ShowLetters, _Component);                                                                                 //
                                                                                                                      //
  function ShowLetters() {                                                                                            //
    _classCallCheck(this, ShowLetters);                                                                               //
                                                                                                                      //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                       //
  }                                                                                                                   //
                                                                                                                      //
  ShowLetters.prototype.render = function () {                                                                        //
    function render() {                                                                                               //
      var currentRound = this.props.currentRound;                                                                     // 14
      var theLetters = this.props.gameInfo ? this.props.gameInfo.roundletters[currentRound - 1] : "";                 // 15
      return React.createElement(                                                                                     // 16
        'span',                                                                                                       // 16
        { className: 'allLetters' },                                                                                  // 16
        React.createElement(                                                                                          // 17
          'span',                                                                                                     // 17
          { className: 'letter1' },                                                                                   // 17
          theLetters[0]                                                                                               // 17
        ),                                                                                                            // 17
        React.createElement(                                                                                          // 18
          'span',                                                                                                     // 18
          { className: 'letter2' },                                                                                   // 18
          theLetters[1]                                                                                               // 18
        ),                                                                                                            // 18
        React.createElement(                                                                                          // 19
          'span',                                                                                                     // 19
          { className: 'letter3' },                                                                                   // 19
          theLetters[2]                                                                                               // 19
        ),                                                                                                            // 19
        React.createElement(                                                                                          // 20
          'span',                                                                                                     // 20
          { className: 'letter4' },                                                                                   // 20
          theLetters[3]                                                                                               // 20
        ),                                                                                                            // 20
        React.createElement(                                                                                          // 21
          'span',                                                                                                     // 21
          { className: 'letter5' },                                                                                   // 21
          theLetters[4]                                                                                               // 21
        ),                                                                                                            // 21
        React.createElement(                                                                                          // 22
          'span',                                                                                                     // 22
          { className: 'letter6' },                                                                                   // 22
          theLetters[5]                                                                                               // 22
        ),                                                                                                            // 22
        React.createElement(                                                                                          // 23
          'span',                                                                                                     // 23
          { className: 'letter7' },                                                                                   // 23
          theLetters[6]                                                                                               // 23
        )                                                                                                             // 23
      );                                                                                                              // 16
    }                                                                                                                 // 25
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return ShowLetters;                                                                                                 //
}(Component);                                                                                                         //
                                                                                                                      //
module.export("default",exports.default=(ShowLetters));                                                               //
                                                                                                                      //
var Game = function (_Component2) {                                                                                   //
  _inherits(Game, _Component2);                                                                                       //
                                                                                                                      //
  function Game() {                                                                                                   //
    _classCallCheck(this, Game);                                                                                      //
                                                                                                                      //
    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));                                      //
  }                                                                                                                   //
                                                                                                                      //
  Game.prototype.sendAnswer = function () {                                                                           //
    function sendAnswer(event) {                                                                                      //
      event.preventDefault();                                                                                         // 30
      var answer = ReactDOM.findDOMNode(this.refs.answerInput).value.trim();                                          // 31
      var roundNumber = Rooms.findOne({ room_id: gameRoomIdSelected.get() }).round;                                   // 32
      var acroLetters = Games.findOne({ room_id: gameRoomIdSelected.get() }).roundletters[roundNumber - 1];           // 33
      var checkedAnswer = validateAnswer(answer, acroLetters);                                                        // 34
      if (checkedAnswer === 1) {                                                                                      // 35
        var failMessage = "Not feeling inspired?";                                                                    // 36
        $(".submittedInfo").css("color", "red");                                                                      // 37
        $(".submittedInfo").text(failMessage);                                                                        // 38
      } else if (checkedAnswer === 2) {                                                                               // 39
        var failMessage = "Your acro should have " + acroLetters.length + " words...";                                // 40
        $(".submittedInfo").css("color", "red");                                                                      // 41
        $(".submittedInfo").text(failMessage);                                                                        // 42
      } else if (checkedAnswer === 3) {                                                                               // 43
        var failMessage = "Check your letters...";                                                                    // 44
        $(".submittedInfo").css("color", "red");                                                                      // 45
        $(".submittedInfo").text(failMessage);                                                                        // 46
      } else {                                                                                                        // 47
        $(".submittedInfo").css("color", "green");                                                                    // 48
        Meteor.call('gamedata.postAnswer', gameRoomIdSelected.get(), this.props.currentUser.username, checkedAnswer);
        var submitTime = Gamedata.findOne({ room_id: gameRoomIdSelected.get(), user_id: this.props.currentUser.username }).finalAnswerTime;
        $(".submittedInfo").text("Submitted: " + submitTime + "s");                                                   // 51
      }                                                                                                               // 52
    }                                                                                                                 // 53
                                                                                                                      //
    return sendAnswer;                                                                                                //
  }();                                                                                                                //
                                                                                                                      //
  Game.prototype.render = function () {                                                                               //
    function render() {                                                                                               //
      if (this.props.selectedRoom) {                                                                                  // 56
        var currentRound = this.props.selectedRoom.round;                                                             // 57
        var currentSubround = this.props.selectedRoom.subround;                                                       // 58
        if (currentSubround === "Waiting for players") {                                                              // 59
          if (this.props.gamedata.length < 2) {                                                                       // 60
            // number of players needed to start game                                                                 //
            $(".gamestate").hide();                                                                                   // 61
            $(".waitingForPlayers").show();                                                                           // 62
          } else {                                                                                                    // 63
            Meteor.call('games.init', gameRoomIdSelected.get());                                                      // 64
          }                                                                                                           // 65
        } else {                                                                                                      // 66
          $(".gamestate").hide();                                                                                     // 67
          if (currentSubround === "Waiting for players") {                                                            // 68
            Meteor.call('games.init', gameRoomIdSelected.get());                                                      // 69
          } else if (currentSubround === "Get ready") {                                                               // 70
            $(".gamestate").hide();                                                                                   // 71
            $(".getReady").show();                                                                                    // 72
            $(".submittedInfo").text("");                                                                             // 73
            $(".answerEnter").val("");                                                                                // 74
            $(".allLetters").hide();                                                                                  // 75
            Meteor.call('games.getready', gameRoomIdSelected.get());                                                  // 76
          } else if (currentSubround === "Play") {                                                                    // 77
            $(".gamestate").hide();                                                                                   // 78
            $(".play").show();                                                                                        // 79
            var roundSeconds = this.props.gameInfo.roundtimes[currentRound - 1];                                      // 80
            Meteor.call('games.play', gameRoomIdSelected.get(), roundSeconds);                                        // 81
            if (this.props.gameInfo.turnLetters === true) {                                                           // 82
              $(".allLetters span").addClass("animated flipInY");                                                     // 83
              $(".allLetters").show();                                                                                // 84
            } else {                                                                                                  // 85
              $(".allLetters span").removeClass("animated flipInY");                                                  // 86
            }                                                                                                         // 87
            if (this.props.gameInfo.playStartAnswering === true) {                                                    // 88
              $(".gameTimer").css("visibility", "visible");                                                           // 89
            } else {                                                                                                  // 90
              $(".gameTimer").css("visibility", "hidden");                                                            // 91
            }                                                                                                         // 92
            if (this.props.gameInfo.showAnswerForm === true) {                                                        // 93
              $(".answerForm").css("visibility", "visible");                                                          // 94
            } else {                                                                                                  // 95
              $(".answerForm").css("visibility", "hidden").val("");                                                   // 96
            }                                                                                                         // 97
          } else if (currentSubround === "Vote") {                                                                    // 98
            $(".gamestate").hide();                                                                                   // 99
            $(".vote").show();                                                                                        // 100
            Meteor.call('games.vote', gameRoomIdSelected.get());                                                      // 101
          } else if (currentSubround === "Results") {                                                                 // 102
            $(".gamestate").hide();                                                                                   // 103
            $(".results").show();                                                                                     // 104
            Meteor.call('games.results', gameRoomIdSelected.get());                                                   // 105
          } else if (currentSubround === "Final results") {                                                           // 106
            $(".gamestate").hide();                                                                                   // 107
            $(".finalresults").show();                                                                                // 108
            Meteor.call('games.finalresults', gameRoomIdSelected.get());                                              // 109
          }                                                                                                           // 110
        }                                                                                                             // 111
      }                                                                                                               // 112
      return React.createElement(                                                                                     // 113
        'div',                                                                                                        // 114
        null,                                                                                                         // 114
        React.createElement(                                                                                          // 115
          'div',                                                                                                      // 115
          { className: 'gamestate waitingForPlayers' },                                                               // 115
          React.createElement(                                                                                        // 116
            'div',                                                                                                    // 116
            null,                                                                                                     // 116
            'Waiting for at least 3 players...'                                                                       // 116
          )                                                                                                           // 116
        ),                                                                                                            // 115
        React.createElement(                                                                                          // 118
          'div',                                                                                                      // 118
          { className: 'gamestate getReady' },                                                                        // 118
          React.createElement(                                                                                        // 119
            'div',                                                                                                    // 119
            { className: 'gameTop' },                                                                                 // 119
            React.createElement(                                                                                      // 120
              'div',                                                                                                  // 120
              { className: 'roundInfo' },                                                                             // 120
              'Round ',                                                                                               // 120
              this.props.selectedRoom ? this.props.selectedRoom.round : "",                                           // 121
              ' of ',                                                                                                 // 120
              this.props.gameInfo ? this.props.gameInfo.roundletters.length : ""                                      // 122
            ),                                                                                                        // 120
            React.createElement('div', { className: 'gameTimer' })                                                    // 124
          ),                                                                                                          // 119
          React.createElement(                                                                                        // 126
            'div',                                                                                                    // 126
            { className: 'gameMiddle' },                                                                              // 126
            React.createElement(                                                                                      // 127
              'div',                                                                                                  // 127
              { className: 'getReadyText' },                                                                          // 127
              'Get ready...'                                                                                          // 127
            )                                                                                                         // 127
          )                                                                                                           // 126
        ),                                                                                                            // 118
        React.createElement(                                                                                          // 130
          'div',                                                                                                      // 130
          { className: 'gamestate play' },                                                                            // 130
          React.createElement(                                                                                        // 131
            'div',                                                                                                    // 131
            { className: 'gameTop' },                                                                                 // 131
            React.createElement(                                                                                      // 132
              'div',                                                                                                  // 132
              { className: 'roundInfo' },                                                                             // 132
              'Round ',                                                                                               // 132
              this.props.selectedRoom ? this.props.selectedRoom.round : "",                                           // 133
              ' of ',                                                                                                 // 132
              this.props.gameInfo ? this.props.gameInfo.roundletters.length : ""                                      // 134
            ),                                                                                                        // 132
            React.createElement(                                                                                      // 136
              'div',                                                                                                  // 136
              { className: 'gameTimer' },                                                                             // 136
              this.props.gameInfo ? this.props.gameInfo.timerSeconds : 0                                              // 136
            )                                                                                                         // 136
          ),                                                                                                          // 131
          React.createElement(                                                                                        // 138
            'div',                                                                                                    // 138
            { className: 'gameMiddle' },                                                                              // 138
            React.createElement(                                                                                      // 139
              'div',                                                                                                  // 139
              { className: 'numberSubmitted' },                                                                       // 139
              '0 of 3 Answers Submitted'                                                                              // 139
            ),                                                                                                        // 139
            React.createElement(                                                                                      // 140
              'div',                                                                                                  // 140
              { className: 'categoryAndLetters' },                                                                    // 140
              React.createElement(                                                                                    // 141
                'div',                                                                                                // 141
                { className: 'currentCat' },                                                                          // 141
                React.createElement(                                                                                  // 141
                  'span',                                                                                             // 141
                  { className: 'catWord' },                                                                           // 141
                  'Category:'                                                                                         // 141
                ),                                                                                                    // 141
                ' ',                                                                                                  // 141
                this.props.gameInfo ? this.props.gameInfo.roundcategories[currentRound - 1] : ""                      // 141
              ),                                                                                                      // 141
              React.createElement(                                                                                    // 142
                'div',                                                                                                // 142
                { className: 'currentLetters' },                                                                      // 142
                React.createElement(ShowLetters, { gameInfo: this.props.gameInfo,                                     // 143
                  currentRound: this.props.selectedRoom ? this.props.selectedRoom.round : 0 })                        // 144
              )                                                                                                       // 142
            ),                                                                                                        // 140
            React.createElement('div', { className: 'submittedInfo' })                                                // 147
          ),                                                                                                          // 138
          React.createElement(                                                                                        // 149
            'div',                                                                                                    // 149
            { className: 'gameBottom' },                                                                              // 149
            React.createElement(                                                                                      // 150
              'form',                                                                                                 // 150
              { className: 'answerForm' },                                                                            // 150
              React.createElement('input', { type: 'text', ref: 'answerInput', className: 'answerEnter', placeholder: 'Enter acro here...',
                maxLength: '70' }),                                                                                   // 152
              React.createElement(                                                                                    // 153
                'button',                                                                                             // 153
                { className: 'answerSend', onClick: this.sendAnswer.bind(this) },                                     // 153
                'Play'                                                                                                // 153
              )                                                                                                       // 153
            )                                                                                                         // 150
          )                                                                                                           // 149
        ),                                                                                                            // 130
        React.createElement(                                                                                          // 158
          'div',                                                                                                      // 158
          { className: 'gamestate vote' },                                                                            // 158
          'Now vote!'                                                                                                 // 158
        ),                                                                                                            // 158
        React.createElement(                                                                                          // 161
          'div',                                                                                                      // 161
          { className: 'gamestate results' },                                                                         // 161
          'The results!'                                                                                              // 161
        ),                                                                                                            // 161
        React.createElement(                                                                                          // 164
          'div',                                                                                                      // 164
          { className: 'gamestate finalresults' },                                                                    // 164
          'Final game results!'                                                                                       // 164
        )                                                                                                             // 164
      );                                                                                                              // 114
    }                                                                                                                 // 170
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return Game;                                                                                                        //
}(Component);                                                                                                         //
                                                                                                                      //
module.export("default",exports.default=(Game));                                                                      //
                                                                                                                      //
                                                                                                                      //
module.export("default",exports.default=(createContainer(function () {                                                // 173
  Meteor.subscribe('rooms');                                                                                          // 174
  Meteor.subscribe('games');                                                                                          // 175
  Meteor.subscribe('gamedata');                                                                                       // 176
  //var userRoom = Meteor.user().currentRoom;                                                                         //
  return {                                                                                                            // 178
    currentUser: Meteor.user(),                                                                                       // 179
    selectedRoom: Rooms.findOne({ room_id: gameRoomIdSelected.get() }),                                               // 180
    gameInfo: Games.findOne({ room_id: gameRoomIdSelected.get() }) ? Games.findOne({ room_id: gameRoomIdSelected.get() }) : "",
    gamedata: Gamedata.find({ room_id: gameRoomIdSelected.get() }).fetch()                                            // 182
  };                                                                                                                  // 178
}, Game)));                                                                                                           // 184
                                                                                                                      //
// Game.propTypes = {                                                                                                 //
//   // This component gets the game to display through a React prop.                                                 //
//   // We can use propTypes to indicate it is required                                                               //
//   game: PropTypes.object.isRequired,                                                                               //
// };                                                                                                                 //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Room.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/react-meteor-data","../api/gamedata.js",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// imports/ui/Room.jsx                                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var React,Component,PropTypes;module.import('react',{"default":function(v){React=v},"Component":function(v){Component=v},"PropTypes":function(v){PropTypes=v}});var createContainer;module.import('meteor/react-meteor-data',{"createContainer":function(v){createContainer=v}});var Gamedata;module.import('../api/gamedata.js',{"Gamedata":function(v){Gamedata=v}});
                                                                                                                      //
                                                                                                                      //
                                                                                                                      // 1
                                                                                                                      // 2
                                                                                                                      // 3
                                                                                                                      //
// Room component - represents a single room item                                                                     //
                                                                                                                      //
var Room = function (_Component) {                                                                                    //
  _inherits(Room, _Component);                                                                                        //
                                                                                                                      //
  function Room() {                                                                                                   //
    _classCallCheck(this, Room);                                                                                      //
                                                                                                                      //
    return _possibleConstructorReturn(this, _Component.apply(this, arguments));                                       //
  }                                                                                                                   //
                                                                                                                      //
  Room.prototype.render = function () {                                                                               //
    function render() {                                                                                               //
      return React.createElement(                                                                                     // 8
        'li',                                                                                                         // 8
        null,                                                                                                         // 8
        React.createElement(                                                                                          // 8
          'button',                                                                                                   // 8
          { className: 'roomSelect', 'data-room': this.props.room.room_id, onClick: this.props.updateRoom },          // 8
          'Join'                                                                                                      // 8
        ),                                                                                                            // 8
        React.createElement(                                                                                          // 9
          'span',                                                                                                     // 9
          { className: 'roomlistTitle' },                                                                             // 9
          this.props.room.displayName                                                                                 // 9
        ),                                                                                                            // 9
        React.createElement(                                                                                          // 10
          'span',                                                                                                     // 10
          { className: 'roomlistRound' },                                                                             // 10
          ' Rnd: ',                                                                                                   // 10
          this.props.room.round                                                                                       // 10
        ),                                                                                                            // 10
        React.createElement(                                                                                          // 11
          'span',                                                                                                     // 11
          { className: 'roomlistSubround' },                                                                          // 11
          ' (',                                                                                                       // 11
          this.props.room.subround,                                                                                   // 11
          ')'                                                                                                         // 11
        ),                                                                                                            // 11
        React.createElement(                                                                                          // 12
          'span',                                                                                                     // 12
          { className: 'roomlistPlayers' },                                                                           // 12
          ' Players: ',                                                                                               // 12
          Gamedata.find({ room_id: this.props.room.room_id }).fetch().length                                          // 12
        )                                                                                                             // 12
      );                                                                                                              // 8
    }                                                                                                                 // 14
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return Room;                                                                                                        //
}(Component);                                                                                                         //
                                                                                                                      //
module.export("default",exports.default=(Room));                                                                      //
                                                                                                                      //
                                                                                                                      //
module.export("default",exports.default=(createContainer(function () {                                                // 17
  Meteor.subscribe('gamedata');                                                                                       // 18
  return {};                                                                                                          // 19
}, Room)));                                                                                                           // 20
                                                                                                                      //
Room.propTypes = {                                                                                                    // 22
  // This component gets the room to display through a React prop.                                                    //
  // We can use propTypes to indicate it is required                                                                  //
  room: PropTypes.object.isRequired                                                                                   // 25
};                                                                                                                    // 22
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}},{"extensions":[".js",".json",".html",".jsx",".css"]});
require("./client/template.main.js");
require("./client/jquery.lettering.js");
require("./client/jquery.textillate.js");
require("./client/utilities.js");
require("./client/main.jsx");