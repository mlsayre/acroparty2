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

/* Package-scope variables */
var moment;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/momentjs_moment/moment.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
//! moment.js                                                                                                          // 1
//! version : 2.15.1                                                                                                   // 2
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors                                                         // 3
//! license : MIT                                                                                                      // 4
//! momentjs.com                                                                                                       // 5
                                                                                                                       // 6
;(function (global, factory) {                                                                                         // 7
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :                        // 8
    typeof define === 'function' && define.amd ? define(factory) :                                                     // 9
    global.moment = factory()                                                                                          // 10
}(this, function () { 'use strict';                                                                                    // 11
                                                                                                                       // 12
    var hookCallback;                                                                                                  // 13
                                                                                                                       // 14
    function utils_hooks__hooks () {                                                                                   // 15
        return hookCallback.apply(null, arguments);                                                                    // 16
    }                                                                                                                  // 17
                                                                                                                       // 18
    // This is done to register the method called with moment()                                                        // 19
    // without creating circular dependencies.                                                                         // 20
    function setHookCallback (callback) {                                                                              // 21
        hookCallback = callback;                                                                                       // 22
    }                                                                                                                  // 23
                                                                                                                       // 24
    function isArray(input) {                                                                                          // 25
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';                   // 26
    }                                                                                                                  // 27
                                                                                                                       // 28
    function isObject(input) {                                                                                         // 29
        // IE8 will treat undefined and null as object if it wasn't for                                                // 30
        // input != null                                                                                               // 31
        return input != null && Object.prototype.toString.call(input) === '[object Object]';                           // 32
    }                                                                                                                  // 33
                                                                                                                       // 34
    function isObjectEmpty(obj) {                                                                                      // 35
        var k;                                                                                                         // 36
        for (k in obj) {                                                                                               // 37
            // even if its not own property I'd still call it non-empty                                                // 38
            return false;                                                                                              // 39
        }                                                                                                              // 40
        return true;                                                                                                   // 41
    }                                                                                                                  // 42
                                                                                                                       // 43
    function isDate(input) {                                                                                           // 44
        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';                     // 45
    }                                                                                                                  // 46
                                                                                                                       // 47
    function map(arr, fn) {                                                                                            // 48
        var res = [], i;                                                                                               // 49
        for (i = 0; i < arr.length; ++i) {                                                                             // 50
            res.push(fn(arr[i], i));                                                                                   // 51
        }                                                                                                              // 52
        return res;                                                                                                    // 53
    }                                                                                                                  // 54
                                                                                                                       // 55
    function hasOwnProp(a, b) {                                                                                        // 56
        return Object.prototype.hasOwnProperty.call(a, b);                                                             // 57
    }                                                                                                                  // 58
                                                                                                                       // 59
    function extend(a, b) {                                                                                            // 60
        for (var i in b) {                                                                                             // 61
            if (hasOwnProp(b, i)) {                                                                                    // 62
                a[i] = b[i];                                                                                           // 63
            }                                                                                                          // 64
        }                                                                                                              // 65
                                                                                                                       // 66
        if (hasOwnProp(b, 'toString')) {                                                                               // 67
            a.toString = b.toString;                                                                                   // 68
        }                                                                                                              // 69
                                                                                                                       // 70
        if (hasOwnProp(b, 'valueOf')) {                                                                                // 71
            a.valueOf = b.valueOf;                                                                                     // 72
        }                                                                                                              // 73
                                                                                                                       // 74
        return a;                                                                                                      // 75
    }                                                                                                                  // 76
                                                                                                                       // 77
    function create_utc__createUTC (input, format, locale, strict) {                                                   // 78
        return createLocalOrUTC(input, format, locale, strict, true).utc();                                            // 79
    }                                                                                                                  // 80
                                                                                                                       // 81
    function defaultParsingFlags() {                                                                                   // 82
        // We need to deep clone this object.                                                                          // 83
        return {                                                                                                       // 84
            empty           : false,                                                                                   // 85
            unusedTokens    : [],                                                                                      // 86
            unusedInput     : [],                                                                                      // 87
            overflow        : -2,                                                                                      // 88
            charsLeftOver   : 0,                                                                                       // 89
            nullInput       : false,                                                                                   // 90
            invalidMonth    : null,                                                                                    // 91
            invalidFormat   : false,                                                                                   // 92
            userInvalidated : false,                                                                                   // 93
            iso             : false,                                                                                   // 94
            parsedDateParts : [],                                                                                      // 95
            meridiem        : null                                                                                     // 96
        };                                                                                                             // 97
    }                                                                                                                  // 98
                                                                                                                       // 99
    function getParsingFlags(m) {                                                                                      // 100
        if (m._pf == null) {                                                                                           // 101
            m._pf = defaultParsingFlags();                                                                             // 102
        }                                                                                                              // 103
        return m._pf;                                                                                                  // 104
    }                                                                                                                  // 105
                                                                                                                       // 106
    var some;                                                                                                          // 107
    if (Array.prototype.some) {                                                                                        // 108
        some = Array.prototype.some;                                                                                   // 109
    } else {                                                                                                           // 110
        some = function (fun) {                                                                                        // 111
            var t = Object(this);                                                                                      // 112
            var len = t.length >>> 0;                                                                                  // 113
                                                                                                                       // 114
            for (var i = 0; i < len; i++) {                                                                            // 115
                if (i in t && fun.call(this, t[i], i, t)) {                                                            // 116
                    return true;                                                                                       // 117
                }                                                                                                      // 118
            }                                                                                                          // 119
                                                                                                                       // 120
            return false;                                                                                              // 121
        };                                                                                                             // 122
    }                                                                                                                  // 123
                                                                                                                       // 124
    function valid__isValid(m) {                                                                                       // 125
        if (m._isValid == null) {                                                                                      // 126
            var flags = getParsingFlags(m);                                                                            // 127
            var parsedParts = some.call(flags.parsedDateParts, function (i) {                                          // 128
                return i != null;                                                                                      // 129
            });                                                                                                        // 130
            var isNowValid = !isNaN(m._d.getTime()) &&                                                                 // 131
                flags.overflow < 0 &&                                                                                  // 132
                !flags.empty &&                                                                                        // 133
                !flags.invalidMonth &&                                                                                 // 134
                !flags.invalidWeekday &&                                                                               // 135
                !flags.nullInput &&                                                                                    // 136
                !flags.invalidFormat &&                                                                                // 137
                !flags.userInvalidated &&                                                                              // 138
                (!flags.meridiem || (flags.meridiem && parsedParts));                                                  // 139
                                                                                                                       // 140
            if (m._strict) {                                                                                           // 141
                isNowValid = isNowValid &&                                                                             // 142
                    flags.charsLeftOver === 0 &&                                                                       // 143
                    flags.unusedTokens.length === 0 &&                                                                 // 144
                    flags.bigHour === undefined;                                                                       // 145
            }                                                                                                          // 146
                                                                                                                       // 147
            if (Object.isFrozen == null || !Object.isFrozen(m)) {                                                      // 148
                m._isValid = isNowValid;                                                                               // 149
            }                                                                                                          // 150
            else {                                                                                                     // 151
                return isNowValid;                                                                                     // 152
            }                                                                                                          // 153
        }                                                                                                              // 154
        return m._isValid;                                                                                             // 155
    }                                                                                                                  // 156
                                                                                                                       // 157
    function valid__createInvalid (flags) {                                                                            // 158
        var m = create_utc__createUTC(NaN);                                                                            // 159
        if (flags != null) {                                                                                           // 160
            extend(getParsingFlags(m), flags);                                                                         // 161
        }                                                                                                              // 162
        else {                                                                                                         // 163
            getParsingFlags(m).userInvalidated = true;                                                                 // 164
        }                                                                                                              // 165
                                                                                                                       // 166
        return m;                                                                                                      // 167
    }                                                                                                                  // 168
                                                                                                                       // 169
    function isUndefined(input) {                                                                                      // 170
        return input === void 0;                                                                                       // 171
    }                                                                                                                  // 172
                                                                                                                       // 173
    // Plugins that add properties should also add the key here (null value),                                          // 174
    // so we can properly clone ourselves.                                                                             // 175
    var momentProperties = utils_hooks__hooks.momentProperties = [];                                                   // 176
                                                                                                                       // 177
    function copyConfig(to, from) {                                                                                    // 178
        var i, prop, val;                                                                                              // 179
                                                                                                                       // 180
        if (!isUndefined(from._isAMomentObject)) {                                                                     // 181
            to._isAMomentObject = from._isAMomentObject;                                                               // 182
        }                                                                                                              // 183
        if (!isUndefined(from._i)) {                                                                                   // 184
            to._i = from._i;                                                                                           // 185
        }                                                                                                              // 186
        if (!isUndefined(from._f)) {                                                                                   // 187
            to._f = from._f;                                                                                           // 188
        }                                                                                                              // 189
        if (!isUndefined(from._l)) {                                                                                   // 190
            to._l = from._l;                                                                                           // 191
        }                                                                                                              // 192
        if (!isUndefined(from._strict)) {                                                                              // 193
            to._strict = from._strict;                                                                                 // 194
        }                                                                                                              // 195
        if (!isUndefined(from._tzm)) {                                                                                 // 196
            to._tzm = from._tzm;                                                                                       // 197
        }                                                                                                              // 198
        if (!isUndefined(from._isUTC)) {                                                                               // 199
            to._isUTC = from._isUTC;                                                                                   // 200
        }                                                                                                              // 201
        if (!isUndefined(from._offset)) {                                                                              // 202
            to._offset = from._offset;                                                                                 // 203
        }                                                                                                              // 204
        if (!isUndefined(from._pf)) {                                                                                  // 205
            to._pf = getParsingFlags(from);                                                                            // 206
        }                                                                                                              // 207
        if (!isUndefined(from._locale)) {                                                                              // 208
            to._locale = from._locale;                                                                                 // 209
        }                                                                                                              // 210
                                                                                                                       // 211
        if (momentProperties.length > 0) {                                                                             // 212
            for (i in momentProperties) {                                                                              // 213
                prop = momentProperties[i];                                                                            // 214
                val = from[prop];                                                                                      // 215
                if (!isUndefined(val)) {                                                                               // 216
                    to[prop] = val;                                                                                    // 217
                }                                                                                                      // 218
            }                                                                                                          // 219
        }                                                                                                              // 220
                                                                                                                       // 221
        return to;                                                                                                     // 222
    }                                                                                                                  // 223
                                                                                                                       // 224
    var updateInProgress = false;                                                                                      // 225
                                                                                                                       // 226
    // Moment prototype object                                                                                         // 227
    function Moment(config) {                                                                                          // 228
        copyConfig(this, config);                                                                                      // 229
        this._d = new Date(config._d != null ? config._d.getTime() : NaN);                                             // 230
        // Prevent infinite loop in case updateOffset creates new moment                                               // 231
        // objects.                                                                                                    // 232
        if (updateInProgress === false) {                                                                              // 233
            updateInProgress = true;                                                                                   // 234
            utils_hooks__hooks.updateOffset(this);                                                                     // 235
            updateInProgress = false;                                                                                  // 236
        }                                                                                                              // 237
    }                                                                                                                  // 238
                                                                                                                       // 239
    function isMoment (obj) {                                                                                          // 240
        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);                                 // 241
    }                                                                                                                  // 242
                                                                                                                       // 243
    function absFloor (number) {                                                                                       // 244
        if (number < 0) {                                                                                              // 245
            // -0 -> 0                                                                                                 // 246
            return Math.ceil(number) || 0;                                                                             // 247
        } else {                                                                                                       // 248
            return Math.floor(number);                                                                                 // 249
        }                                                                                                              // 250
    }                                                                                                                  // 251
                                                                                                                       // 252
    function toInt(argumentForCoercion) {                                                                              // 253
        var coercedNumber = +argumentForCoercion,                                                                      // 254
            value = 0;                                                                                                 // 255
                                                                                                                       // 256
        if (coercedNumber !== 0 && isFinite(coercedNumber)) {                                                          // 257
            value = absFloor(coercedNumber);                                                                           // 258
        }                                                                                                              // 259
                                                                                                                       // 260
        return value;                                                                                                  // 261
    }                                                                                                                  // 262
                                                                                                                       // 263
    // compare two arrays, return the number of differences                                                            // 264
    function compareArrays(array1, array2, dontConvert) {                                                              // 265
        var len = Math.min(array1.length, array2.length),                                                              // 266
            lengthDiff = Math.abs(array1.length - array2.length),                                                      // 267
            diffs = 0,                                                                                                 // 268
            i;                                                                                                         // 269
        for (i = 0; i < len; i++) {                                                                                    // 270
            if ((dontConvert && array1[i] !== array2[i]) ||                                                            // 271
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {                                             // 272
                diffs++;                                                                                               // 273
            }                                                                                                          // 274
        }                                                                                                              // 275
        return diffs + lengthDiff;                                                                                     // 276
    }                                                                                                                  // 277
                                                                                                                       // 278
    function warn(msg) {                                                                                               // 279
        if (utils_hooks__hooks.suppressDeprecationWarnings === false &&                                                // 280
                (typeof console !==  'undefined') && console.warn) {                                                   // 281
            console.warn('Deprecation warning: ' + msg);                                                               // 282
        }                                                                                                              // 283
    }                                                                                                                  // 284
                                                                                                                       // 285
    function deprecate(msg, fn) {                                                                                      // 286
        var firstTime = true;                                                                                          // 287
                                                                                                                       // 288
        return extend(function () {                                                                                    // 289
            if (utils_hooks__hooks.deprecationHandler != null) {                                                       // 290
                utils_hooks__hooks.deprecationHandler(null, msg);                                                      // 291
            }                                                                                                          // 292
            if (firstTime) {                                                                                           // 293
                var args = [];                                                                                         // 294
                var arg;                                                                                               // 295
                for (var i = 0; i < arguments.length; i++) {                                                           // 296
                    arg = '';                                                                                          // 297
                    if (typeof arguments[i] === 'object') {                                                            // 298
                        arg += '\n[' + i + '] ';                                                                       // 299
                        for (var key in arguments[0]) {                                                                // 300
                            arg += key + ': ' + arguments[0][key] + ', ';                                              // 301
                        }                                                                                              // 302
                        arg = arg.slice(0, -2); // Remove trailing comma and space                                     // 303
                    } else {                                                                                           // 304
                        arg = arguments[i];                                                                            // 305
                    }                                                                                                  // 306
                    args.push(arg);                                                                                    // 307
                }                                                                                                      // 308
                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);  // 309
                firstTime = false;                                                                                     // 310
            }                                                                                                          // 311
            return fn.apply(this, arguments);                                                                          // 312
        }, fn);                                                                                                        // 313
    }                                                                                                                  // 314
                                                                                                                       // 315
    var deprecations = {};                                                                                             // 316
                                                                                                                       // 317
    function deprecateSimple(name, msg) {                                                                              // 318
        if (utils_hooks__hooks.deprecationHandler != null) {                                                           // 319
            utils_hooks__hooks.deprecationHandler(name, msg);                                                          // 320
        }                                                                                                              // 321
        if (!deprecations[name]) {                                                                                     // 322
            warn(msg);                                                                                                 // 323
            deprecations[name] = true;                                                                                 // 324
        }                                                                                                              // 325
    }                                                                                                                  // 326
                                                                                                                       // 327
    utils_hooks__hooks.suppressDeprecationWarnings = false;                                                            // 328
    utils_hooks__hooks.deprecationHandler = null;                                                                      // 329
                                                                                                                       // 330
    function isFunction(input) {                                                                                       // 331
        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';             // 332
    }                                                                                                                  // 333
                                                                                                                       // 334
    function locale_set__set (config) {                                                                                // 335
        var prop, i;                                                                                                   // 336
        for (i in config) {                                                                                            // 337
            prop = config[i];                                                                                          // 338
            if (isFunction(prop)) {                                                                                    // 339
                this[i] = prop;                                                                                        // 340
            } else {                                                                                                   // 341
                this['_' + i] = prop;                                                                                  // 342
            }                                                                                                          // 343
        }                                                                                                              // 344
        this._config = config;                                                                                         // 345
        // Lenient ordinal parsing accepts just a number in addition to                                                // 346
        // number + (possibly) stuff coming from _ordinalParseLenient.                                                 // 347
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);                  // 348
    }                                                                                                                  // 349
                                                                                                                       // 350
    function mergeConfigs(parentConfig, childConfig) {                                                                 // 351
        var res = extend({}, parentConfig), prop;                                                                      // 352
        for (prop in childConfig) {                                                                                    // 353
            if (hasOwnProp(childConfig, prop)) {                                                                       // 354
                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {                                     // 355
                    res[prop] = {};                                                                                    // 356
                    extend(res[prop], parentConfig[prop]);                                                             // 357
                    extend(res[prop], childConfig[prop]);                                                              // 358
                } else if (childConfig[prop] != null) {                                                                // 359
                    res[prop] = childConfig[prop];                                                                     // 360
                } else {                                                                                               // 361
                    delete res[prop];                                                                                  // 362
                }                                                                                                      // 363
            }                                                                                                          // 364
        }                                                                                                              // 365
        for (prop in parentConfig) {                                                                                   // 366
            if (hasOwnProp(parentConfig, prop) &&                                                                      // 367
                    !hasOwnProp(childConfig, prop) &&                                                                  // 368
                    isObject(parentConfig[prop])) {                                                                    // 369
                // make sure changes to properties don't modify parent config                                          // 370
                res[prop] = extend({}, res[prop]);                                                                     // 371
            }                                                                                                          // 372
        }                                                                                                              // 373
        return res;                                                                                                    // 374
    }                                                                                                                  // 375
                                                                                                                       // 376
    function Locale(config) {                                                                                          // 377
        if (config != null) {                                                                                          // 378
            this.set(config);                                                                                          // 379
        }                                                                                                              // 380
    }                                                                                                                  // 381
                                                                                                                       // 382
    var keys;                                                                                                          // 383
                                                                                                                       // 384
    if (Object.keys) {                                                                                                 // 385
        keys = Object.keys;                                                                                            // 386
    } else {                                                                                                           // 387
        keys = function (obj) {                                                                                        // 388
            var i, res = [];                                                                                           // 389
            for (i in obj) {                                                                                           // 390
                if (hasOwnProp(obj, i)) {                                                                              // 391
                    res.push(i);                                                                                       // 392
                }                                                                                                      // 393
            }                                                                                                          // 394
            return res;                                                                                                // 395
        };                                                                                                             // 396
    }                                                                                                                  // 397
                                                                                                                       // 398
    var defaultCalendar = {                                                                                            // 399
        sameDay : '[Today at] LT',                                                                                     // 400
        nextDay : '[Tomorrow at] LT',                                                                                  // 401
        nextWeek : 'dddd [at] LT',                                                                                     // 402
        lastDay : '[Yesterday at] LT',                                                                                 // 403
        lastWeek : '[Last] dddd [at] LT',                                                                              // 404
        sameElse : 'L'                                                                                                 // 405
    };                                                                                                                 // 406
                                                                                                                       // 407
    function locale_calendar__calendar (key, mom, now) {                                                               // 408
        var output = this._calendar[key] || this._calendar['sameElse'];                                                // 409
        return isFunction(output) ? output.call(mom, now) : output;                                                    // 410
    }                                                                                                                  // 411
                                                                                                                       // 412
    var defaultLongDateFormat = {                                                                                      // 413
        LTS  : 'h:mm:ss A',                                                                                            // 414
        LT   : 'h:mm A',                                                                                               // 415
        L    : 'MM/DD/YYYY',                                                                                           // 416
        LL   : 'MMMM D, YYYY',                                                                                         // 417
        LLL  : 'MMMM D, YYYY h:mm A',                                                                                  // 418
        LLLL : 'dddd, MMMM D, YYYY h:mm A'                                                                             // 419
    };                                                                                                                 // 420
                                                                                                                       // 421
    function longDateFormat (key) {                                                                                    // 422
        var format = this._longDateFormat[key],                                                                        // 423
            formatUpper = this._longDateFormat[key.toUpperCase()];                                                     // 424
                                                                                                                       // 425
        if (format || !formatUpper) {                                                                                  // 426
            return format;                                                                                             // 427
        }                                                                                                              // 428
                                                                                                                       // 429
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {                           // 430
            return val.slice(1);                                                                                       // 431
        });                                                                                                            // 432
                                                                                                                       // 433
        return this._longDateFormat[key];                                                                              // 434
    }                                                                                                                  // 435
                                                                                                                       // 436
    var defaultInvalidDate = 'Invalid date';                                                                           // 437
                                                                                                                       // 438
    function invalidDate () {                                                                                          // 439
        return this._invalidDate;                                                                                      // 440
    }                                                                                                                  // 441
                                                                                                                       // 442
    var defaultOrdinal = '%d';                                                                                         // 443
    var defaultOrdinalParse = /\d{1,2}/;                                                                               // 444
                                                                                                                       // 445
    function ordinal (number) {                                                                                        // 446
        return this._ordinal.replace('%d', number);                                                                    // 447
    }                                                                                                                  // 448
                                                                                                                       // 449
    var defaultRelativeTime = {                                                                                        // 450
        future : 'in %s',                                                                                              // 451
        past   : '%s ago',                                                                                             // 452
        s  : 'a few seconds',                                                                                          // 453
        m  : 'a minute',                                                                                               // 454
        mm : '%d minutes',                                                                                             // 455
        h  : 'an hour',                                                                                                // 456
        hh : '%d hours',                                                                                               // 457
        d  : 'a day',                                                                                                  // 458
        dd : '%d days',                                                                                                // 459
        M  : 'a month',                                                                                                // 460
        MM : '%d months',                                                                                              // 461
        y  : 'a year',                                                                                                 // 462
        yy : '%d years'                                                                                                // 463
    };                                                                                                                 // 464
                                                                                                                       // 465
    function relative__relativeTime (number, withoutSuffix, string, isFuture) {                                        // 466
        var output = this._relativeTime[string];                                                                       // 467
        return (isFunction(output)) ?                                                                                  // 468
            output(number, withoutSuffix, string, isFuture) :                                                          // 469
            output.replace(/%d/i, number);                                                                             // 470
    }                                                                                                                  // 471
                                                                                                                       // 472
    function pastFuture (diff, output) {                                                                               // 473
        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];                                                 // 474
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);                                    // 475
    }                                                                                                                  // 476
                                                                                                                       // 477
    var aliases = {};                                                                                                  // 478
                                                                                                                       // 479
    function addUnitAlias (unit, shorthand) {                                                                          // 480
        var lowerCase = unit.toLowerCase();                                                                            // 481
        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;                                     // 482
    }                                                                                                                  // 483
                                                                                                                       // 484
    function normalizeUnits(units) {                                                                                   // 485
        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;                 // 486
    }                                                                                                                  // 487
                                                                                                                       // 488
    function normalizeObjectUnits(inputObject) {                                                                       // 489
        var normalizedInput = {},                                                                                      // 490
            normalizedProp,                                                                                            // 491
            prop;                                                                                                      // 492
                                                                                                                       // 493
        for (prop in inputObject) {                                                                                    // 494
            if (hasOwnProp(inputObject, prop)) {                                                                       // 495
                normalizedProp = normalizeUnits(prop);                                                                 // 496
                if (normalizedProp) {                                                                                  // 497
                    normalizedInput[normalizedProp] = inputObject[prop];                                               // 498
                }                                                                                                      // 499
            }                                                                                                          // 500
        }                                                                                                              // 501
                                                                                                                       // 502
        return normalizedInput;                                                                                        // 503
    }                                                                                                                  // 504
                                                                                                                       // 505
    var priorities = {};                                                                                               // 506
                                                                                                                       // 507
    function addUnitPriority(unit, priority) {                                                                         // 508
        priorities[unit] = priority;                                                                                   // 509
    }                                                                                                                  // 510
                                                                                                                       // 511
    function getPrioritizedUnits(unitsObj) {                                                                           // 512
        var units = [];                                                                                                // 513
        for (var u in unitsObj) {                                                                                      // 514
            units.push({unit: u, priority: priorities[u]});                                                            // 515
        }                                                                                                              // 516
        units.sort(function (a, b) {                                                                                   // 517
            return a.priority - b.priority;                                                                            // 518
        });                                                                                                            // 519
        return units;                                                                                                  // 520
    }                                                                                                                  // 521
                                                                                                                       // 522
    function makeGetSet (unit, keepTime) {                                                                             // 523
        return function (value) {                                                                                      // 524
            if (value != null) {                                                                                       // 525
                get_set__set(this, unit, value);                                                                       // 526
                utils_hooks__hooks.updateOffset(this, keepTime);                                                       // 527
                return this;                                                                                           // 528
            } else {                                                                                                   // 529
                return get_set__get(this, unit);                                                                       // 530
            }                                                                                                          // 531
        };                                                                                                             // 532
    }                                                                                                                  // 533
                                                                                                                       // 534
    function get_set__get (mom, unit) {                                                                                // 535
        return mom.isValid() ?                                                                                         // 536
            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;                                                  // 537
    }                                                                                                                  // 538
                                                                                                                       // 539
    function get_set__set (mom, unit, value) {                                                                         // 540
        if (mom.isValid()) {                                                                                           // 541
            mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);                                                   // 542
        }                                                                                                              // 543
    }                                                                                                                  // 544
                                                                                                                       // 545
    // MOMENTS                                                                                                         // 546
                                                                                                                       // 547
    function stringGet (units) {                                                                                       // 548
        units = normalizeUnits(units);                                                                                 // 549
        if (isFunction(this[units])) {                                                                                 // 550
            return this[units]();                                                                                      // 551
        }                                                                                                              // 552
        return this;                                                                                                   // 553
    }                                                                                                                  // 554
                                                                                                                       // 555
                                                                                                                       // 556
    function stringSet (units, value) {                                                                                // 557
        if (typeof units === 'object') {                                                                               // 558
            units = normalizeObjectUnits(units);                                                                       // 559
            var prioritized = getPrioritizedUnits(units);                                                              // 560
            for (var i = 0; i < prioritized.length; i++) {                                                             // 561
                this[prioritized[i].unit](units[prioritized[i].unit]);                                                 // 562
            }                                                                                                          // 563
        } else {                                                                                                       // 564
            units = normalizeUnits(units);                                                                             // 565
            if (isFunction(this[units])) {                                                                             // 566
                return this[units](value);                                                                             // 567
            }                                                                                                          // 568
        }                                                                                                              // 569
        return this;                                                                                                   // 570
    }                                                                                                                  // 571
                                                                                                                       // 572
    function zeroFill(number, targetLength, forceSign) {                                                               // 573
        var absNumber = '' + Math.abs(number),                                                                         // 574
            zerosToFill = targetLength - absNumber.length,                                                             // 575
            sign = number >= 0;                                                                                        // 576
        return (sign ? (forceSign ? '+' : '') : '-') +                                                                 // 577
            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;                                   // 578
    }                                                                                                                  // 579
                                                                                                                       // 580
    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
                                                                                                                       // 582
    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;                                          // 583
                                                                                                                       // 584
    var formatFunctions = {};                                                                                          // 585
                                                                                                                       // 586
    var formatTokenFunctions = {};                                                                                     // 587
                                                                                                                       // 588
    // token:    'M'                                                                                                   // 589
    // padded:   ['MM', 2]                                                                                             // 590
    // ordinal:  'Mo'                                                                                                  // 591
    // callback: function () { this.month() + 1 }                                                                      // 592
    function addFormatToken (token, padded, ordinal, callback) {                                                       // 593
        var func = callback;                                                                                           // 594
        if (typeof callback === 'string') {                                                                            // 595
            func = function () {                                                                                       // 596
                return this[callback]();                                                                               // 597
            };                                                                                                         // 598
        }                                                                                                              // 599
        if (token) {                                                                                                   // 600
            formatTokenFunctions[token] = func;                                                                        // 601
        }                                                                                                              // 602
        if (padded) {                                                                                                  // 603
            formatTokenFunctions[padded[0]] = function () {                                                            // 604
                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);                                    // 605
            };                                                                                                         // 606
        }                                                                                                              // 607
        if (ordinal) {                                                                                                 // 608
            formatTokenFunctions[ordinal] = function () {                                                              // 609
                return this.localeData().ordinal(func.apply(this, arguments), token);                                  // 610
            };                                                                                                         // 611
        }                                                                                                              // 612
    }                                                                                                                  // 613
                                                                                                                       // 614
    function removeFormattingTokens(input) {                                                                           // 615
        if (input.match(/\[[\s\S]/)) {                                                                                 // 616
            return input.replace(/^\[|\]$/g, '');                                                                      // 617
        }                                                                                                              // 618
        return input.replace(/\\/g, '');                                                                               // 619
    }                                                                                                                  // 620
                                                                                                                       // 621
    function makeFormatFunction(format) {                                                                              // 622
        var array = format.match(formattingTokens), i, length;                                                         // 623
                                                                                                                       // 624
        for (i = 0, length = array.length; i < length; i++) {                                                          // 625
            if (formatTokenFunctions[array[i]]) {                                                                      // 626
                array[i] = formatTokenFunctions[array[i]];                                                             // 627
            } else {                                                                                                   // 628
                array[i] = removeFormattingTokens(array[i]);                                                           // 629
            }                                                                                                          // 630
        }                                                                                                              // 631
                                                                                                                       // 632
        return function (mom) {                                                                                        // 633
            var output = '', i;                                                                                        // 634
            for (i = 0; i < length; i++) {                                                                             // 635
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];                        // 636
            }                                                                                                          // 637
            return output;                                                                                             // 638
        };                                                                                                             // 639
    }                                                                                                                  // 640
                                                                                                                       // 641
    // format date using native date object                                                                            // 642
    function formatMoment(m, format) {                                                                                 // 643
        if (!m.isValid()) {                                                                                            // 644
            return m.localeData().invalidDate();                                                                       // 645
        }                                                                                                              // 646
                                                                                                                       // 647
        format = expandFormat(format, m.localeData());                                                                 // 648
        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);                               // 649
                                                                                                                       // 650
        return formatFunctions[format](m);                                                                             // 651
    }                                                                                                                  // 652
                                                                                                                       // 653
    function expandFormat(format, locale) {                                                                            // 654
        var i = 5;                                                                                                     // 655
                                                                                                                       // 656
        function replaceLongDateFormatTokens(input) {                                                                  // 657
            return locale.longDateFormat(input) || input;                                                              // 658
        }                                                                                                              // 659
                                                                                                                       // 660
        localFormattingTokens.lastIndex = 0;                                                                           // 661
        while (i >= 0 && localFormattingTokens.test(format)) {                                                         // 662
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);                               // 663
            localFormattingTokens.lastIndex = 0;                                                                       // 664
            i -= 1;                                                                                                    // 665
        }                                                                                                              // 666
                                                                                                                       // 667
        return format;                                                                                                 // 668
    }                                                                                                                  // 669
                                                                                                                       // 670
    var match1         = /\d/;            //       0 - 9                                                               // 671
    var match2         = /\d\d/;          //      00 - 99                                                              // 672
    var match3         = /\d{3}/;         //     000 - 999                                                             // 673
    var match4         = /\d{4}/;         //    0000 - 9999                                                            // 674
    var match6         = /[+-]?\d{6}/;    // -999999 - 999999                                                          // 675
    var match1to2      = /\d\d?/;         //       0 - 99                                                              // 676
    var match3to4      = /\d\d\d\d?/;     //     999 - 9999                                                            // 677
    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999                                                          // 678
    var match1to3      = /\d{1,3}/;       //       0 - 999                                                             // 679
    var match1to4      = /\d{1,4}/;       //       0 - 9999                                                            // 680
    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999                                                          // 681
                                                                                                                       // 682
    var matchUnsigned  = /\d+/;           //       0 - inf                                                             // 683
    var matchSigned    = /[+-]?\d+/;      //    -inf - inf                                                             // 684
                                                                                                                       // 685
    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z                                       // 686
    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z                        // 687
                                                                                                                       // 688
    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123                                            // 689
                                                                                                                       // 690
    // any word (or two) characters or numbers including two/three word month in arabic.                               // 691
    // includes scottish gaelic two word and hyphenated months                                                         // 692
    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
                                                                                                                       // 694
                                                                                                                       // 695
    var regexes = {};                                                                                                  // 696
                                                                                                                       // 697
    function addRegexToken (token, regex, strictRegex) {                                                               // 698
        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {                                 // 699
            return (isStrict && strictRegex) ? strictRegex : regex;                                                    // 700
        };                                                                                                             // 701
    }                                                                                                                  // 702
                                                                                                                       // 703
    function getParseRegexForToken (token, config) {                                                                   // 704
        if (!hasOwnProp(regexes, token)) {                                                                             // 705
            return new RegExp(unescapeFormat(token));                                                                  // 706
        }                                                                                                              // 707
                                                                                                                       // 708
        return regexes[token](config._strict, config._locale);                                                         // 709
    }                                                                                                                  // 710
                                                                                                                       // 711
    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript            // 712
    function unescapeFormat(s) {                                                                                       // 713
        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;                                                                               // 715
        }));                                                                                                           // 716
    }                                                                                                                  // 717
                                                                                                                       // 718
    function regexEscape(s) {                                                                                          // 719
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');                                                            // 720
    }                                                                                                                  // 721
                                                                                                                       // 722
    var tokens = {};                                                                                                   // 723
                                                                                                                       // 724
    function addParseToken (token, callback) {                                                                         // 725
        var i, func = callback;                                                                                        // 726
        if (typeof token === 'string') {                                                                               // 727
            token = [token];                                                                                           // 728
        }                                                                                                              // 729
        if (typeof callback === 'number') {                                                                            // 730
            func = function (input, array) {                                                                           // 731
                array[callback] = toInt(input);                                                                        // 732
            };                                                                                                         // 733
        }                                                                                                              // 734
        for (i = 0; i < token.length; i++) {                                                                           // 735
            tokens[token[i]] = func;                                                                                   // 736
        }                                                                                                              // 737
    }                                                                                                                  // 738
                                                                                                                       // 739
    function addWeekParseToken (token, callback) {                                                                     // 740
        addParseToken(token, function (input, array, config, token) {                                                  // 741
            config._w = config._w || {};                                                                               // 742
            callback(input, config._w, config, token);                                                                 // 743
        });                                                                                                            // 744
    }                                                                                                                  // 745
                                                                                                                       // 746
    function addTimeToArrayFromToken(token, input, config) {                                                           // 747
        if (input != null && hasOwnProp(tokens, token)) {                                                              // 748
            tokens[token](input, config._a, config, token);                                                            // 749
        }                                                                                                              // 750
    }                                                                                                                  // 751
                                                                                                                       // 752
    var YEAR = 0;                                                                                                      // 753
    var MONTH = 1;                                                                                                     // 754
    var DATE = 2;                                                                                                      // 755
    var HOUR = 3;                                                                                                      // 756
    var MINUTE = 4;                                                                                                    // 757
    var SECOND = 5;                                                                                                    // 758
    var MILLISECOND = 6;                                                                                               // 759
    var WEEK = 7;                                                                                                      // 760
    var WEEKDAY = 8;                                                                                                   // 761
                                                                                                                       // 762
    var indexOf;                                                                                                       // 763
                                                                                                                       // 764
    if (Array.prototype.indexOf) {                                                                                     // 765
        indexOf = Array.prototype.indexOf;                                                                             // 766
    } else {                                                                                                           // 767
        indexOf = function (o) {                                                                                       // 768
            // I know                                                                                                  // 769
            var i;                                                                                                     // 770
            for (i = 0; i < this.length; ++i) {                                                                        // 771
                if (this[i] === o) {                                                                                   // 772
                    return i;                                                                                          // 773
                }                                                                                                      // 774
            }                                                                                                          // 775
            return -1;                                                                                                 // 776
        };                                                                                                             // 777
    }                                                                                                                  // 778
                                                                                                                       // 779
    function daysInMonth(year, month) {                                                                                // 780
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();                                                    // 781
    }                                                                                                                  // 782
                                                                                                                       // 783
    // FORMATTING                                                                                                      // 784
                                                                                                                       // 785
    addFormatToken('M', ['MM', 2], 'Mo', function () {                                                                 // 786
        return this.month() + 1;                                                                                       // 787
    });                                                                                                                // 788
                                                                                                                       // 789
    addFormatToken('MMM', 0, 0, function (format) {                                                                    // 790
        return this.localeData().monthsShort(this, format);                                                            // 791
    });                                                                                                                // 792
                                                                                                                       // 793
    addFormatToken('MMMM', 0, 0, function (format) {                                                                   // 794
        return this.localeData().months(this, format);                                                                 // 795
    });                                                                                                                // 796
                                                                                                                       // 797
    // ALIASES                                                                                                         // 798
                                                                                                                       // 799
    addUnitAlias('month', 'M');                                                                                        // 800
                                                                                                                       // 801
    // PRIORITY                                                                                                        // 802
                                                                                                                       // 803
    addUnitPriority('month', 8);                                                                                       // 804
                                                                                                                       // 805
    // PARSING                                                                                                         // 806
                                                                                                                       // 807
    addRegexToken('M',    match1to2);                                                                                  // 808
    addRegexToken('MM',   match1to2, match2);                                                                          // 809
    addRegexToken('MMM',  function (isStrict, locale) {                                                                // 810
        return locale.monthsShortRegex(isStrict);                                                                      // 811
    });                                                                                                                // 812
    addRegexToken('MMMM', function (isStrict, locale) {                                                                // 813
        return locale.monthsRegex(isStrict);                                                                           // 814
    });                                                                                                                // 815
                                                                                                                       // 816
    addParseToken(['M', 'MM'], function (input, array) {                                                               // 817
        array[MONTH] = toInt(input) - 1;                                                                               // 818
    });                                                                                                                // 819
                                                                                                                       // 820
    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {                                            // 821
        var month = config._locale.monthsParse(input, token, config._strict);                                          // 822
        // if we didn't find a month name, mark the date as invalid.                                                   // 823
        if (month != null) {                                                                                           // 824
            array[MONTH] = month;                                                                                      // 825
        } else {                                                                                                       // 826
            getParsingFlags(config).invalidMonth = input;                                                              // 827
        }                                                                                                              // 828
    });                                                                                                                // 829
                                                                                                                       // 830
    // LOCALES                                                                                                         // 831
                                                                                                                       // 832
    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;                                                           // 833
    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
    function localeMonths (m, format) {                                                                                // 835
        if (!m) {                                                                                                      // 836
            return this._months;                                                                                       // 837
        }                                                                                                              // 838
        return isArray(this._months) ? this._months[m.month()] :                                                       // 839
            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
    }                                                                                                                  // 841
                                                                                                                       // 842
    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');                       // 843
    function localeMonthsShort (m, format) {                                                                           // 844
        if (!m) {                                                                                                      // 845
            return this._monthsShort;                                                                                  // 846
        }                                                                                                              // 847
        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :                                             // 848
            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];                     // 849
    }                                                                                                                  // 850
                                                                                                                       // 851
    function units_month__handleStrictParse(monthName, format, strict) {                                               // 852
        var i, ii, mom, llc = monthName.toLocaleLowerCase();                                                           // 853
        if (!this._monthsParse) {                                                                                      // 854
            // this is not used                                                                                        // 855
            this._monthsParse = [];                                                                                    // 856
            this._longMonthsParse = [];                                                                                // 857
            this._shortMonthsParse = [];                                                                               // 858
            for (i = 0; i < 12; ++i) {                                                                                 // 859
                mom = create_utc__createUTC([2000, i]);                                                                // 860
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();                             // 861
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();                                   // 862
            }                                                                                                          // 863
        }                                                                                                              // 864
                                                                                                                       // 865
        if (strict) {                                                                                                  // 866
            if (format === 'MMM') {                                                                                    // 867
                ii = indexOf.call(this._shortMonthsParse, llc);                                                        // 868
                return ii !== -1 ? ii : null;                                                                          // 869
            } else {                                                                                                   // 870
                ii = indexOf.call(this._longMonthsParse, llc);                                                         // 871
                return ii !== -1 ? ii : null;                                                                          // 872
            }                                                                                                          // 873
        } else {                                                                                                       // 874
            if (format === 'MMM') {                                                                                    // 875
                ii = indexOf.call(this._shortMonthsParse, llc);                                                        // 876
                if (ii !== -1) {                                                                                       // 877
                    return ii;                                                                                         // 878
                }                                                                                                      // 879
                ii = indexOf.call(this._longMonthsParse, llc);                                                         // 880
                return ii !== -1 ? ii : null;                                                                          // 881
            } else {                                                                                                   // 882
                ii = indexOf.call(this._longMonthsParse, llc);                                                         // 883
                if (ii !== -1) {                                                                                       // 884
                    return ii;                                                                                         // 885
                }                                                                                                      // 886
                ii = indexOf.call(this._shortMonthsParse, llc);                                                        // 887
                return ii !== -1 ? ii : null;                                                                          // 888
            }                                                                                                          // 889
        }                                                                                                              // 890
    }                                                                                                                  // 891
                                                                                                                       // 892
    function localeMonthsParse (monthName, format, strict) {                                                           // 893
        var i, mom, regex;                                                                                             // 894
                                                                                                                       // 895
        if (this._monthsParseExact) {                                                                                  // 896
            return units_month__handleStrictParse.call(this, monthName, format, strict);                               // 897
        }                                                                                                              // 898
                                                                                                                       // 899
        if (!this._monthsParse) {                                                                                      // 900
            this._monthsParse = [];                                                                                    // 901
            this._longMonthsParse = [];                                                                                // 902
            this._shortMonthsParse = [];                                                                               // 903
        }                                                                                                              // 904
                                                                                                                       // 905
        // TODO: add sorting                                                                                           // 906
        // Sorting makes sure if one month (or abbr) is a prefix of another                                            // 907
        // see sorting in computeMonthsParse                                                                           // 908
        for (i = 0; i < 12; i++) {                                                                                     // 909
            // make the regex if we don't have it already                                                              // 910
            mom = create_utc__createUTC([2000, i]);                                                                    // 911
            if (strict && !this._longMonthsParse[i]) {                                                                 // 912
                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');         // 913
                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');   // 914
            }                                                                                                          // 915
            if (!strict && !this._monthsParse[i]) {                                                                    // 916
                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');                                 // 917
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');                                        // 918
            }                                                                                                          // 919
            // test the regex                                                                                          // 920
            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {                             // 921
                return i;                                                                                              // 922
            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {                      // 923
                return i;                                                                                              // 924
            } else if (!strict && this._monthsParse[i].test(monthName)) {                                              // 925
                return i;                                                                                              // 926
            }                                                                                                          // 927
        }                                                                                                              // 928
    }                                                                                                                  // 929
                                                                                                                       // 930
    // MOMENTS                                                                                                         // 931
                                                                                                                       // 932
    function setMonth (mom, value) {                                                                                   // 933
        var dayOfMonth;                                                                                                // 934
                                                                                                                       // 935
        if (!mom.isValid()) {                                                                                          // 936
            // No op                                                                                                   // 937
            return mom;                                                                                                // 938
        }                                                                                                              // 939
                                                                                                                       // 940
        if (typeof value === 'string') {                                                                               // 941
            if (/^\d+$/.test(value)) {                                                                                 // 942
                value = toInt(value);                                                                                  // 943
            } else {                                                                                                   // 944
                value = mom.localeData().monthsParse(value);                                                           // 945
                // TODO: Another silent failure?                                                                       // 946
                if (typeof value !== 'number') {                                                                       // 947
                    return mom;                                                                                        // 948
                }                                                                                                      // 949
            }                                                                                                          // 950
        }                                                                                                              // 951
                                                                                                                       // 952
        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));                                             // 953
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);                                        // 954
        return mom;                                                                                                    // 955
    }                                                                                                                  // 956
                                                                                                                       // 957
    function getSetMonth (value) {                                                                                     // 958
        if (value != null) {                                                                                           // 959
            setMonth(this, value);                                                                                     // 960
            utils_hooks__hooks.updateOffset(this, true);                                                               // 961
            return this;                                                                                               // 962
        } else {                                                                                                       // 963
            return get_set__get(this, 'Month');                                                                        // 964
        }                                                                                                              // 965
    }                                                                                                                  // 966
                                                                                                                       // 967
    function getDaysInMonth () {                                                                                       // 968
        return daysInMonth(this.year(), this.month());                                                                 // 969
    }                                                                                                                  // 970
                                                                                                                       // 971
    var defaultMonthsShortRegex = matchWord;                                                                           // 972
    function monthsShortRegex (isStrict) {                                                                             // 973
        if (this._monthsParseExact) {                                                                                  // 974
            if (!hasOwnProp(this, '_monthsRegex')) {                                                                   // 975
                computeMonthsParse.call(this);                                                                         // 976
            }                                                                                                          // 977
            if (isStrict) {                                                                                            // 978
                return this._monthsShortStrictRegex;                                                                   // 979
            } else {                                                                                                   // 980
                return this._monthsShortRegex;                                                                         // 981
            }                                                                                                          // 982
        } else {                                                                                                       // 983
            if (!hasOwnProp(this, '_monthsShortRegex')) {                                                              // 984
                this._monthsShortRegex = defaultMonthsShortRegex;                                                      // 985
            }                                                                                                          // 986
            return this._monthsShortStrictRegex && isStrict ?                                                          // 987
                this._monthsShortStrictRegex : this._monthsShortRegex;                                                 // 988
        }                                                                                                              // 989
    }                                                                                                                  // 990
                                                                                                                       // 991
    var defaultMonthsRegex = matchWord;                                                                                // 992
    function monthsRegex (isStrict) {                                                                                  // 993
        if (this._monthsParseExact) {                                                                                  // 994
            if (!hasOwnProp(this, '_monthsRegex')) {                                                                   // 995
                computeMonthsParse.call(this);                                                                         // 996
            }                                                                                                          // 997
            if (isStrict) {                                                                                            // 998
                return this._monthsStrictRegex;                                                                        // 999
            } else {                                                                                                   // 1000
                return this._monthsRegex;                                                                              // 1001
            }                                                                                                          // 1002
        } else {                                                                                                       // 1003
            if (!hasOwnProp(this, '_monthsRegex')) {                                                                   // 1004
                this._monthsRegex = defaultMonthsRegex;                                                                // 1005
            }                                                                                                          // 1006
            return this._monthsStrictRegex && isStrict ?                                                               // 1007
                this._monthsStrictRegex : this._monthsRegex;                                                           // 1008
        }                                                                                                              // 1009
    }                                                                                                                  // 1010
                                                                                                                       // 1011
    function computeMonthsParse () {                                                                                   // 1012
        function cmpLenRev(a, b) {                                                                                     // 1013
            return b.length - a.length;                                                                                // 1014
        }                                                                                                              // 1015
                                                                                                                       // 1016
        var shortPieces = [], longPieces = [], mixedPieces = [],                                                       // 1017
            i, mom;                                                                                                    // 1018
        for (i = 0; i < 12; i++) {                                                                                     // 1019
            // make the regex if we don't have it already                                                              // 1020
            mom = create_utc__createUTC([2000, i]);                                                                    // 1021
            shortPieces.push(this.monthsShort(mom, ''));                                                               // 1022
            longPieces.push(this.months(mom, ''));                                                                     // 1023
            mixedPieces.push(this.months(mom, ''));                                                                    // 1024
            mixedPieces.push(this.monthsShort(mom, ''));                                                               // 1025
        }                                                                                                              // 1026
        // Sorting makes sure if one month (or abbr) is a prefix of another it                                         // 1027
        // will match the longer piece.                                                                                // 1028
        shortPieces.sort(cmpLenRev);                                                                                   // 1029
        longPieces.sort(cmpLenRev);                                                                                    // 1030
        mixedPieces.sort(cmpLenRev);                                                                                   // 1031
        for (i = 0; i < 12; i++) {                                                                                     // 1032
            shortPieces[i] = regexEscape(shortPieces[i]);                                                              // 1033
            longPieces[i] = regexEscape(longPieces[i]);                                                                // 1034
        }                                                                                                              // 1035
        for (i = 0; i < 24; i++) {                                                                                     // 1036
            mixedPieces[i] = regexEscape(mixedPieces[i]);                                                              // 1037
        }                                                                                                              // 1038
                                                                                                                       // 1039
        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');                                       // 1040
        this._monthsShortRegex = this._monthsRegex;                                                                    // 1041
        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');                                  // 1042
        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');                            // 1043
    }                                                                                                                  // 1044
                                                                                                                       // 1045
    // FORMATTING                                                                                                      // 1046
                                                                                                                       // 1047
    addFormatToken('Y', 0, 0, function () {                                                                            // 1048
        var y = this.year();                                                                                           // 1049
        return y <= 9999 ? '' + y : '+' + y;                                                                           // 1050
    });                                                                                                                // 1051
                                                                                                                       // 1052
    addFormatToken(0, ['YY', 2], 0, function () {                                                                      // 1053
        return this.year() % 100;                                                                                      // 1054
    });                                                                                                                // 1055
                                                                                                                       // 1056
    addFormatToken(0, ['YYYY',   4],       0, 'year');                                                                 // 1057
    addFormatToken(0, ['YYYYY',  5],       0, 'year');                                                                 // 1058
    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');                                                                 // 1059
                                                                                                                       // 1060
    // ALIASES                                                                                                         // 1061
                                                                                                                       // 1062
    addUnitAlias('year', 'y');                                                                                         // 1063
                                                                                                                       // 1064
    // PRIORITIES                                                                                                      // 1065
                                                                                                                       // 1066
    addUnitPriority('year', 1);                                                                                        // 1067
                                                                                                                       // 1068
    // PARSING                                                                                                         // 1069
                                                                                                                       // 1070
    addRegexToken('Y',      matchSigned);                                                                              // 1071
    addRegexToken('YY',     match1to2, match2);                                                                        // 1072
    addRegexToken('YYYY',   match1to4, match4);                                                                        // 1073
    addRegexToken('YYYYY',  match1to6, match6);                                                                        // 1074
    addRegexToken('YYYYYY', match1to6, match6);                                                                        // 1075
                                                                                                                       // 1076
    addParseToken(['YYYYY', 'YYYYYY'], YEAR);                                                                          // 1077
    addParseToken('YYYY', function (input, array) {                                                                    // 1078
        array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);                 // 1079
    });                                                                                                                // 1080
    addParseToken('YY', function (input, array) {                                                                      // 1081
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);                                                     // 1082
    });                                                                                                                // 1083
    addParseToken('Y', function (input, array) {                                                                       // 1084
        array[YEAR] = parseInt(input, 10);                                                                             // 1085
    });                                                                                                                // 1086
                                                                                                                       // 1087
    // HELPERS                                                                                                         // 1088
                                                                                                                       // 1089
    function daysInYear(year) {                                                                                        // 1090
        return isLeapYear(year) ? 366 : 365;                                                                           // 1091
    }                                                                                                                  // 1092
                                                                                                                       // 1093
    function isLeapYear(year) {                                                                                        // 1094
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;                                               // 1095
    }                                                                                                                  // 1096
                                                                                                                       // 1097
    // HOOKS                                                                                                           // 1098
                                                                                                                       // 1099
    utils_hooks__hooks.parseTwoDigitYear = function (input) {                                                          // 1100
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);                                                       // 1101
    };                                                                                                                 // 1102
                                                                                                                       // 1103
    // MOMENTS                                                                                                         // 1104
                                                                                                                       // 1105
    var getSetYear = makeGetSet('FullYear', true);                                                                     // 1106
                                                                                                                       // 1107
    function getIsLeapYear () {                                                                                        // 1108
        return isLeapYear(this.year());                                                                                // 1109
    }                                                                                                                  // 1110
                                                                                                                       // 1111
    function createDate (y, m, d, h, M, s, ms) {                                                                       // 1112
        //can't just apply() to create a date:                                                                         // 1113
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);                                                                     // 1115
                                                                                                                       // 1116
        //the date constructor remaps years 0-99 to 1900-1999                                                          // 1117
        if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {                                                       // 1118
            date.setFullYear(y);                                                                                       // 1119
        }                                                                                                              // 1120
        return date;                                                                                                   // 1121
    }                                                                                                                  // 1122
                                                                                                                       // 1123
    function createUTCDate (y) {                                                                                       // 1124
        var date = new Date(Date.UTC.apply(null, arguments));                                                          // 1125
                                                                                                                       // 1126
        //the Date.UTC function remaps years 0-99 to 1900-1999                                                         // 1127
        if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {                                                    // 1128
            date.setUTCFullYear(y);                                                                                    // 1129
        }                                                                                                              // 1130
        return date;                                                                                                   // 1131
    }                                                                                                                  // 1132
                                                                                                                       // 1133
    // start-of-first-week - start-of-year                                                                             // 1134
    function firstWeekOffset(year, dow, doy) {                                                                         // 1135
        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)                    // 1136
            fwd = 7 + dow - doy,                                                                                       // 1137
            // first-week day local weekday -- which local weekday is fwd                                              // 1138
            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;                                           // 1139
                                                                                                                       // 1140
        return -fwdlw + fwd - 1;                                                                                       // 1141
    }                                                                                                                  // 1142
                                                                                                                       // 1143
    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday          // 1144
    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {                                                       // 1145
        var localWeekday = (7 + weekday - dow) % 7,                                                                    // 1146
            weekOffset = firstWeekOffset(year, dow, doy),                                                              // 1147
            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,                                                // 1148
            resYear, resDayOfYear;                                                                                     // 1149
                                                                                                                       // 1150
        if (dayOfYear <= 0) {                                                                                          // 1151
            resYear = year - 1;                                                                                        // 1152
            resDayOfYear = daysInYear(resYear) + dayOfYear;                                                            // 1153
        } else if (dayOfYear > daysInYear(year)) {                                                                     // 1154
            resYear = year + 1;                                                                                        // 1155
            resDayOfYear = dayOfYear - daysInYear(year);                                                               // 1156
        } else {                                                                                                       // 1157
            resYear = year;                                                                                            // 1158
            resDayOfYear = dayOfYear;                                                                                  // 1159
        }                                                                                                              // 1160
                                                                                                                       // 1161
        return {                                                                                                       // 1162
            year: resYear,                                                                                             // 1163
            dayOfYear: resDayOfYear                                                                                    // 1164
        };                                                                                                             // 1165
    }                                                                                                                  // 1166
                                                                                                                       // 1167
    function weekOfYear(mom, dow, doy) {                                                                               // 1168
        var weekOffset = firstWeekOffset(mom.year(), dow, doy),                                                        // 1169
            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,                                             // 1170
            resWeek, resYear;                                                                                          // 1171
                                                                                                                       // 1172
        if (week < 1) {                                                                                                // 1173
            resYear = mom.year() - 1;                                                                                  // 1174
            resWeek = week + weeksInYear(resYear, dow, doy);                                                           // 1175
        } else if (week > weeksInYear(mom.year(), dow, doy)) {                                                         // 1176
            resWeek = week - weeksInYear(mom.year(), dow, doy);                                                        // 1177
            resYear = mom.year() + 1;                                                                                  // 1178
        } else {                                                                                                       // 1179
            resYear = mom.year();                                                                                      // 1180
            resWeek = week;                                                                                            // 1181
        }                                                                                                              // 1182
                                                                                                                       // 1183
        return {                                                                                                       // 1184
            week: resWeek,                                                                                             // 1185
            year: resYear                                                                                              // 1186
        };                                                                                                             // 1187
    }                                                                                                                  // 1188
                                                                                                                       // 1189
    function weeksInYear(year, dow, doy) {                                                                             // 1190
        var weekOffset = firstWeekOffset(year, dow, doy),                                                              // 1191
            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);                                                      // 1192
        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;                                                   // 1193
    }                                                                                                                  // 1194
                                                                                                                       // 1195
    // FORMATTING                                                                                                      // 1196
                                                                                                                       // 1197
    addFormatToken('w', ['ww', 2], 'wo', 'week');                                                                      // 1198
    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');                                                                   // 1199
                                                                                                                       // 1200
    // ALIASES                                                                                                         // 1201
                                                                                                                       // 1202
    addUnitAlias('week', 'w');                                                                                         // 1203
    addUnitAlias('isoWeek', 'W');                                                                                      // 1204
                                                                                                                       // 1205
    // PRIORITIES                                                                                                      // 1206
                                                                                                                       // 1207
    addUnitPriority('week', 5);                                                                                        // 1208
    addUnitPriority('isoWeek', 5);                                                                                     // 1209
                                                                                                                       // 1210
    // PARSING                                                                                                         // 1211
                                                                                                                       // 1212
    addRegexToken('w',  match1to2);                                                                                    // 1213
    addRegexToken('ww', match1to2, match2);                                                                            // 1214
    addRegexToken('W',  match1to2);                                                                                    // 1215
    addRegexToken('WW', match1to2, match2);                                                                            // 1216
                                                                                                                       // 1217
    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {                                  // 1218
        week[token.substr(0, 1)] = toInt(input);                                                                       // 1219
    });                                                                                                                // 1220
                                                                                                                       // 1221
    // HELPERS                                                                                                         // 1222
                                                                                                                       // 1223
    // LOCALES                                                                                                         // 1224
                                                                                                                       // 1225
    function localeWeek (mom) {                                                                                        // 1226
        return weekOfYear(mom, this._week.dow, this._week.doy).week;                                                   // 1227
    }                                                                                                                  // 1228
                                                                                                                       // 1229
    var defaultLocaleWeek = {                                                                                          // 1230
        dow : 0, // Sunday is the first day of the week.                                                               // 1231
        doy : 6  // The week that contains Jan 1st is the first week of the year.                                      // 1232
    };                                                                                                                 // 1233
                                                                                                                       // 1234
    function localeFirstDayOfWeek () {                                                                                 // 1235
        return this._week.dow;                                                                                         // 1236
    }                                                                                                                  // 1237
                                                                                                                       // 1238
    function localeFirstDayOfYear () {                                                                                 // 1239
        return this._week.doy;                                                                                         // 1240
    }                                                                                                                  // 1241
                                                                                                                       // 1242
    // MOMENTS                                                                                                         // 1243
                                                                                                                       // 1244
    function getSetWeek (input) {                                                                                      // 1245
        var week = this.localeData().week(this);                                                                       // 1246
        return input == null ? week : this.add((input - week) * 7, 'd');                                               // 1247
    }                                                                                                                  // 1248
                                                                                                                       // 1249
    function getSetISOWeek (input) {                                                                                   // 1250
        var week = weekOfYear(this, 1, 4).week;                                                                        // 1251
        return input == null ? week : this.add((input - week) * 7, 'd');                                               // 1252
    }                                                                                                                  // 1253
                                                                                                                       // 1254
    // FORMATTING                                                                                                      // 1255
                                                                                                                       // 1256
    addFormatToken('d', 0, 'do', 'day');                                                                               // 1257
                                                                                                                       // 1258
    addFormatToken('dd', 0, 0, function (format) {                                                                     // 1259
        return this.localeData().weekdaysMin(this, format);                                                            // 1260
    });                                                                                                                // 1261
                                                                                                                       // 1262
    addFormatToken('ddd', 0, 0, function (format) {                                                                    // 1263
        return this.localeData().weekdaysShort(this, format);                                                          // 1264
    });                                                                                                                // 1265
                                                                                                                       // 1266
    addFormatToken('dddd', 0, 0, function (format) {                                                                   // 1267
        return this.localeData().weekdays(this, format);                                                               // 1268
    });                                                                                                                // 1269
                                                                                                                       // 1270
    addFormatToken('e', 0, 0, 'weekday');                                                                              // 1271
    addFormatToken('E', 0, 0, 'isoWeekday');                                                                           // 1272
                                                                                                                       // 1273
    // ALIASES                                                                                                         // 1274
                                                                                                                       // 1275
    addUnitAlias('day', 'd');                                                                                          // 1276
    addUnitAlias('weekday', 'e');                                                                                      // 1277
    addUnitAlias('isoWeekday', 'E');                                                                                   // 1278
                                                                                                                       // 1279
    // PRIORITY                                                                                                        // 1280
    addUnitPriority('day', 11);                                                                                        // 1281
    addUnitPriority('weekday', 11);                                                                                    // 1282
    addUnitPriority('isoWeekday', 11);                                                                                 // 1283
                                                                                                                       // 1284
    // PARSING                                                                                                         // 1285
                                                                                                                       // 1286
    addRegexToken('d',    match1to2);                                                                                  // 1287
    addRegexToken('e',    match1to2);                                                                                  // 1288
    addRegexToken('E',    match1to2);                                                                                  // 1289
    addRegexToken('dd',   function (isStrict, locale) {                                                                // 1290
        return locale.weekdaysMinRegex(isStrict);                                                                      // 1291
    });                                                                                                                // 1292
    addRegexToken('ddd',   function (isStrict, locale) {                                                               // 1293
        return locale.weekdaysShortRegex(isStrict);                                                                    // 1294
    });                                                                                                                // 1295
    addRegexToken('dddd',   function (isStrict, locale) {                                                              // 1296
        return locale.weekdaysRegex(isStrict);                                                                         // 1297
    });                                                                                                                // 1298
                                                                                                                       // 1299
    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {                                   // 1300
        var weekday = config._locale.weekdaysParse(input, token, config._strict);                                      // 1301
        // if we didn't get a weekday name, mark the date as invalid                                                   // 1302
        if (weekday != null) {                                                                                         // 1303
            week.d = weekday;                                                                                          // 1304
        } else {                                                                                                       // 1305
            getParsingFlags(config).invalidWeekday = input;                                                            // 1306
        }                                                                                                              // 1307
    });                                                                                                                // 1308
                                                                                                                       // 1309
    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {                                         // 1310
        week[token] = toInt(input);                                                                                    // 1311
    });                                                                                                                // 1312
                                                                                                                       // 1313
    // HELPERS                                                                                                         // 1314
                                                                                                                       // 1315
    function parseWeekday(input, locale) {                                                                             // 1316
        if (typeof input !== 'string') {                                                                               // 1317
            return input;                                                                                              // 1318
        }                                                                                                              // 1319
                                                                                                                       // 1320
        if (!isNaN(input)) {                                                                                           // 1321
            return parseInt(input, 10);                                                                                // 1322
        }                                                                                                              // 1323
                                                                                                                       // 1324
        input = locale.weekdaysParse(input);                                                                           // 1325
        if (typeof input === 'number') {                                                                               // 1326
            return input;                                                                                              // 1327
        }                                                                                                              // 1328
                                                                                                                       // 1329
        return null;                                                                                                   // 1330
    }                                                                                                                  // 1331
                                                                                                                       // 1332
    function parseIsoWeekday(input, locale) {                                                                          // 1333
        if (typeof input === 'string') {                                                                               // 1334
            return locale.weekdaysParse(input) % 7 || 7;                                                               // 1335
        }                                                                                                              // 1336
        return isNaN(input) ? null : input;                                                                            // 1337
    }                                                                                                                  // 1338
                                                                                                                       // 1339
    // LOCALES                                                                                                         // 1340
                                                                                                                       // 1341
    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');                 // 1342
    function localeWeekdays (m, format) {                                                                              // 1343
        if (!m) {                                                                                                      // 1344
            return this._weekdays;                                                                                     // 1345
        }                                                                                                              // 1346
        return isArray(this._weekdays) ? this._weekdays[m.day()] :                                                     // 1347
            this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];                   // 1348
    }                                                                                                                  // 1349
                                                                                                                       // 1350
    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');                                         // 1351
    function localeWeekdaysShort (m) {                                                                                 // 1352
        return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;                                               // 1353
    }                                                                                                                  // 1354
                                                                                                                       // 1355
    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');                                                  // 1356
    function localeWeekdaysMin (m) {                                                                                   // 1357
        return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;                                                   // 1358
    }                                                                                                                  // 1359
                                                                                                                       // 1360
    function day_of_week__handleStrictParse(weekdayName, format, strict) {                                             // 1361
        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();                                                         // 1362
        if (!this._weekdaysParse) {                                                                                    // 1363
            this._weekdaysParse = [];                                                                                  // 1364
            this._shortWeekdaysParse = [];                                                                             // 1365
            this._minWeekdaysParse = [];                                                                               // 1366
                                                                                                                       // 1367
            for (i = 0; i < 7; ++i) {                                                                                  // 1368
                mom = create_utc__createUTC([2000, 1]).day(i);                                                         // 1369
                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();                             // 1370
                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();                         // 1371
                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();                                   // 1372
            }                                                                                                          // 1373
        }                                                                                                              // 1374
                                                                                                                       // 1375
        if (strict) {                                                                                                  // 1376
            if (format === 'dddd') {                                                                                   // 1377
                ii = indexOf.call(this._weekdaysParse, llc);                                                           // 1378
                return ii !== -1 ? ii : null;                                                                          // 1379
            } else if (format === 'ddd') {                                                                             // 1380
                ii = indexOf.call(this._shortWeekdaysParse, llc);                                                      // 1381
                return ii !== -1 ? ii : null;                                                                          // 1382
            } else {                                                                                                   // 1383
                ii = indexOf.call(this._minWeekdaysParse, llc);                                                        // 1384
                return ii !== -1 ? ii : null;                                                                          // 1385
            }                                                                                                          // 1386
        } else {                                                                                                       // 1387
            if (format === 'dddd') {                                                                                   // 1388
                ii = indexOf.call(this._weekdaysParse, llc);                                                           // 1389
                if (ii !== -1) {                                                                                       // 1390
                    return ii;                                                                                         // 1391
                }                                                                                                      // 1392
                ii = indexOf.call(this._shortWeekdaysParse, llc);                                                      // 1393
                if (ii !== -1) {                                                                                       // 1394
                    return ii;                                                                                         // 1395
                }                                                                                                      // 1396
                ii = indexOf.call(this._minWeekdaysParse, llc);                                                        // 1397
                return ii !== -1 ? ii : null;                                                                          // 1398
            } else if (format === 'ddd') {                                                                             // 1399
                ii = indexOf.call(this._shortWeekdaysParse, llc);                                                      // 1400
                if (ii !== -1) {                                                                                       // 1401
                    return ii;                                                                                         // 1402
                }                                                                                                      // 1403
                ii = indexOf.call(this._weekdaysParse, llc);                                                           // 1404
                if (ii !== -1) {                                                                                       // 1405
                    return ii;                                                                                         // 1406
                }                                                                                                      // 1407
                ii = indexOf.call(this._minWeekdaysParse, llc);                                                        // 1408
                return ii !== -1 ? ii : null;                                                                          // 1409
            } else {                                                                                                   // 1410
                ii = indexOf.call(this._minWeekdaysParse, llc);                                                        // 1411
                if (ii !== -1) {                                                                                       // 1412
                    return ii;                                                                                         // 1413
                }                                                                                                      // 1414
                ii = indexOf.call(this._weekdaysParse, llc);                                                           // 1415
                if (ii !== -1) {                                                                                       // 1416
                    return ii;                                                                                         // 1417
                }                                                                                                      // 1418
                ii = indexOf.call(this._shortWeekdaysParse, llc);                                                      // 1419
                return ii !== -1 ? ii : null;                                                                          // 1420
            }                                                                                                          // 1421
        }                                                                                                              // 1422
    }                                                                                                                  // 1423
                                                                                                                       // 1424
    function localeWeekdaysParse (weekdayName, format, strict) {                                                       // 1425
        var i, mom, regex;                                                                                             // 1426
                                                                                                                       // 1427
        if (this._weekdaysParseExact) {                                                                                // 1428
            return day_of_week__handleStrictParse.call(this, weekdayName, format, strict);                             // 1429
        }                                                                                                              // 1430
                                                                                                                       // 1431
        if (!this._weekdaysParse) {                                                                                    // 1432
            this._weekdaysParse = [];                                                                                  // 1433
            this._minWeekdaysParse = [];                                                                               // 1434
            this._shortWeekdaysParse = [];                                                                             // 1435
            this._fullWeekdaysParse = [];                                                                              // 1436
        }                                                                                                              // 1437
                                                                                                                       // 1438
        for (i = 0; i < 7; i++) {                                                                                      // 1439
            // make the regex if we don't have it already                                                              // 1440
                                                                                                                       // 1441
            mom = create_utc__createUTC([2000, 1]).day(i);                                                             // 1442
            if (strict && !this._fullWeekdaysParse[i]) {                                                               // 1443
                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');  // 1444
                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
            }                                                                                                          // 1447
            if (!this._weekdaysParse[i]) {                                                                             // 1448
                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');                                      // 1450
            }                                                                                                          // 1451
            // test the regex                                                                                          // 1452
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {                         // 1453
                return i;                                                                                              // 1454
            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {                  // 1455
                return i;                                                                                              // 1456
            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {                     // 1457
                return i;                                                                                              // 1458
            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {                                          // 1459
                return i;                                                                                              // 1460
            }                                                                                                          // 1461
        }                                                                                                              // 1462
    }                                                                                                                  // 1463
                                                                                                                       // 1464
    // MOMENTS                                                                                                         // 1465
                                                                                                                       // 1466
    function getSetDayOfWeek (input) {                                                                                 // 1467
        if (!this.isValid()) {                                                                                         // 1468
            return input != null ? this : NaN;                                                                         // 1469
        }                                                                                                              // 1470
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();                                                // 1471
        if (input != null) {                                                                                           // 1472
            input = parseWeekday(input, this.localeData());                                                            // 1473
            return this.add(input - day, 'd');                                                                         // 1474
        } else {                                                                                                       // 1475
            return day;                                                                                                // 1476
        }                                                                                                              // 1477
    }                                                                                                                  // 1478
                                                                                                                       // 1479
    function getSetLocaleDayOfWeek (input) {                                                                           // 1480
        if (!this.isValid()) {                                                                                         // 1481
            return input != null ? this : NaN;                                                                         // 1482
        }                                                                                                              // 1483
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;                                              // 1484
        return input == null ? weekday : this.add(input - weekday, 'd');                                               // 1485
    }                                                                                                                  // 1486
                                                                                                                       // 1487
    function getSetISODayOfWeek (input) {                                                                              // 1488
        if (!this.isValid()) {                                                                                         // 1489
            return input != null ? this : NaN;                                                                         // 1490
        }                                                                                                              // 1491
                                                                                                                       // 1492
        // behaves the same as moment#day except                                                                       // 1493
        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)                                              // 1494
        // as a setter, sunday should belong to the previous week.                                                     // 1495
                                                                                                                       // 1496
        if (input != null) {                                                                                           // 1497
            var weekday = parseIsoWeekday(input, this.localeData());                                                   // 1498
            return this.day(this.day() % 7 ? weekday : weekday - 7);                                                   // 1499
        } else {                                                                                                       // 1500
            return this.day() || 7;                                                                                    // 1501
        }                                                                                                              // 1502
    }                                                                                                                  // 1503
                                                                                                                       // 1504
    var defaultWeekdaysRegex = matchWord;                                                                              // 1505
    function weekdaysRegex (isStrict) {                                                                                // 1506
        if (this._weekdaysParseExact) {                                                                                // 1507
            if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                 // 1508
                computeWeekdaysParse.call(this);                                                                       // 1509
            }                                                                                                          // 1510
            if (isStrict) {                                                                                            // 1511
                return this._weekdaysStrictRegex;                                                                      // 1512
            } else {                                                                                                   // 1513
                return this._weekdaysRegex;                                                                            // 1514
            }                                                                                                          // 1515
        } else {                                                                                                       // 1516
            if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                 // 1517
                this._weekdaysRegex = defaultWeekdaysRegex;                                                            // 1518
            }                                                                                                          // 1519
            return this._weekdaysStrictRegex && isStrict ?                                                             // 1520
                this._weekdaysStrictRegex : this._weekdaysRegex;                                                       // 1521
        }                                                                                                              // 1522
    }                                                                                                                  // 1523
                                                                                                                       // 1524
    var defaultWeekdaysShortRegex = matchWord;                                                                         // 1525
    function weekdaysShortRegex (isStrict) {                                                                           // 1526
        if (this._weekdaysParseExact) {                                                                                // 1527
            if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                 // 1528
                computeWeekdaysParse.call(this);                                                                       // 1529
            }                                                                                                          // 1530
            if (isStrict) {                                                                                            // 1531
                return this._weekdaysShortStrictRegex;                                                                 // 1532
            } else {                                                                                                   // 1533
                return this._weekdaysShortRegex;                                                                       // 1534
            }                                                                                                          // 1535
        } else {                                                                                                       // 1536
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {                                                            // 1537
                this._weekdaysShortRegex = defaultWeekdaysShortRegex;                                                  // 1538
            }                                                                                                          // 1539
            return this._weekdaysShortStrictRegex && isStrict ?                                                        // 1540
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;                                             // 1541
        }                                                                                                              // 1542
    }                                                                                                                  // 1543
                                                                                                                       // 1544
    var defaultWeekdaysMinRegex = matchWord;                                                                           // 1545
    function weekdaysMinRegex (isStrict) {                                                                             // 1546
        if (this._weekdaysParseExact) {                                                                                // 1547
            if (!hasOwnProp(this, '_weekdaysRegex')) {                                                                 // 1548
                computeWeekdaysParse.call(this);                                                                       // 1549
            }                                                                                                          // 1550
            if (isStrict) {                                                                                            // 1551
                return this._weekdaysMinStrictRegex;                                                                   // 1552
            } else {                                                                                                   // 1553
                return this._weekdaysMinRegex;                                                                         // 1554
            }                                                                                                          // 1555
        } else {                                                                                                       // 1556
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {                                                              // 1557
                this._weekdaysMinRegex = defaultWeekdaysMinRegex;                                                      // 1558
            }                                                                                                          // 1559
            return this._weekdaysMinStrictRegex && isStrict ?                                                          // 1560
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;                                                 // 1561
        }                                                                                                              // 1562
    }                                                                                                                  // 1563
                                                                                                                       // 1564
                                                                                                                       // 1565
    function computeWeekdaysParse () {                                                                                 // 1566
        function cmpLenRev(a, b) {                                                                                     // 1567
            return b.length - a.length;                                                                                // 1568
        }                                                                                                              // 1569
                                                                                                                       // 1570
        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],                                       // 1571
            i, mom, minp, shortp, longp;                                                                               // 1572
        for (i = 0; i < 7; i++) {                                                                                      // 1573
            // make the regex if we don't have it already                                                              // 1574
            mom = create_utc__createUTC([2000, 1]).day(i);                                                             // 1575
            minp = this.weekdaysMin(mom, '');                                                                          // 1576
            shortp = this.weekdaysShort(mom, '');                                                                      // 1577
            longp = this.weekdays(mom, '');                                                                            // 1578
            minPieces.push(minp);                                                                                      // 1579
            shortPieces.push(shortp);                                                                                  // 1580
            longPieces.push(longp);                                                                                    // 1581
            mixedPieces.push(minp);                                                                                    // 1582
            mixedPieces.push(shortp);                                                                                  // 1583
            mixedPieces.push(longp);                                                                                   // 1584
        }                                                                                                              // 1585
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it                                       // 1586
        // will match the longer piece.                                                                                // 1587
        minPieces.sort(cmpLenRev);                                                                                     // 1588
        shortPieces.sort(cmpLenRev);                                                                                   // 1589
        longPieces.sort(cmpLenRev);                                                                                    // 1590
        mixedPieces.sort(cmpLenRev);                                                                                   // 1591
        for (i = 0; i < 7; i++) {                                                                                      // 1592
            shortPieces[i] = regexEscape(shortPieces[i]);                                                              // 1593
            longPieces[i] = regexEscape(longPieces[i]);                                                                // 1594
            mixedPieces[i] = regexEscape(mixedPieces[i]);                                                              // 1595
        }                                                                                                              // 1596
                                                                                                                       // 1597
        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');                                     // 1598
        this._weekdaysShortRegex = this._weekdaysRegex;                                                                // 1599
        this._weekdaysMinRegex = this._weekdaysRegex;                                                                  // 1600
                                                                                                                       // 1601
        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');                                // 1602
        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');                          // 1603
        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');                              // 1604
    }                                                                                                                  // 1605
                                                                                                                       // 1606
    // FORMATTING                                                                                                      // 1607
                                                                                                                       // 1608
    function hFormat() {                                                                                               // 1609
        return this.hours() % 12 || 12;                                                                                // 1610
    }                                                                                                                  // 1611
                                                                                                                       // 1612
    function kFormat() {                                                                                               // 1613
        return this.hours() || 24;                                                                                     // 1614
    }                                                                                                                  // 1615
                                                                                                                       // 1616
    addFormatToken('H', ['HH', 2], 0, 'hour');                                                                         // 1617
    addFormatToken('h', ['hh', 2], 0, hFormat);                                                                        // 1618
    addFormatToken('k', ['kk', 2], 0, kFormat);                                                                        // 1619
                                                                                                                       // 1620
    addFormatToken('hmm', 0, 0, function () {                                                                          // 1621
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);                                                 // 1622
    });                                                                                                                // 1623
                                                                                                                       // 1624
    addFormatToken('hmmss', 0, 0, function () {                                                                        // 1625
        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +                                                // 1626
            zeroFill(this.seconds(), 2);                                                                               // 1627
    });                                                                                                                // 1628
                                                                                                                       // 1629
    addFormatToken('Hmm', 0, 0, function () {                                                                          // 1630
        return '' + this.hours() + zeroFill(this.minutes(), 2);                                                        // 1631
    });                                                                                                                // 1632
                                                                                                                       // 1633
    addFormatToken('Hmmss', 0, 0, function () {                                                                        // 1634
        return '' + this.hours() + zeroFill(this.minutes(), 2) +                                                       // 1635
            zeroFill(this.seconds(), 2);                                                                               // 1636
    });                                                                                                                // 1637
                                                                                                                       // 1638
    function meridiem (token, lowercase) {                                                                             // 1639
        addFormatToken(token, 0, 0, function () {                                                                      // 1640
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);                                // 1641
        });                                                                                                            // 1642
    }                                                                                                                  // 1643
                                                                                                                       // 1644
    meridiem('a', true);                                                                                               // 1645
    meridiem('A', false);                                                                                              // 1646
                                                                                                                       // 1647
    // ALIASES                                                                                                         // 1648
                                                                                                                       // 1649
    addUnitAlias('hour', 'h');                                                                                         // 1650
                                                                                                                       // 1651
    // PRIORITY                                                                                                        // 1652
    addUnitPriority('hour', 13);                                                                                       // 1653
                                                                                                                       // 1654
    // PARSING                                                                                                         // 1655
                                                                                                                       // 1656
    function matchMeridiem (isStrict, locale) {                                                                        // 1657
        return locale._meridiemParse;                                                                                  // 1658
    }                                                                                                                  // 1659
                                                                                                                       // 1660
    addRegexToken('a',  matchMeridiem);                                                                                // 1661
    addRegexToken('A',  matchMeridiem);                                                                                // 1662
    addRegexToken('H',  match1to2);                                                                                    // 1663
    addRegexToken('h',  match1to2);                                                                                    // 1664
    addRegexToken('HH', match1to2, match2);                                                                            // 1665
    addRegexToken('hh', match1to2, match2);                                                                            // 1666
                                                                                                                       // 1667
    addRegexToken('hmm', match3to4);                                                                                   // 1668
    addRegexToken('hmmss', match5to6);                                                                                 // 1669
    addRegexToken('Hmm', match3to4);                                                                                   // 1670
    addRegexToken('Hmmss', match5to6);                                                                                 // 1671
                                                                                                                       // 1672
    addParseToken(['H', 'HH'], HOUR);                                                                                  // 1673
    addParseToken(['a', 'A'], function (input, array, config) {                                                        // 1674
        config._isPm = config._locale.isPM(input);                                                                     // 1675
        config._meridiem = input;                                                                                      // 1676
    });                                                                                                                // 1677
    addParseToken(['h', 'hh'], function (input, array, config) {                                                       // 1678
        array[HOUR] = toInt(input);                                                                                    // 1679
        getParsingFlags(config).bigHour = true;                                                                        // 1680
    });                                                                                                                // 1681
    addParseToken('hmm', function (input, array, config) {                                                             // 1682
        var pos = input.length - 2;                                                                                    // 1683
        array[HOUR] = toInt(input.substr(0, pos));                                                                     // 1684
        array[MINUTE] = toInt(input.substr(pos));                                                                      // 1685
        getParsingFlags(config).bigHour = true;                                                                        // 1686
    });                                                                                                                // 1687
    addParseToken('hmmss', function (input, array, config) {                                                           // 1688
        var pos1 = input.length - 4;                                                                                   // 1689
        var pos2 = input.length - 2;                                                                                   // 1690
        array[HOUR] = toInt(input.substr(0, pos1));                                                                    // 1691
        array[MINUTE] = toInt(input.substr(pos1, 2));                                                                  // 1692
        array[SECOND] = toInt(input.substr(pos2));                                                                     // 1693
        getParsingFlags(config).bigHour = true;                                                                        // 1694
    });                                                                                                                // 1695
    addParseToken('Hmm', function (input, array, config) {                                                             // 1696
        var pos = input.length - 2;                                                                                    // 1697
        array[HOUR] = toInt(input.substr(0, pos));                                                                     // 1698
        array[MINUTE] = toInt(input.substr(pos));                                                                      // 1699
    });                                                                                                                // 1700
    addParseToken('Hmmss', function (input, array, config) {                                                           // 1701
        var pos1 = input.length - 4;                                                                                   // 1702
        var pos2 = input.length - 2;                                                                                   // 1703
        array[HOUR] = toInt(input.substr(0, pos1));                                                                    // 1704
        array[MINUTE] = toInt(input.substr(pos1, 2));                                                                  // 1705
        array[SECOND] = toInt(input.substr(pos2));                                                                     // 1706
    });                                                                                                                // 1707
                                                                                                                       // 1708
    // LOCALES                                                                                                         // 1709
                                                                                                                       // 1710
    function localeIsPM (input) {                                                                                      // 1711
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays                             // 1712
        // Using charAt should be more compatible.                                                                     // 1713
        return ((input + '').toLowerCase().charAt(0) === 'p');                                                         // 1714
    }                                                                                                                  // 1715
                                                                                                                       // 1716
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;                                                                  // 1717
    function localeMeridiem (hours, minutes, isLower) {                                                                // 1718
        if (hours > 11) {                                                                                              // 1719
            return isLower ? 'pm' : 'PM';                                                                              // 1720
        } else {                                                                                                       // 1721
            return isLower ? 'am' : 'AM';                                                                              // 1722
        }                                                                                                              // 1723
    }                                                                                                                  // 1724
                                                                                                                       // 1725
                                                                                                                       // 1726
    // MOMENTS                                                                                                         // 1727
                                                                                                                       // 1728
    // Setting the hour should keep the time, because the user explicitly                                              // 1729
    // specified which hour he wants. So trying to maintain the same hour (in                                          // 1730
    // a new timezone) makes sense. Adding/subtracting hours does not follow                                           // 1731
    // this rule.                                                                                                      // 1732
    var getSetHour = makeGetSet('Hours', true);                                                                        // 1733
                                                                                                                       // 1734
    var baseConfig = {                                                                                                 // 1735
        calendar: defaultCalendar,                                                                                     // 1736
        longDateFormat: defaultLongDateFormat,                                                                         // 1737
        invalidDate: defaultInvalidDate,                                                                               // 1738
        ordinal: defaultOrdinal,                                                                                       // 1739
        ordinalParse: defaultOrdinalParse,                                                                             // 1740
        relativeTime: defaultRelativeTime,                                                                             // 1741
                                                                                                                       // 1742
        months: defaultLocaleMonths,                                                                                   // 1743
        monthsShort: defaultLocaleMonthsShort,                                                                         // 1744
                                                                                                                       // 1745
        week: defaultLocaleWeek,                                                                                       // 1746
                                                                                                                       // 1747
        weekdays: defaultLocaleWeekdays,                                                                               // 1748
        weekdaysMin: defaultLocaleWeekdaysMin,                                                                         // 1749
        weekdaysShort: defaultLocaleWeekdaysShort,                                                                     // 1750
                                                                                                                       // 1751
        meridiemParse: defaultLocaleMeridiemParse                                                                      // 1752
    };                                                                                                                 // 1753
                                                                                                                       // 1754
    // internal storage for locale config files                                                                        // 1755
    var locales = {};                                                                                                  // 1756
    var globalLocale;                                                                                                  // 1757
                                                                                                                       // 1758
    function normalizeLocale(key) {                                                                                    // 1759
        return key ? key.toLowerCase().replace('_', '-') : key;                                                        // 1760
    }                                                                                                                  // 1761
                                                                                                                       // 1762
    // pick the locale from the array                                                                                  // 1763
    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each                       // 1764
    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
    function chooseLocale(names) {                                                                                     // 1766
        var i = 0, j, next, locale, split;                                                                             // 1767
                                                                                                                       // 1768
        while (i < names.length) {                                                                                     // 1769
            split = normalizeLocale(names[i]).split('-');                                                              // 1770
            j = split.length;                                                                                          // 1771
            next = normalizeLocale(names[i + 1]);                                                                      // 1772
            next = next ? next.split('-') : null;                                                                      // 1773
            while (j > 0) {                                                                                            // 1774
                locale = loadLocale(split.slice(0, j).join('-'));                                                      // 1775
                if (locale) {                                                                                          // 1776
                    return locale;                                                                                     // 1777
                }                                                                                                      // 1778
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {                           // 1779
                    //the next array item is better than a shallower substring of this one                             // 1780
                    break;                                                                                             // 1781
                }                                                                                                      // 1782
                j--;                                                                                                   // 1783
            }                                                                                                          // 1784
            i++;                                                                                                       // 1785
        }                                                                                                              // 1786
        return null;                                                                                                   // 1787
    }                                                                                                                  // 1788
                                                                                                                       // 1789
    function loadLocale(name) {                                                                                        // 1790
        var oldLocale = null;                                                                                          // 1791
        // TODO: Find a better way to register and load all the locales in Node                                        // 1792
        if (!locales[name] && (typeof module !== 'undefined') &&                                                       // 1793
                module && module.exports) {                                                                            // 1794
            try {                                                                                                      // 1795
                oldLocale = globalLocale._abbr;                                                                        // 1796
                require('./locale/' + name);                                                                           // 1797
                // because defineLocale currently also sets the global locale, we                                      // 1798
                // want to undo that for lazy loaded locales                                                           // 1799
                locale_locales__getSetGlobalLocale(oldLocale);                                                         // 1800
            } catch (e) { }                                                                                            // 1801
        }                                                                                                              // 1802
        return locales[name];                                                                                          // 1803
    }                                                                                                                  // 1804
                                                                                                                       // 1805
    // This function will load locale and then set the global locale.  If                                              // 1806
    // no arguments are passed in, it will simply return the current global                                            // 1807
    // locale key.                                                                                                     // 1808
    function locale_locales__getSetGlobalLocale (key, values) {                                                        // 1809
        var data;                                                                                                      // 1810
        if (key) {                                                                                                     // 1811
            if (isUndefined(values)) {                                                                                 // 1812
                data = locale_locales__getLocale(key);                                                                 // 1813
            }                                                                                                          // 1814
            else {                                                                                                     // 1815
                data = defineLocale(key, values);                                                                      // 1816
            }                                                                                                          // 1817
                                                                                                                       // 1818
            if (data) {                                                                                                // 1819
                // moment.duration._locale = moment._locale = data;                                                    // 1820
                globalLocale = data;                                                                                   // 1821
            }                                                                                                          // 1822
        }                                                                                                              // 1823
                                                                                                                       // 1824
        return globalLocale._abbr;                                                                                     // 1825
    }                                                                                                                  // 1826
                                                                                                                       // 1827
    function defineLocale (name, config) {                                                                             // 1828
        if (config !== null) {                                                                                         // 1829
            var parentConfig = baseConfig;                                                                             // 1830
            config.abbr = name;                                                                                        // 1831
            if (locales[name] != null) {                                                                               // 1832
                deprecateSimple('defineLocaleOverride',                                                                // 1833
                        'use moment.updateLocale(localeName, config) to change ' +                                     // 1834
                        'an existing locale. moment.defineLocale(localeName, ' +                                       // 1835
                        'config) should only be used for creating a new locale ' +                                     // 1836
                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');                    // 1837
                parentConfig = locales[name]._config;                                                                  // 1838
            } else if (config.parentLocale != null) {                                                                  // 1839
                if (locales[config.parentLocale] != null) {                                                            // 1840
                    parentConfig = locales[config.parentLocale]._config;                                               // 1841
                } else {                                                                                               // 1842
                    // treat as if there is no base config                                                             // 1843
                    deprecateSimple('parentLocaleUndefined',                                                           // 1844
                            'specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/');
                }                                                                                                      // 1846
            }                                                                                                          // 1847
            locales[name] = new Locale(mergeConfigs(parentConfig, config));                                            // 1848
                                                                                                                       // 1849
            // backwards compat for now: also set the locale                                                           // 1850
            locale_locales__getSetGlobalLocale(name);                                                                  // 1851
                                                                                                                       // 1852
            return locales[name];                                                                                      // 1853
        } else {                                                                                                       // 1854
            // useful for testing                                                                                      // 1855
            delete locales[name];                                                                                      // 1856
            return null;                                                                                               // 1857
        }                                                                                                              // 1858
    }                                                                                                                  // 1859
                                                                                                                       // 1860
    function updateLocale(name, config) {                                                                              // 1861
        if (config != null) {                                                                                          // 1862
            var locale, parentConfig = baseConfig;                                                                     // 1863
            // MERGE                                                                                                   // 1864
            if (locales[name] != null) {                                                                               // 1865
                parentConfig = locales[name]._config;                                                                  // 1866
            }                                                                                                          // 1867
            config = mergeConfigs(parentConfig, config);                                                               // 1868
            locale = new Locale(config);                                                                               // 1869
            locale.parentLocale = locales[name];                                                                       // 1870
            locales[name] = locale;                                                                                    // 1871
                                                                                                                       // 1872
            // backwards compat for now: also set the locale                                                           // 1873
            locale_locales__getSetGlobalLocale(name);                                                                  // 1874
        } else {                                                                                                       // 1875
            // pass null for config to unupdate, useful for tests                                                      // 1876
            if (locales[name] != null) {                                                                               // 1877
                if (locales[name].parentLocale != null) {                                                              // 1878
                    locales[name] = locales[name].parentLocale;                                                        // 1879
                } else if (locales[name] != null) {                                                                    // 1880
                    delete locales[name];                                                                              // 1881
                }                                                                                                      // 1882
            }                                                                                                          // 1883
        }                                                                                                              // 1884
        return locales[name];                                                                                          // 1885
    }                                                                                                                  // 1886
                                                                                                                       // 1887
    // returns locale data                                                                                             // 1888
    function locale_locales__getLocale (key) {                                                                         // 1889
        var locale;                                                                                                    // 1890
                                                                                                                       // 1891
        if (key && key._locale && key._locale._abbr) {                                                                 // 1892
            key = key._locale._abbr;                                                                                   // 1893
        }                                                                                                              // 1894
                                                                                                                       // 1895
        if (!key) {                                                                                                    // 1896
            return globalLocale;                                                                                       // 1897
        }                                                                                                              // 1898
                                                                                                                       // 1899
        if (!isArray(key)) {                                                                                           // 1900
            //short-circuit everything else                                                                            // 1901
            locale = loadLocale(key);                                                                                  // 1902
            if (locale) {                                                                                              // 1903
                return locale;                                                                                         // 1904
            }                                                                                                          // 1905
            key = [key];                                                                                               // 1906
        }                                                                                                              // 1907
                                                                                                                       // 1908
        return chooseLocale(key);                                                                                      // 1909
    }                                                                                                                  // 1910
                                                                                                                       // 1911
    function locale_locales__listLocales() {                                                                           // 1912
        return keys(locales);                                                                                          // 1913
    }                                                                                                                  // 1914
                                                                                                                       // 1915
    function checkOverflow (m) {                                                                                       // 1916
        var overflow;                                                                                                  // 1917
        var a = m._a;                                                                                                  // 1918
                                                                                                                       // 1919
        if (a && getParsingFlags(m).overflow === -2) {                                                                 // 1920
            overflow =                                                                                                 // 1921
                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :                                                   // 1922
                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :                         // 1923
                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :                                                  // 1925
                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :                                                  // 1926
                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :                                             // 1927
                -1;                                                                                                    // 1928
                                                                                                                       // 1929
            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {                       // 1930
                overflow = DATE;                                                                                       // 1931
            }                                                                                                          // 1932
            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {                                                // 1933
                overflow = WEEK;                                                                                       // 1934
            }                                                                                                          // 1935
            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {                                              // 1936
                overflow = WEEKDAY;                                                                                    // 1937
            }                                                                                                          // 1938
                                                                                                                       // 1939
            getParsingFlags(m).overflow = overflow;                                                                    // 1940
        }                                                                                                              // 1941
                                                                                                                       // 1942
        return m;                                                                                                      // 1943
    }                                                                                                                  // 1944
                                                                                                                       // 1945
    // iso 8601 regex                                                                                                  // 1946
    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)       // 1947
    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
                                                                                                                       // 1950
    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;                                                                             // 1951
                                                                                                                       // 1952
    var isoDates = [                                                                                                   // 1953
        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],                                                                       // 1954
        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],                                                                             // 1955
        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],                                                                            // 1956
        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],                                                                          // 1957
        ['YYYY-DDD', /\d{4}-\d{3}/],                                                                                   // 1958
        ['YYYY-MM', /\d{4}-\d\d/, false],                                                                              // 1959
        ['YYYYYYMMDD', /[+-]\d{10}/],                                                                                  // 1960
        ['YYYYMMDD', /\d{8}/],                                                                                         // 1961
        // YYYYMM is NOT allowed by the standard                                                                       // 1962
        ['GGGG[W]WWE', /\d{4}W\d{3}/],                                                                                 // 1963
        ['GGGG[W]WW', /\d{4}W\d{2}/, false],                                                                           // 1964
        ['YYYYDDD', /\d{7}/]                                                                                           // 1965
    ];                                                                                                                 // 1966
                                                                                                                       // 1967
    // iso time formats and regexes                                                                                    // 1968
    var isoTimes = [                                                                                                   // 1969
        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],                                                                      // 1970
        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],                                                                       // 1971
        ['HH:mm:ss', /\d\d:\d\d:\d\d/],                                                                                // 1972
        ['HH:mm', /\d\d:\d\d/],                                                                                        // 1973
        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],                                                                          // 1974
        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],                                                                           // 1975
        ['HHmmss', /\d\d\d\d\d\d/],                                                                                    // 1976
        ['HHmm', /\d\d\d\d/],                                                                                          // 1977
        ['HH', /\d\d/]                                                                                                 // 1978
    ];                                                                                                                 // 1979
                                                                                                                       // 1980
    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;                                                                       // 1981
                                                                                                                       // 1982
    // date from iso format                                                                                            // 1983
    function configFromISO(config) {                                                                                   // 1984
        var i, l,                                                                                                      // 1985
            string = config._i,                                                                                        // 1986
            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),                                       // 1987
            allowTime, dateFormat, timeFormat, tzFormat;                                                               // 1988
                                                                                                                       // 1989
        if (match) {                                                                                                   // 1990
            getParsingFlags(config).iso = true;                                                                        // 1991
                                                                                                                       // 1992
            for (i = 0, l = isoDates.length; i < l; i++) {                                                             // 1993
                if (isoDates[i][1].exec(match[1])) {                                                                   // 1994
                    dateFormat = isoDates[i][0];                                                                       // 1995
                    allowTime = isoDates[i][2] !== false;                                                              // 1996
                    break;                                                                                             // 1997
                }                                                                                                      // 1998
            }                                                                                                          // 1999
            if (dateFormat == null) {                                                                                  // 2000
                config._isValid = false;                                                                               // 2001
                return;                                                                                                // 2002
            }                                                                                                          // 2003
            if (match[3]) {                                                                                            // 2004
                for (i = 0, l = isoTimes.length; i < l; i++) {                                                         // 2005
                    if (isoTimes[i][1].exec(match[3])) {                                                               // 2006
                        // match[2] should be 'T' or space                                                             // 2007
                        timeFormat = (match[2] || ' ') + isoTimes[i][0];                                               // 2008
                        break;                                                                                         // 2009
                    }                                                                                                  // 2010
                }                                                                                                      // 2011
                if (timeFormat == null) {                                                                              // 2012
                    config._isValid = false;                                                                           // 2013
                    return;                                                                                            // 2014
                }                                                                                                      // 2015
            }                                                                                                          // 2016
            if (!allowTime && timeFormat != null) {                                                                    // 2017
                config._isValid = false;                                                                               // 2018
                return;                                                                                                // 2019
            }                                                                                                          // 2020
            if (match[4]) {                                                                                            // 2021
                if (tzRegex.exec(match[4])) {                                                                          // 2022
                    tzFormat = 'Z';                                                                                    // 2023
                } else {                                                                                               // 2024
                    config._isValid = false;                                                                           // 2025
                    return;                                                                                            // 2026
                }                                                                                                      // 2027
            }                                                                                                          // 2028
            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');                                            // 2029
            configFromStringAndFormat(config);                                                                         // 2030
        } else {                                                                                                       // 2031
            config._isValid = false;                                                                                   // 2032
        }                                                                                                              // 2033
    }                                                                                                                  // 2034
                                                                                                                       // 2035
    // date from iso format or fallback                                                                                // 2036
    function configFromString(config) {                                                                                // 2037
        var matched = aspNetJsonRegex.exec(config._i);                                                                 // 2038
                                                                                                                       // 2039
        if (matched !== null) {                                                                                        // 2040
            config._d = new Date(+matched[1]);                                                                         // 2041
            return;                                                                                                    // 2042
        }                                                                                                              // 2043
                                                                                                                       // 2044
        configFromISO(config);                                                                                         // 2045
        if (config._isValid === false) {                                                                               // 2046
            delete config._isValid;                                                                                    // 2047
            utils_hooks__hooks.createFromInputFallback(config);                                                        // 2048
        }                                                                                                              // 2049
    }                                                                                                                  // 2050
                                                                                                                       // 2051
    utils_hooks__hooks.createFromInputFallback = deprecate(                                                            // 2052
        'value provided is not in a recognized ISO format. moment construction falls back to js Date(), ' +            // 2053
        'which is not reliable across all browsers and versions. Non ISO date formats are ' +                          // 2054
        'discouraged and will be removed in an upcoming major release. Please refer to ' +                             // 2055
        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',                                               // 2056
        function (config) {                                                                                            // 2057
            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));                                          // 2058
        }                                                                                                              // 2059
    );                                                                                                                 // 2060
                                                                                                                       // 2061
    // Pick the first defined of two or three arguments.                                                               // 2062
    function defaults(a, b, c) {                                                                                       // 2063
        if (a != null) {                                                                                               // 2064
            return a;                                                                                                  // 2065
        }                                                                                                              // 2066
        if (b != null) {                                                                                               // 2067
            return b;                                                                                                  // 2068
        }                                                                                                              // 2069
        return c;                                                                                                      // 2070
    }                                                                                                                  // 2071
                                                                                                                       // 2072
    function currentDateArray(config) {                                                                                // 2073
        // hooks is actually the exported moment object                                                                // 2074
        var nowValue = new Date(utils_hooks__hooks.now());                                                             // 2075
        if (config._useUTC) {                                                                                          // 2076
            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];                         // 2077
        }                                                                                                              // 2078
        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];                                      // 2079
    }                                                                                                                  // 2080
                                                                                                                       // 2081
    // convert an array to a date.                                                                                     // 2082
    // the array should mirror the parameters below                                                                    // 2083
    // note: all values past the year are optional and will default to the lowest possible value.                      // 2084
    // [year, month, day , hour, minute, second, millisecond]                                                          // 2085
    function configFromArray (config) {                                                                                // 2086
        var i, date, input = [], currentDate, yearToUse;                                                               // 2087
                                                                                                                       // 2088
        if (config._d) {                                                                                               // 2089
            return;                                                                                                    // 2090
        }                                                                                                              // 2091
                                                                                                                       // 2092
        currentDate = currentDateArray(config);                                                                        // 2093
                                                                                                                       // 2094
        //compute day of the year from weeks and weekdays                                                              // 2095
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {                                        // 2096
            dayOfYearFromWeekInfo(config);                                                                             // 2097
        }                                                                                                              // 2098
                                                                                                                       // 2099
        //if the day of the year is set, figure out what it is                                                         // 2100
        if (config._dayOfYear) {                                                                                       // 2101
            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);                                                  // 2102
                                                                                                                       // 2103
            if (config._dayOfYear > daysInYear(yearToUse)) {                                                           // 2104
                getParsingFlags(config)._overflowDayOfYear = true;                                                     // 2105
            }                                                                                                          // 2106
                                                                                                                       // 2107
            date = createUTCDate(yearToUse, 0, config._dayOfYear);                                                     // 2108
            config._a[MONTH] = date.getUTCMonth();                                                                     // 2109
            config._a[DATE] = date.getUTCDate();                                                                       // 2110
        }                                                                                                              // 2111
                                                                                                                       // 2112
        // Default to current date.                                                                                    // 2113
        // * if no year, month, day of month are given, default to today                                               // 2114
        // * if day of month is given, default month and year                                                          // 2115
        // * if month is given, default only year                                                                      // 2116
        // * if year is given, don't default anything                                                                  // 2117
        for (i = 0; i < 3 && config._a[i] == null; ++i) {                                                              // 2118
            config._a[i] = input[i] = currentDate[i];                                                                  // 2119
        }                                                                                                              // 2120
                                                                                                                       // 2121
        // Zero out whatever was not defaulted, including time                                                         // 2122
        for (; i < 7; i++) {                                                                                           // 2123
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];                       // 2124
        }                                                                                                              // 2125
                                                                                                                       // 2126
        // Check for 24:00:00.000                                                                                      // 2127
        if (config._a[HOUR] === 24 &&                                                                                  // 2128
                config._a[MINUTE] === 0 &&                                                                             // 2129
                config._a[SECOND] === 0 &&                                                                             // 2130
                config._a[MILLISECOND] === 0) {                                                                        // 2131
            config._nextDay = true;                                                                                    // 2132
            config._a[HOUR] = 0;                                                                                       // 2133
        }                                                                                                              // 2134
                                                                                                                       // 2135
        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);                                  // 2136
        // Apply timezone offset from input. The actual utcOffset can be changed                                       // 2137
        // with parseZone.                                                                                             // 2138
        if (config._tzm != null) {                                                                                     // 2139
            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);                                          // 2140
        }                                                                                                              // 2141
                                                                                                                       // 2142
        if (config._nextDay) {                                                                                         // 2143
            config._a[HOUR] = 24;                                                                                      // 2144
        }                                                                                                              // 2145
    }                                                                                                                  // 2146
                                                                                                                       // 2147
    function dayOfYearFromWeekInfo(config) {                                                                           // 2148
        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;                                               // 2149
                                                                                                                       // 2150
        w = config._w;                                                                                                 // 2151
        if (w.GG != null || w.W != null || w.E != null) {                                                              // 2152
            dow = 1;                                                                                                   // 2153
            doy = 4;                                                                                                   // 2154
                                                                                                                       // 2155
            // TODO: We need to take the current isoWeekYear, but that depends on                                      // 2156
            // how we interpret now (local, utc, fixed offset). So create                                              // 2157
            // a now version of current config (take local/utc/offset flags, and                                       // 2158
            // create now).                                                                                            // 2159
            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);                   // 2160
            week = defaults(w.W, 1);                                                                                   // 2161
            weekday = defaults(w.E, 1);                                                                                // 2162
            if (weekday < 1 || weekday > 7) {                                                                          // 2163
                weekdayOverflow = true;                                                                                // 2164
            }                                                                                                          // 2165
        } else {                                                                                                       // 2166
            dow = config._locale._week.dow;                                                                            // 2167
            doy = config._locale._week.doy;                                                                            // 2168
                                                                                                                       // 2169
            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);               // 2170
            week = defaults(w.w, 1);                                                                                   // 2171
                                                                                                                       // 2172
            if (w.d != null) {                                                                                         // 2173
                // weekday -- low day numbers are considered next week                                                 // 2174
                weekday = w.d;                                                                                         // 2175
                if (weekday < 0 || weekday > 6) {                                                                      // 2176
                    weekdayOverflow = true;                                                                            // 2177
                }                                                                                                      // 2178
            } else if (w.e != null) {                                                                                  // 2179
                // local weekday -- counting starts from begining of week                                              // 2180
                weekday = w.e + dow;                                                                                   // 2181
                if (w.e < 0 || w.e > 6) {                                                                              // 2182
                    weekdayOverflow = true;                                                                            // 2183
                }                                                                                                      // 2184
            } else {                                                                                                   // 2185
                // default to begining of week                                                                         // 2186
                weekday = dow;                                                                                         // 2187
            }                                                                                                          // 2188
        }                                                                                                              // 2189
        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {                                                      // 2190
            getParsingFlags(config)._overflowWeeks = true;                                                             // 2191
        } else if (weekdayOverflow != null) {                                                                          // 2192
            getParsingFlags(config)._overflowWeekday = true;                                                           // 2193
        } else {                                                                                                       // 2194
            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);                                              // 2195
            config._a[YEAR] = temp.year;                                                                               // 2196
            config._dayOfYear = temp.dayOfYear;                                                                        // 2197
        }                                                                                                              // 2198
    }                                                                                                                  // 2199
                                                                                                                       // 2200
    // constant that refers to the ISO standard                                                                        // 2201
    utils_hooks__hooks.ISO_8601 = function () {};                                                                      // 2202
                                                                                                                       // 2203
    // date from string and format string                                                                              // 2204
    function configFromStringAndFormat(config) {                                                                       // 2205
        // TODO: Move this to another part of the creation flow to prevent circular deps                               // 2206
        if (config._f === utils_hooks__hooks.ISO_8601) {                                                               // 2207
            configFromISO(config);                                                                                     // 2208
            return;                                                                                                    // 2209
        }                                                                                                              // 2210
                                                                                                                       // 2211
        config._a = [];                                                                                                // 2212
        getParsingFlags(config).empty = true;                                                                          // 2213
                                                                                                                       // 2214
        // This array is used to make a Date, either with `new Date` or `Date.UTC`                                     // 2215
        var string = '' + config._i,                                                                                   // 2216
            i, parsedInput, tokens, token, skipped,                                                                    // 2217
            stringLength = string.length,                                                                              // 2218
            totalParsedInputLength = 0;                                                                                // 2219
                                                                                                                       // 2220
        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];                                // 2221
                                                                                                                       // 2222
        for (i = 0; i < tokens.length; i++) {                                                                          // 2223
            token = tokens[i];                                                                                         // 2224
            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];                               // 2225
            // console.log('token', token, 'parsedInput', parsedInput,                                                 // 2226
            //         'regex', getParseRegexForToken(token, config));                                                 // 2227
            if (parsedInput) {                                                                                         // 2228
                skipped = string.substr(0, string.indexOf(parsedInput));                                               // 2229
                if (skipped.length > 0) {                                                                              // 2230
                    getParsingFlags(config).unusedInput.push(skipped);                                                 // 2231
                }                                                                                                      // 2232
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);                               // 2233
                totalParsedInputLength += parsedInput.length;                                                          // 2234
            }                                                                                                          // 2235
            // don't parse if it's not a known token                                                                   // 2236
            if (formatTokenFunctions[token]) {                                                                         // 2237
                if (parsedInput) {                                                                                     // 2238
                    getParsingFlags(config).empty = false;                                                             // 2239
                }                                                                                                      // 2240
                else {                                                                                                 // 2241
                    getParsingFlags(config).unusedTokens.push(token);                                                  // 2242
                }                                                                                                      // 2243
                addTimeToArrayFromToken(token, parsedInput, config);                                                   // 2244
            }                                                                                                          // 2245
            else if (config._strict && !parsedInput) {                                                                 // 2246
                getParsingFlags(config).unusedTokens.push(token);                                                      // 2247
            }                                                                                                          // 2248
        }                                                                                                              // 2249
                                                                                                                       // 2250
        // add remaining unparsed input length to the string                                                           // 2251
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;                                 // 2252
        if (string.length > 0) {                                                                                       // 2253
            getParsingFlags(config).unusedInput.push(string);                                                          // 2254
        }                                                                                                              // 2255
                                                                                                                       // 2256
        // clear _12h flag if hour is <= 12                                                                            // 2257
        if (config._a[HOUR] <= 12 &&                                                                                   // 2258
            getParsingFlags(config).bigHour === true &&                                                                // 2259
            config._a[HOUR] > 0) {                                                                                     // 2260
            getParsingFlags(config).bigHour = undefined;                                                               // 2261
        }                                                                                                              // 2262
                                                                                                                       // 2263
        getParsingFlags(config).parsedDateParts = config._a.slice(0);                                                  // 2264
        getParsingFlags(config).meridiem = config._meridiem;                                                           // 2265
        // handle meridiem                                                                                             // 2266
        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);                          // 2267
                                                                                                                       // 2268
        configFromArray(config);                                                                                       // 2269
        checkOverflow(config);                                                                                         // 2270
    }                                                                                                                  // 2271
                                                                                                                       // 2272
                                                                                                                       // 2273
    function meridiemFixWrap (locale, hour, meridiem) {                                                                // 2274
        var isPm;                                                                                                      // 2275
                                                                                                                       // 2276
        if (meridiem == null) {                                                                                        // 2277
            // nothing to do                                                                                           // 2278
            return hour;                                                                                               // 2279
        }                                                                                                              // 2280
        if (locale.meridiemHour != null) {                                                                             // 2281
            return locale.meridiemHour(hour, meridiem);                                                                // 2282
        } else if (locale.isPM != null) {                                                                              // 2283
            // Fallback                                                                                                // 2284
            isPm = locale.isPM(meridiem);                                                                              // 2285
            if (isPm && hour < 12) {                                                                                   // 2286
                hour += 12;                                                                                            // 2287
            }                                                                                                          // 2288
            if (!isPm && hour === 12) {                                                                                // 2289
                hour = 0;                                                                                              // 2290
            }                                                                                                          // 2291
            return hour;                                                                                               // 2292
        } else {                                                                                                       // 2293
            // this is not supposed to happen                                                                          // 2294
            return hour;                                                                                               // 2295
        }                                                                                                              // 2296
    }                                                                                                                  // 2297
                                                                                                                       // 2298
    // date from string and array of format strings                                                                    // 2299
    function configFromStringAndArray(config) {                                                                        // 2300
        var tempConfig,                                                                                                // 2301
            bestMoment,                                                                                                // 2302
                                                                                                                       // 2303
            scoreToBeat,                                                                                               // 2304
            i,                                                                                                         // 2305
            currentScore;                                                                                              // 2306
                                                                                                                       // 2307
        if (config._f.length === 0) {                                                                                  // 2308
            getParsingFlags(config).invalidFormat = true;                                                              // 2309
            config._d = new Date(NaN);                                                                                 // 2310
            return;                                                                                                    // 2311
        }                                                                                                              // 2312
                                                                                                                       // 2313
        for (i = 0; i < config._f.length; i++) {                                                                       // 2314
            currentScore = 0;                                                                                          // 2315
            tempConfig = copyConfig({}, config);                                                                       // 2316
            if (config._useUTC != null) {                                                                              // 2317
                tempConfig._useUTC = config._useUTC;                                                                   // 2318
            }                                                                                                          // 2319
            tempConfig._f = config._f[i];                                                                              // 2320
            configFromStringAndFormat(tempConfig);                                                                     // 2321
                                                                                                                       // 2322
            if (!valid__isValid(tempConfig)) {                                                                         // 2323
                continue;                                                                                              // 2324
            }                                                                                                          // 2325
                                                                                                                       // 2326
            // if there is any input that was not parsed add a penalty for that format                                 // 2327
            currentScore += getParsingFlags(tempConfig).charsLeftOver;                                                 // 2328
                                                                                                                       // 2329
            //or tokens                                                                                                // 2330
            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;                                      // 2331
                                                                                                                       // 2332
            getParsingFlags(tempConfig).score = currentScore;                                                          // 2333
                                                                                                                       // 2334
            if (scoreToBeat == null || currentScore < scoreToBeat) {                                                   // 2335
                scoreToBeat = currentScore;                                                                            // 2336
                bestMoment = tempConfig;                                                                               // 2337
            }                                                                                                          // 2338
        }                                                                                                              // 2339
                                                                                                                       // 2340
        extend(config, bestMoment || tempConfig);                                                                      // 2341
    }                                                                                                                  // 2342
                                                                                                                       // 2343
    function configFromObject(config) {                                                                                // 2344
        if (config._d) {                                                                                               // 2345
            return;                                                                                                    // 2346
        }                                                                                                              // 2347
                                                                                                                       // 2348
        var i = normalizeObjectUnits(config._i);                                                                       // 2349
        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
            return obj && parseInt(obj, 10);                                                                           // 2351
        });                                                                                                            // 2352
                                                                                                                       // 2353
        configFromArray(config);                                                                                       // 2354
    }                                                                                                                  // 2355
                                                                                                                       // 2356
    function createFromConfig (config) {                                                                               // 2357
        var res = new Moment(checkOverflow(prepareConfig(config)));                                                    // 2358
        if (res._nextDay) {                                                                                            // 2359
            // Adding is smart enough around DST                                                                       // 2360
            res.add(1, 'd');                                                                                           // 2361
            res._nextDay = undefined;                                                                                  // 2362
        }                                                                                                              // 2363
                                                                                                                       // 2364
        return res;                                                                                                    // 2365
    }                                                                                                                  // 2366
                                                                                                                       // 2367
    function prepareConfig (config) {                                                                                  // 2368
        var input = config._i,                                                                                         // 2369
            format = config._f;                                                                                        // 2370
                                                                                                                       // 2371
        config._locale = config._locale || locale_locales__getLocale(config._l);                                       // 2372
                                                                                                                       // 2373
        if (input === null || (format === undefined && input === '')) {                                                // 2374
            return valid__createInvalid({nullInput: true});                                                            // 2375
        }                                                                                                              // 2376
                                                                                                                       // 2377
        if (typeof input === 'string') {                                                                               // 2378
            config._i = input = config._locale.preparse(input);                                                        // 2379
        }                                                                                                              // 2380
                                                                                                                       // 2381
        if (isMoment(input)) {                                                                                         // 2382
            return new Moment(checkOverflow(input));                                                                   // 2383
        } else if (isArray(format)) {                                                                                  // 2384
            configFromStringAndArray(config);                                                                          // 2385
        } else if (isDate(input)) {                                                                                    // 2386
            config._d = input;                                                                                         // 2387
        } else if (format) {                                                                                           // 2388
            configFromStringAndFormat(config);                                                                         // 2389
        }  else {                                                                                                      // 2390
            configFromInput(config);                                                                                   // 2391
        }                                                                                                              // 2392
                                                                                                                       // 2393
        if (!valid__isValid(config)) {                                                                                 // 2394
            config._d = null;                                                                                          // 2395
        }                                                                                                              // 2396
                                                                                                                       // 2397
        return config;                                                                                                 // 2398
    }                                                                                                                  // 2399
                                                                                                                       // 2400
    function configFromInput(config) {                                                                                 // 2401
        var input = config._i;                                                                                         // 2402
        if (input === undefined) {                                                                                     // 2403
            config._d = new Date(utils_hooks__hooks.now());                                                            // 2404
        } else if (isDate(input)) {                                                                                    // 2405
            config._d = new Date(input.valueOf());                                                                     // 2406
        } else if (typeof input === 'string') {                                                                        // 2407
            configFromString(config);                                                                                  // 2408
        } else if (isArray(input)) {                                                                                   // 2409
            config._a = map(input.slice(0), function (obj) {                                                           // 2410
                return parseInt(obj, 10);                                                                              // 2411
            });                                                                                                        // 2412
            configFromArray(config);                                                                                   // 2413
        } else if (typeof(input) === 'object') {                                                                       // 2414
            configFromObject(config);                                                                                  // 2415
        } else if (typeof(input) === 'number') {                                                                       // 2416
            // from milliseconds                                                                                       // 2417
            config._d = new Date(input);                                                                               // 2418
        } else {                                                                                                       // 2419
            utils_hooks__hooks.createFromInputFallback(config);                                                        // 2420
        }                                                                                                              // 2421
    }                                                                                                                  // 2422
                                                                                                                       // 2423
    function createLocalOrUTC (input, format, locale, strict, isUTC) {                                                 // 2424
        var c = {};                                                                                                    // 2425
                                                                                                                       // 2426
        if (typeof(locale) === 'boolean') {                                                                            // 2427
            strict = locale;                                                                                           // 2428
            locale = undefined;                                                                                        // 2429
        }                                                                                                              // 2430
                                                                                                                       // 2431
        if ((isObject(input) && isObjectEmpty(input)) ||                                                               // 2432
                (isArray(input) && input.length === 0)) {                                                              // 2433
            input = undefined;                                                                                         // 2434
        }                                                                                                              // 2435
        // object construction must be done this way.                                                                  // 2436
        // https://github.com/moment/moment/issues/1423                                                                // 2437
        c._isAMomentObject = true;                                                                                     // 2438
        c._useUTC = c._isUTC = isUTC;                                                                                  // 2439
        c._l = locale;                                                                                                 // 2440
        c._i = input;                                                                                                  // 2441
        c._f = format;                                                                                                 // 2442
        c._strict = strict;                                                                                            // 2443
                                                                                                                       // 2444
        return createFromConfig(c);                                                                                    // 2445
    }                                                                                                                  // 2446
                                                                                                                       // 2447
    function local__createLocal (input, format, locale, strict) {                                                      // 2448
        return createLocalOrUTC(input, format, locale, strict, false);                                                 // 2449
    }                                                                                                                  // 2450
                                                                                                                       // 2451
    var prototypeMin = deprecate(                                                                                      // 2452
        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',          // 2453
        function () {                                                                                                  // 2454
            var other = local__createLocal.apply(null, arguments);                                                     // 2455
            if (this.isValid() && other.isValid()) {                                                                   // 2456
                return other < this ? this : other;                                                                    // 2457
            } else {                                                                                                   // 2458
                return valid__createInvalid();                                                                         // 2459
            }                                                                                                          // 2460
        }                                                                                                              // 2461
    );                                                                                                                 // 2462
                                                                                                                       // 2463
    var prototypeMax = deprecate(                                                                                      // 2464
        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',          // 2465
        function () {                                                                                                  // 2466
            var other = local__createLocal.apply(null, arguments);                                                     // 2467
            if (this.isValid() && other.isValid()) {                                                                   // 2468
                return other > this ? this : other;                                                                    // 2469
            } else {                                                                                                   // 2470
                return valid__createInvalid();                                                                         // 2471
            }                                                                                                          // 2472
        }                                                                                                              // 2473
    );                                                                                                                 // 2474
                                                                                                                       // 2475
    // Pick a moment m from moments so that m[fn](other) is true for all                                               // 2476
    // other. This relies on the function fn to be transitive.                                                         // 2477
    //                                                                                                                 // 2478
    // moments should either be an array of moment objects or an array, whose                                          // 2479
    // first element is an array of moment objects.                                                                    // 2480
    function pickBy(fn, moments) {                                                                                     // 2481
        var res, i;                                                                                                    // 2482
        if (moments.length === 1 && isArray(moments[0])) {                                                             // 2483
            moments = moments[0];                                                                                      // 2484
        }                                                                                                              // 2485
        if (!moments.length) {                                                                                         // 2486
            return local__createLocal();                                                                               // 2487
        }                                                                                                              // 2488
        res = moments[0];                                                                                              // 2489
        for (i = 1; i < moments.length; ++i) {                                                                         // 2490
            if (!moments[i].isValid() || moments[i][fn](res)) {                                                        // 2491
                res = moments[i];                                                                                      // 2492
            }                                                                                                          // 2493
        }                                                                                                              // 2494
        return res;                                                                                                    // 2495
    }                                                                                                                  // 2496
                                                                                                                       // 2497
    // TODO: Use [].sort instead?                                                                                      // 2498
    function min () {                                                                                                  // 2499
        var args = [].slice.call(arguments, 0);                                                                        // 2500
                                                                                                                       // 2501
        return pickBy('isBefore', args);                                                                               // 2502
    }                                                                                                                  // 2503
                                                                                                                       // 2504
    function max () {                                                                                                  // 2505
        var args = [].slice.call(arguments, 0);                                                                        // 2506
                                                                                                                       // 2507
        return pickBy('isAfter', args);                                                                                // 2508
    }                                                                                                                  // 2509
                                                                                                                       // 2510
    var now = function () {                                                                                            // 2511
        return Date.now ? Date.now() : +(new Date());                                                                  // 2512
    };                                                                                                                 // 2513
                                                                                                                       // 2514
    function Duration (duration) {                                                                                     // 2515
        var normalizedInput = normalizeObjectUnits(duration),                                                          // 2516
            years = normalizedInput.year || 0,                                                                         // 2517
            quarters = normalizedInput.quarter || 0,                                                                   // 2518
            months = normalizedInput.month || 0,                                                                       // 2519
            weeks = normalizedInput.week || 0,                                                                         // 2520
            days = normalizedInput.day || 0,                                                                           // 2521
            hours = normalizedInput.hour || 0,                                                                         // 2522
            minutes = normalizedInput.minute || 0,                                                                     // 2523
            seconds = normalizedInput.second || 0,                                                                     // 2524
            milliseconds = normalizedInput.millisecond || 0;                                                           // 2525
                                                                                                                       // 2526
        // representation for dateAddRemove                                                                            // 2527
        this._milliseconds = +milliseconds +                                                                           // 2528
            seconds * 1e3 + // 1000                                                                                    // 2529
            minutes * 6e4 + // 1000 * 60                                                                               // 2530
            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a                                                // 2532
        // day when working around DST, we need to store them separately                                               // 2533
        this._days = +days +                                                                                           // 2534
            weeks * 7;                                                                                                 // 2535
        // It is impossible translate months into days without knowing                                                 // 2536
        // which months you are are talking about, so we have to store                                                 // 2537
        // it separately.                                                                                              // 2538
        this._months = +months +                                                                                       // 2539
            quarters * 3 +                                                                                             // 2540
            years * 12;                                                                                                // 2541
                                                                                                                       // 2542
        this._data = {};                                                                                               // 2543
                                                                                                                       // 2544
        this._locale = locale_locales__getLocale();                                                                    // 2545
                                                                                                                       // 2546
        this._bubble();                                                                                                // 2547
    }                                                                                                                  // 2548
                                                                                                                       // 2549
    function isDuration (obj) {                                                                                        // 2550
        return obj instanceof Duration;                                                                                // 2551
    }                                                                                                                  // 2552
                                                                                                                       // 2553
    function absRound (number) {                                                                                       // 2554
        if (number < 0) {                                                                                              // 2555
            return Math.round(-1 * number) * -1;                                                                       // 2556
        } else {                                                                                                       // 2557
            return Math.round(number);                                                                                 // 2558
        }                                                                                                              // 2559
    }                                                                                                                  // 2560
                                                                                                                       // 2561
    // FORMATTING                                                                                                      // 2562
                                                                                                                       // 2563
    function offset (token, separator) {                                                                               // 2564
        addFormatToken(token, 0, 0, function () {                                                                      // 2565
            var offset = this.utcOffset();                                                                             // 2566
            var sign = '+';                                                                                            // 2567
            if (offset < 0) {                                                                                          // 2568
                offset = -offset;                                                                                      // 2569
                sign = '-';                                                                                            // 2570
            }                                                                                                          // 2571
            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);                     // 2572
        });                                                                                                            // 2573
    }                                                                                                                  // 2574
                                                                                                                       // 2575
    offset('Z', ':');                                                                                                  // 2576
    offset('ZZ', '');                                                                                                  // 2577
                                                                                                                       // 2578
    // PARSING                                                                                                         // 2579
                                                                                                                       // 2580
    addRegexToken('Z',  matchShortOffset);                                                                             // 2581
    addRegexToken('ZZ', matchShortOffset);                                                                             // 2582
    addParseToken(['Z', 'ZZ'], function (input, array, config) {                                                       // 2583
        config._useUTC = true;                                                                                         // 2584
        config._tzm = offsetFromString(matchShortOffset, input);                                                       // 2585
    });                                                                                                                // 2586
                                                                                                                       // 2587
    // HELPERS                                                                                                         // 2588
                                                                                                                       // 2589
    // timezone chunker                                                                                                // 2590
    // '+10:00' > ['10',  '00']                                                                                        // 2591
    // '-1530'  > ['-15', '30']                                                                                        // 2592
    var chunkOffset = /([\+\-]|\d\d)/gi;                                                                               // 2593
                                                                                                                       // 2594
    function offsetFromString(matcher, string) {                                                                       // 2595
        var matches = ((string || '').match(matcher) || []);                                                           // 2596
        var chunk   = matches[matches.length - 1] || [];                                                               // 2597
        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];                                                  // 2598
        var minutes = +(parts[1] * 60) + toInt(parts[2]);                                                              // 2599
                                                                                                                       // 2600
        return parts[0] === '+' ? minutes : -minutes;                                                                  // 2601
    }                                                                                                                  // 2602
                                                                                                                       // 2603
    // Return a moment from input, that is local/utc/zone equivalent to model.                                         // 2604
    function cloneWithOffset(input, model) {                                                                           // 2605
        var res, diff;                                                                                                 // 2606
        if (model._isUTC) {                                                                                            // 2607
            res = model.clone();                                                                                       // 2608
            diff = (isMoment(input) || isDate(input) ? input.valueOf() : local__createLocal(input).valueOf()) - res.valueOf();
            // Use low-level api, because this fn is low-level api.                                                    // 2610
            res._d.setTime(res._d.valueOf() + diff);                                                                   // 2611
            utils_hooks__hooks.updateOffset(res, false);                                                               // 2612
            return res;                                                                                                // 2613
        } else {                                                                                                       // 2614
            return local__createLocal(input).local();                                                                  // 2615
        }                                                                                                              // 2616
    }                                                                                                                  // 2617
                                                                                                                       // 2618
    function getDateOffset (m) {                                                                                       // 2619
        // On Firefox.24 Date#getTimezoneOffset returns a floating point.                                              // 2620
        // https://github.com/moment/moment/pull/1871                                                                  // 2621
        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;                                                        // 2622
    }                                                                                                                  // 2623
                                                                                                                       // 2624
    // HOOKS                                                                                                           // 2625
                                                                                                                       // 2626
    // This function will be called whenever a moment is mutated.                                                      // 2627
    // It is intended to keep the offset in sync with the timezone.                                                    // 2628
    utils_hooks__hooks.updateOffset = function () {};                                                                  // 2629
                                                                                                                       // 2630
    // MOMENTS                                                                                                         // 2631
                                                                                                                       // 2632
    // keepLocalTime = true means only change the timezone, without                                                    // 2633
    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->                                            // 2634
    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset                                             // 2635
    // +0200, so we adjust the time as needed, to be valid.                                                            // 2636
    //                                                                                                                 // 2637
    // Keeping the time actually adds/subtracts (one hour)                                                             // 2638
    // from the actual represented time. That is why we call updateOffset                                              // 2639
    // a second time. In case it wants us to change the offset again                                                   // 2640
    // _changeInProgress == true case, then we have to adjust, because                                                 // 2641
    // there is no such time in the given timezone.                                                                    // 2642
    function getSetOffset (input, keepLocalTime) {                                                                     // 2643
        var offset = this._offset || 0,                                                                                // 2644
            localAdjust;                                                                                               // 2645
        if (!this.isValid()) {                                                                                         // 2646
            return input != null ? this : NaN;                                                                         // 2647
        }                                                                                                              // 2648
        if (input != null) {                                                                                           // 2649
            if (typeof input === 'string') {                                                                           // 2650
                input = offsetFromString(matchShortOffset, input);                                                     // 2651
            } else if (Math.abs(input) < 16) {                                                                         // 2652
                input = input * 60;                                                                                    // 2653
            }                                                                                                          // 2654
            if (!this._isUTC && keepLocalTime) {                                                                       // 2655
                localAdjust = getDateOffset(this);                                                                     // 2656
            }                                                                                                          // 2657
            this._offset = input;                                                                                      // 2658
            this._isUTC = true;                                                                                        // 2659
            if (localAdjust != null) {                                                                                 // 2660
                this.add(localAdjust, 'm');                                                                            // 2661
            }                                                                                                          // 2662
            if (offset !== input) {                                                                                    // 2663
                if (!keepLocalTime || this._changeInProgress) {                                                        // 2664
                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);            // 2665
                } else if (!this._changeInProgress) {                                                                  // 2666
                    this._changeInProgress = true;                                                                     // 2667
                    utils_hooks__hooks.updateOffset(this, true);                                                       // 2668
                    this._changeInProgress = null;                                                                     // 2669
                }                                                                                                      // 2670
            }                                                                                                          // 2671
            return this;                                                                                               // 2672
        } else {                                                                                                       // 2673
            return this._isUTC ? offset : getDateOffset(this);                                                         // 2674
        }                                                                                                              // 2675
    }                                                                                                                  // 2676
                                                                                                                       // 2677
    function getSetZone (input, keepLocalTime) {                                                                       // 2678
        if (input != null) {                                                                                           // 2679
            if (typeof input !== 'string') {                                                                           // 2680
                input = -input;                                                                                        // 2681
            }                                                                                                          // 2682
                                                                                                                       // 2683
            this.utcOffset(input, keepLocalTime);                                                                      // 2684
                                                                                                                       // 2685
            return this;                                                                                               // 2686
        } else {                                                                                                       // 2687
            return -this.utcOffset();                                                                                  // 2688
        }                                                                                                              // 2689
    }                                                                                                                  // 2690
                                                                                                                       // 2691
    function setOffsetToUTC (keepLocalTime) {                                                                          // 2692
        return this.utcOffset(0, keepLocalTime);                                                                       // 2693
    }                                                                                                                  // 2694
                                                                                                                       // 2695
    function setOffsetToLocal (keepLocalTime) {                                                                        // 2696
        if (this._isUTC) {                                                                                             // 2697
            this.utcOffset(0, keepLocalTime);                                                                          // 2698
            this._isUTC = false;                                                                                       // 2699
                                                                                                                       // 2700
            if (keepLocalTime) {                                                                                       // 2701
                this.subtract(getDateOffset(this), 'm');                                                               // 2702
            }                                                                                                          // 2703
        }                                                                                                              // 2704
        return this;                                                                                                   // 2705
    }                                                                                                                  // 2706
                                                                                                                       // 2707
    function setOffsetToParsedOffset () {                                                                              // 2708
        if (this._tzm) {                                                                                               // 2709
            this.utcOffset(this._tzm);                                                                                 // 2710
        } else if (typeof this._i === 'string') {                                                                      // 2711
            var tZone = offsetFromString(matchOffset, this._i);                                                        // 2712
                                                                                                                       // 2713
            if (tZone === 0) {                                                                                         // 2714
                this.utcOffset(0, true);                                                                               // 2715
            } else {                                                                                                   // 2716
                this.utcOffset(offsetFromString(matchOffset, this._i));                                                // 2717
            }                                                                                                          // 2718
        }                                                                                                              // 2719
        return this;                                                                                                   // 2720
    }                                                                                                                  // 2721
                                                                                                                       // 2722
    function hasAlignedHourOffset (input) {                                                                            // 2723
        if (!this.isValid()) {                                                                                         // 2724
            return false;                                                                                              // 2725
        }                                                                                                              // 2726
        input = input ? local__createLocal(input).utcOffset() : 0;                                                     // 2727
                                                                                                                       // 2728
        return (this.utcOffset() - input) % 60 === 0;                                                                  // 2729
    }                                                                                                                  // 2730
                                                                                                                       // 2731
    function isDaylightSavingTime () {                                                                                 // 2732
        return (                                                                                                       // 2733
            this.utcOffset() > this.clone().month(0).utcOffset() ||                                                    // 2734
            this.utcOffset() > this.clone().month(5).utcOffset()                                                       // 2735
        );                                                                                                             // 2736
    }                                                                                                                  // 2737
                                                                                                                       // 2738
    function isDaylightSavingTimeShifted () {                                                                          // 2739
        if (!isUndefined(this._isDSTShifted)) {                                                                        // 2740
            return this._isDSTShifted;                                                                                 // 2741
        }                                                                                                              // 2742
                                                                                                                       // 2743
        var c = {};                                                                                                    // 2744
                                                                                                                       // 2745
        copyConfig(c, this);                                                                                           // 2746
        c = prepareConfig(c);                                                                                          // 2747
                                                                                                                       // 2748
        if (c._a) {                                                                                                    // 2749
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);                             // 2750
            this._isDSTShifted = this.isValid() &&                                                                     // 2751
                compareArrays(c._a, other.toArray()) > 0;                                                              // 2752
        } else {                                                                                                       // 2753
            this._isDSTShifted = false;                                                                                // 2754
        }                                                                                                              // 2755
                                                                                                                       // 2756
        return this._isDSTShifted;                                                                                     // 2757
    }                                                                                                                  // 2758
                                                                                                                       // 2759
    function isLocal () {                                                                                              // 2760
        return this.isValid() ? !this._isUTC : false;                                                                  // 2761
    }                                                                                                                  // 2762
                                                                                                                       // 2763
    function isUtcOffset () {                                                                                          // 2764
        return this.isValid() ? this._isUTC : false;                                                                   // 2765
    }                                                                                                                  // 2766
                                                                                                                       // 2767
    function isUtc () {                                                                                                // 2768
        return this.isValid() ? this._isUTC && this._offset === 0 : false;                                             // 2769
    }                                                                                                                  // 2770
                                                                                                                       // 2771
    // ASP.NET json date format regex                                                                                  // 2772
    var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;                                         // 2773
                                                                                                                       // 2774
    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html                       // 2775
    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere                                       // 2776
    // and further modified to allow for strings containing both week and day                                          // 2777
    var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
                                                                                                                       // 2779
    function create__createDuration (input, key) {                                                                     // 2780
        var duration = input,                                                                                          // 2781
            // matching against regexp is expensive, do it on demand                                                   // 2782
            match = null,                                                                                              // 2783
            sign,                                                                                                      // 2784
            ret,                                                                                                       // 2785
            diffRes;                                                                                                   // 2786
                                                                                                                       // 2787
        if (isDuration(input)) {                                                                                       // 2788
            duration = {                                                                                               // 2789
                ms : input._milliseconds,                                                                              // 2790
                d  : input._days,                                                                                      // 2791
                M  : input._months                                                                                     // 2792
            };                                                                                                         // 2793
        } else if (typeof input === 'number') {                                                                        // 2794
            duration = {};                                                                                             // 2795
            if (key) {                                                                                                 // 2796
                duration[key] = input;                                                                                 // 2797
            } else {                                                                                                   // 2798
                duration.milliseconds = input;                                                                         // 2799
            }                                                                                                          // 2800
        } else if (!!(match = aspNetRegex.exec(input))) {                                                              // 2801
            sign = (match[1] === '-') ? -1 : 1;                                                                        // 2802
            duration = {                                                                                               // 2803
                y  : 0,                                                                                                // 2804
                d  : toInt(match[DATE])                         * sign,                                                // 2805
                h  : toInt(match[HOUR])                         * sign,                                                // 2806
                m  : toInt(match[MINUTE])                       * sign,                                                // 2807
                s  : toInt(match[SECOND])                       * sign,                                                // 2808
                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
            };                                                                                                         // 2810
        } else if (!!(match = isoRegex.exec(input))) {                                                                 // 2811
            sign = (match[1] === '-') ? -1 : 1;                                                                        // 2812
            duration = {                                                                                               // 2813
                y : parseIso(match[2], sign),                                                                          // 2814
                M : parseIso(match[3], sign),                                                                          // 2815
                w : parseIso(match[4], sign),                                                                          // 2816
                d : parseIso(match[5], sign),                                                                          // 2817
                h : parseIso(match[6], sign),                                                                          // 2818
                m : parseIso(match[7], sign),                                                                          // 2819
                s : parseIso(match[8], sign)                                                                           // 2820
            };                                                                                                         // 2821
        } else if (duration == null) {// checks for null or undefined                                                  // 2822
            duration = {};                                                                                             // 2823
        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {                         // 2824
            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));           // 2825
                                                                                                                       // 2826
            duration = {};                                                                                             // 2827
            duration.ms = diffRes.milliseconds;                                                                        // 2828
            duration.M = diffRes.months;                                                                               // 2829
        }                                                                                                              // 2830
                                                                                                                       // 2831
        ret = new Duration(duration);                                                                                  // 2832
                                                                                                                       // 2833
        if (isDuration(input) && hasOwnProp(input, '_locale')) {                                                       // 2834
            ret._locale = input._locale;                                                                               // 2835
        }                                                                                                              // 2836
                                                                                                                       // 2837
        return ret;                                                                                                    // 2838
    }                                                                                                                  // 2839
                                                                                                                       // 2840
    create__createDuration.fn = Duration.prototype;                                                                    // 2841
                                                                                                                       // 2842
    function parseIso (inp, sign) {                                                                                    // 2843
        // We'd normally use ~~inp for this, but unfortunately it also                                                 // 2844
        // converts floats to ints.                                                                                    // 2845
        // inp may be undefined, so careful calling replace on it.                                                     // 2846
        var res = inp && parseFloat(inp.replace(',', '.'));                                                            // 2847
        // apply sign while we're at it                                                                                // 2848
        return (isNaN(res) ? 0 : res) * sign;                                                                          // 2849
    }                                                                                                                  // 2850
                                                                                                                       // 2851
    function positiveMomentsDifference(base, other) {                                                                  // 2852
        var res = {milliseconds: 0, months: 0};                                                                        // 2853
                                                                                                                       // 2854
        res.months = other.month() - base.month() +                                                                    // 2855
            (other.year() - base.year()) * 12;                                                                         // 2856
        if (base.clone().add(res.months, 'M').isAfter(other)) {                                                        // 2857
            --res.months;                                                                                              // 2858
        }                                                                                                              // 2859
                                                                                                                       // 2860
        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));                                              // 2861
                                                                                                                       // 2862
        return res;                                                                                                    // 2863
    }                                                                                                                  // 2864
                                                                                                                       // 2865
    function momentsDifference(base, other) {                                                                          // 2866
        var res;                                                                                                       // 2867
        if (!(base.isValid() && other.isValid())) {                                                                    // 2868
            return {milliseconds: 0, months: 0};                                                                       // 2869
        }                                                                                                              // 2870
                                                                                                                       // 2871
        other = cloneWithOffset(other, base);                                                                          // 2872
        if (base.isBefore(other)) {                                                                                    // 2873
            res = positiveMomentsDifference(base, other);                                                              // 2874
        } else {                                                                                                       // 2875
            res = positiveMomentsDifference(other, base);                                                              // 2876
            res.milliseconds = -res.milliseconds;                                                                      // 2877
            res.months = -res.months;                                                                                  // 2878
        }                                                                                                              // 2879
                                                                                                                       // 2880
        return res;                                                                                                    // 2881
    }                                                                                                                  // 2882
                                                                                                                       // 2883
    // TODO: remove 'name' arg after deprecation is removed                                                            // 2884
    function createAdder(direction, name) {                                                                            // 2885
        return function (val, period) {                                                                                // 2886
            var dur, tmp;                                                                                              // 2887
            //invert the arguments, but complain about it                                                              // 2888
            if (period !== null && !isNaN(+period)) {                                                                  // 2889
                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');                       // 2891
                tmp = val; val = period; period = tmp;                                                                 // 2892
            }                                                                                                          // 2893
                                                                                                                       // 2894
            val = typeof val === 'string' ? +val : val;                                                                // 2895
            dur = create__createDuration(val, period);                                                                 // 2896
            add_subtract__addSubtract(this, dur, direction);                                                           // 2897
            return this;                                                                                               // 2898
        };                                                                                                             // 2899
    }                                                                                                                  // 2900
                                                                                                                       // 2901
    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {                                       // 2902
        var milliseconds = duration._milliseconds,                                                                     // 2903
            days = absRound(duration._days),                                                                           // 2904
            months = absRound(duration._months);                                                                       // 2905
                                                                                                                       // 2906
        if (!mom.isValid()) {                                                                                          // 2907
            // No op                                                                                                   // 2908
            return;                                                                                                    // 2909
        }                                                                                                              // 2910
                                                                                                                       // 2911
        updateOffset = updateOffset == null ? true : updateOffset;                                                     // 2912
                                                                                                                       // 2913
        if (milliseconds) {                                                                                            // 2914
            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);                                                // 2915
        }                                                                                                              // 2916
        if (days) {                                                                                                    // 2917
            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);                                    // 2918
        }                                                                                                              // 2919
        if (months) {                                                                                                  // 2920
            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);                                             // 2921
        }                                                                                                              // 2922
        if (updateOffset) {                                                                                            // 2923
            utils_hooks__hooks.updateOffset(mom, days || months);                                                      // 2924
        }                                                                                                              // 2925
    }                                                                                                                  // 2926
                                                                                                                       // 2927
    var add_subtract__add      = createAdder(1, 'add');                                                                // 2928
    var add_subtract__subtract = createAdder(-1, 'subtract');                                                          // 2929
                                                                                                                       // 2930
    function getCalendarFormat(myMoment, now) {                                                                        // 2931
        var diff = myMoment.diff(now, 'days', true);                                                                   // 2932
        return diff < -6 ? 'sameElse' :                                                                                // 2933
                diff < -1 ? 'lastWeek' :                                                                               // 2934
                diff < 0 ? 'lastDay' :                                                                                 // 2935
                diff < 1 ? 'sameDay' :                                                                                 // 2936
                diff < 2 ? 'nextDay' :                                                                                 // 2937
                diff < 7 ? 'nextWeek' : 'sameElse';                                                                    // 2938
    }                                                                                                                  // 2939
                                                                                                                       // 2940
    function moment_calendar__calendar (time, formats) {                                                               // 2941
        // We want to compare the start of today, vs this.                                                             // 2942
        // Getting start-of-today depends on whether we're local/utc/offset or not.                                    // 2943
        var now = time || local__createLocal(),                                                                        // 2944
            sod = cloneWithOffset(now, this).startOf('day'),                                                           // 2945
            format = utils_hooks__hooks.calendarFormat(this, sod) || 'sameElse';                                       // 2946
                                                                                                                       // 2947
        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);     // 2948
                                                                                                                       // 2949
        return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));               // 2950
    }                                                                                                                  // 2951
                                                                                                                       // 2952
    function clone () {                                                                                                // 2953
        return new Moment(this);                                                                                       // 2954
    }                                                                                                                  // 2955
                                                                                                                       // 2956
    function isAfter (input, units) {                                                                                  // 2957
        var localInput = isMoment(input) ? input : local__createLocal(input);                                          // 2958
        if (!(this.isValid() && localInput.isValid())) {                                                               // 2959
            return false;                                                                                              // 2960
        }                                                                                                              // 2961
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');                                           // 2962
        if (units === 'millisecond') {                                                                                 // 2963
            return this.valueOf() > localInput.valueOf();                                                              // 2964
        } else {                                                                                                       // 2965
            return localInput.valueOf() < this.clone().startOf(units).valueOf();                                       // 2966
        }                                                                                                              // 2967
    }                                                                                                                  // 2968
                                                                                                                       // 2969
    function isBefore (input, units) {                                                                                 // 2970
        var localInput = isMoment(input) ? input : local__createLocal(input);                                          // 2971
        if (!(this.isValid() && localInput.isValid())) {                                                               // 2972
            return false;                                                                                              // 2973
        }                                                                                                              // 2974
        units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');                                           // 2975
        if (units === 'millisecond') {                                                                                 // 2976
            return this.valueOf() < localInput.valueOf();                                                              // 2977
        } else {                                                                                                       // 2978
            return this.clone().endOf(units).valueOf() < localInput.valueOf();                                         // 2979
        }                                                                                                              // 2980
    }                                                                                                                  // 2981
                                                                                                                       // 2982
    function isBetween (from, to, units, inclusivity) {                                                                // 2983
        inclusivity = inclusivity || '()';                                                                             // 2984
        return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&                   // 2985
            (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));                            // 2986
    }                                                                                                                  // 2987
                                                                                                                       // 2988
    function isSame (input, units) {                                                                                   // 2989
        var localInput = isMoment(input) ? input : local__createLocal(input),                                          // 2990
            inputMs;                                                                                                   // 2991
        if (!(this.isValid() && localInput.isValid())) {                                                               // 2992
            return false;                                                                                              // 2993
        }                                                                                                              // 2994
        units = normalizeUnits(units || 'millisecond');                                                                // 2995
        if (units === 'millisecond') {                                                                                 // 2996
            return this.valueOf() === localInput.valueOf();                                                            // 2997
        } else {                                                                                                       // 2998
            inputMs = localInput.valueOf();                                                                            // 2999
            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
        }                                                                                                              // 3001
    }                                                                                                                  // 3002
                                                                                                                       // 3003
    function isSameOrAfter (input, units) {                                                                            // 3004
        return this.isSame(input, units) || this.isAfter(input,units);                                                 // 3005
    }                                                                                                                  // 3006
                                                                                                                       // 3007
    function isSameOrBefore (input, units) {                                                                           // 3008
        return this.isSame(input, units) || this.isBefore(input,units);                                                // 3009
    }                                                                                                                  // 3010
                                                                                                                       // 3011
    function diff (input, units, asFloat) {                                                                            // 3012
        var that,                                                                                                      // 3013
            zoneDelta,                                                                                                 // 3014
            delta, output;                                                                                             // 3015
                                                                                                                       // 3016
        if (!this.isValid()) {                                                                                         // 3017
            return NaN;                                                                                                // 3018
        }                                                                                                              // 3019
                                                                                                                       // 3020
        that = cloneWithOffset(input, this);                                                                           // 3021
                                                                                                                       // 3022
        if (!that.isValid()) {                                                                                         // 3023
            return NaN;                                                                                                // 3024
        }                                                                                                              // 3025
                                                                                                                       // 3026
        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;                                                       // 3027
                                                                                                                       // 3028
        units = normalizeUnits(units);                                                                                 // 3029
                                                                                                                       // 3030
        if (units === 'year' || units === 'month' || units === 'quarter') {                                            // 3031
            output = monthDiff(this, that);                                                                            // 3032
            if (units === 'quarter') {                                                                                 // 3033
                output = output / 3;                                                                                   // 3034
            } else if (units === 'year') {                                                                             // 3035
                output = output / 12;                                                                                  // 3036
            }                                                                                                          // 3037
        } else {                                                                                                       // 3038
            delta = this - that;                                                                                       // 3039
            output = units === 'second' ? delta / 1e3 : // 1000                                                        // 3040
                units === 'minute' ? delta / 6e4 : // 1000 * 60                                                        // 3041
                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60                                                    // 3042
                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst                     // 3043
                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst               // 3044
                delta;                                                                                                 // 3045
        }                                                                                                              // 3046
        return asFloat ? output : absFloor(output);                                                                    // 3047
    }                                                                                                                  // 3048
                                                                                                                       // 3049
    function monthDiff (a, b) {                                                                                        // 3050
        // difference in months                                                                                        // 3051
        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),                                   // 3052
            // b is in (anchor - 1 month, anchor + 1 month)                                                            // 3053
            anchor = a.clone().add(wholeMonthDiff, 'months'),                                                          // 3054
            anchor2, adjust;                                                                                           // 3055
                                                                                                                       // 3056
        if (b - anchor < 0) {                                                                                          // 3057
            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');                                                     // 3058
            // linear across the month                                                                                 // 3059
            adjust = (b - anchor) / (anchor - anchor2);                                                                // 3060
        } else {                                                                                                       // 3061
            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');                                                     // 3062
            // linear across the month                                                                                 // 3063
            adjust = (b - anchor) / (anchor2 - anchor);                                                                // 3064
        }                                                                                                              // 3065
                                                                                                                       // 3066
        //check for negative zero, return zero if negative zero                                                        // 3067
        return -(wholeMonthDiff + adjust) || 0;                                                                        // 3068
    }                                                                                                                  // 3069
                                                                                                                       // 3070
    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';                                                         // 3071
    utils_hooks__hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';                                                    // 3072
                                                                                                                       // 3073
    function toString () {                                                                                             // 3074
        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');                                   // 3075
    }                                                                                                                  // 3076
                                                                                                                       // 3077
    function moment_format__toISOString () {                                                                           // 3078
        var m = this.clone().utc();                                                                                    // 3079
        if (0 < m.year() && m.year() <= 9999) {                                                                        // 3080
            if (isFunction(Date.prototype.toISOString)) {                                                              // 3081
                // native implementation is ~50x faster, use it when we can                                            // 3082
                return this.toDate().toISOString();                                                                    // 3083
            } else {                                                                                                   // 3084
                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');                                                // 3085
            }                                                                                                          // 3086
        } else {                                                                                                       // 3087
            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');                                                  // 3088
        }                                                                                                              // 3089
    }                                                                                                                  // 3090
                                                                                                                       // 3091
    function format (inputString) {                                                                                    // 3092
        if (!inputString) {                                                                                            // 3093
            inputString = this.isUtc() ? utils_hooks__hooks.defaultFormatUtc : utils_hooks__hooks.defaultFormat;       // 3094
        }                                                                                                              // 3095
        var output = formatMoment(this, inputString);                                                                  // 3096
        return this.localeData().postformat(output);                                                                   // 3097
    }                                                                                                                  // 3098
                                                                                                                       // 3099
    function from (time, withoutSuffix) {                                                                              // 3100
        if (this.isValid() &&                                                                                          // 3101
                ((isMoment(time) && time.isValid()) ||                                                                 // 3102
                 local__createLocal(time).isValid())) {                                                                // 3103
            return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);      // 3104
        } else {                                                                                                       // 3105
            return this.localeData().invalidDate();                                                                    // 3106
        }                                                                                                              // 3107
    }                                                                                                                  // 3108
                                                                                                                       // 3109
    function fromNow (withoutSuffix) {                                                                                 // 3110
        return this.from(local__createLocal(), withoutSuffix);                                                         // 3111
    }                                                                                                                  // 3112
                                                                                                                       // 3113
    function to (time, withoutSuffix) {                                                                                // 3114
        if (this.isValid() &&                                                                                          // 3115
                ((isMoment(time) && time.isValid()) ||                                                                 // 3116
                 local__createLocal(time).isValid())) {                                                                // 3117
            return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);      // 3118
        } else {                                                                                                       // 3119
            return this.localeData().invalidDate();                                                                    // 3120
        }                                                                                                              // 3121
    }                                                                                                                  // 3122
                                                                                                                       // 3123
    function toNow (withoutSuffix) {                                                                                   // 3124
        return this.to(local__createLocal(), withoutSuffix);                                                           // 3125
    }                                                                                                                  // 3126
                                                                                                                       // 3127
    // If passed a locale key, it will set the locale for this                                                         // 3128
    // instance.  Otherwise, it will return the locale configuration                                                   // 3129
    // variables for this instance.                                                                                    // 3130
    function locale (key) {                                                                                            // 3131
        var newLocaleData;                                                                                             // 3132
                                                                                                                       // 3133
        if (key === undefined) {                                                                                       // 3134
            return this._locale._abbr;                                                                                 // 3135
        } else {                                                                                                       // 3136
            newLocaleData = locale_locales__getLocale(key);                                                            // 3137
            if (newLocaleData != null) {                                                                               // 3138
                this._locale = newLocaleData;                                                                          // 3139
            }                                                                                                          // 3140
            return this;                                                                                               // 3141
        }                                                                                                              // 3142
    }                                                                                                                  // 3143
                                                                                                                       // 3144
    var lang = deprecate(                                                                                              // 3145
        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
        function (key) {                                                                                               // 3147
            if (key === undefined) {                                                                                   // 3148
                return this.localeData();                                                                              // 3149
            } else {                                                                                                   // 3150
                return this.locale(key);                                                                               // 3151
            }                                                                                                          // 3152
        }                                                                                                              // 3153
    );                                                                                                                 // 3154
                                                                                                                       // 3155
    function localeData () {                                                                                           // 3156
        return this._locale;                                                                                           // 3157
    }                                                                                                                  // 3158
                                                                                                                       // 3159
    function startOf (units) {                                                                                         // 3160
        units = normalizeUnits(units);                                                                                 // 3161
        // the following switch intentionally omits break keywords                                                     // 3162
        // to utilize falling through the cases.                                                                       // 3163
        switch (units) {                                                                                               // 3164
            case 'year':                                                                                               // 3165
                this.month(0);                                                                                         // 3166
                /* falls through */                                                                                    // 3167
            case 'quarter':                                                                                            // 3168
            case 'month':                                                                                              // 3169
                this.date(1);                                                                                          // 3170
                /* falls through */                                                                                    // 3171
            case 'week':                                                                                               // 3172
            case 'isoWeek':                                                                                            // 3173
            case 'day':                                                                                                // 3174
            case 'date':                                                                                               // 3175
                this.hours(0);                                                                                         // 3176
                /* falls through */                                                                                    // 3177
            case 'hour':                                                                                               // 3178
                this.minutes(0);                                                                                       // 3179
                /* falls through */                                                                                    // 3180
            case 'minute':                                                                                             // 3181
                this.seconds(0);                                                                                       // 3182
                /* falls through */                                                                                    // 3183
            case 'second':                                                                                             // 3184
                this.milliseconds(0);                                                                                  // 3185
        }                                                                                                              // 3186
                                                                                                                       // 3187
        // weeks are a special case                                                                                    // 3188
        if (units === 'week') {                                                                                        // 3189
            this.weekday(0);                                                                                           // 3190
        }                                                                                                              // 3191
        if (units === 'isoWeek') {                                                                                     // 3192
            this.isoWeekday(1);                                                                                        // 3193
        }                                                                                                              // 3194
                                                                                                                       // 3195
        // quarters are also special                                                                                   // 3196
        if (units === 'quarter') {                                                                                     // 3197
            this.month(Math.floor(this.month() / 3) * 3);                                                              // 3198
        }                                                                                                              // 3199
                                                                                                                       // 3200
        return this;                                                                                                   // 3201
    }                                                                                                                  // 3202
                                                                                                                       // 3203
    function endOf (units) {                                                                                           // 3204
        units = normalizeUnits(units);                                                                                 // 3205
        if (units === undefined || units === 'millisecond') {                                                          // 3206
            return this;                                                                                               // 3207
        }                                                                                                              // 3208
                                                                                                                       // 3209
        // 'date' is an alias for 'day', so it should be considered as such.                                           // 3210
        if (units === 'date') {                                                                                        // 3211
            units = 'day';                                                                                             // 3212
        }                                                                                                              // 3213
                                                                                                                       // 3214
        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');                   // 3215
    }                                                                                                                  // 3216
                                                                                                                       // 3217
    function to_type__valueOf () {                                                                                     // 3218
        return this._d.valueOf() - ((this._offset || 0) * 60000);                                                      // 3219
    }                                                                                                                  // 3220
                                                                                                                       // 3221
    function unix () {                                                                                                 // 3222
        return Math.floor(this.valueOf() / 1000);                                                                      // 3223
    }                                                                                                                  // 3224
                                                                                                                       // 3225
    function toDate () {                                                                                               // 3226
        return new Date(this.valueOf());                                                                               // 3227
    }                                                                                                                  // 3228
                                                                                                                       // 3229
    function toArray () {                                                                                              // 3230
        var m = this;                                                                                                  // 3231
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];                     // 3232
    }                                                                                                                  // 3233
                                                                                                                       // 3234
    function toObject () {                                                                                             // 3235
        var m = this;                                                                                                  // 3236
        return {                                                                                                       // 3237
            years: m.year(),                                                                                           // 3238
            months: m.month(),                                                                                         // 3239
            date: m.date(),                                                                                            // 3240
            hours: m.hours(),                                                                                          // 3241
            minutes: m.minutes(),                                                                                      // 3242
            seconds: m.seconds(),                                                                                      // 3243
            milliseconds: m.milliseconds()                                                                             // 3244
        };                                                                                                             // 3245
    }                                                                                                                  // 3246
                                                                                                                       // 3247
    function toJSON () {                                                                                               // 3248
        // new Date(NaN).toJSON() === null                                                                             // 3249
        return this.isValid() ? this.toISOString() : null;                                                             // 3250
    }                                                                                                                  // 3251
                                                                                                                       // 3252
    function moment_valid__isValid () {                                                                                // 3253
        return valid__isValid(this);                                                                                   // 3254
    }                                                                                                                  // 3255
                                                                                                                       // 3256
    function parsingFlags () {                                                                                         // 3257
        return extend({}, getParsingFlags(this));                                                                      // 3258
    }                                                                                                                  // 3259
                                                                                                                       // 3260
    function invalidAt () {                                                                                            // 3261
        return getParsingFlags(this).overflow;                                                                         // 3262
    }                                                                                                                  // 3263
                                                                                                                       // 3264
    function creationData() {                                                                                          // 3265
        return {                                                                                                       // 3266
            input: this._i,                                                                                            // 3267
            format: this._f,                                                                                           // 3268
            locale: this._locale,                                                                                      // 3269
            isUTC: this._isUTC,                                                                                        // 3270
            strict: this._strict                                                                                       // 3271
        };                                                                                                             // 3272
    }                                                                                                                  // 3273
                                                                                                                       // 3274
    // FORMATTING                                                                                                      // 3275
                                                                                                                       // 3276
    addFormatToken(0, ['gg', 2], 0, function () {                                                                      // 3277
        return this.weekYear() % 100;                                                                                  // 3278
    });                                                                                                                // 3279
                                                                                                                       // 3280
    addFormatToken(0, ['GG', 2], 0, function () {                                                                      // 3281
        return this.isoWeekYear() % 100;                                                                               // 3282
    });                                                                                                                // 3283
                                                                                                                       // 3284
    function addWeekYearFormatToken (token, getter) {                                                                  // 3285
        addFormatToken(0, [token, token.length], 0, getter);                                                           // 3286
    }                                                                                                                  // 3287
                                                                                                                       // 3288
    addWeekYearFormatToken('gggg',     'weekYear');                                                                    // 3289
    addWeekYearFormatToken('ggggg',    'weekYear');                                                                    // 3290
    addWeekYearFormatToken('GGGG',  'isoWeekYear');                                                                    // 3291
    addWeekYearFormatToken('GGGGG', 'isoWeekYear');                                                                    // 3292
                                                                                                                       // 3293
    // ALIASES                                                                                                         // 3294
                                                                                                                       // 3295
    addUnitAlias('weekYear', 'gg');                                                                                    // 3296
    addUnitAlias('isoWeekYear', 'GG');                                                                                 // 3297
                                                                                                                       // 3298
    // PRIORITY                                                                                                        // 3299
                                                                                                                       // 3300
    addUnitPriority('weekYear', 1);                                                                                    // 3301
    addUnitPriority('isoWeekYear', 1);                                                                                 // 3302
                                                                                                                       // 3303
                                                                                                                       // 3304
    // PARSING                                                                                                         // 3305
                                                                                                                       // 3306
    addRegexToken('G',      matchSigned);                                                                              // 3307
    addRegexToken('g',      matchSigned);                                                                              // 3308
    addRegexToken('GG',     match1to2, match2);                                                                        // 3309
    addRegexToken('gg',     match1to2, match2);                                                                        // 3310
    addRegexToken('GGGG',   match1to4, match4);                                                                        // 3311
    addRegexToken('gggg',   match1to4, match4);                                                                        // 3312
    addRegexToken('GGGGG',  match1to6, match6);                                                                        // 3313
    addRegexToken('ggggg',  match1to6, match6);                                                                        // 3314
                                                                                                                       // 3315
    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {                      // 3316
        week[token.substr(0, 2)] = toInt(input);                                                                       // 3317
    });                                                                                                                // 3318
                                                                                                                       // 3319
    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {                                            // 3320
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);                                                     // 3321
    });                                                                                                                // 3322
                                                                                                                       // 3323
    // MOMENTS                                                                                                         // 3324
                                                                                                                       // 3325
    function getSetWeekYear (input) {                                                                                  // 3326
        return getSetWeekYearHelper.call(this,                                                                         // 3327
                input,                                                                                                 // 3328
                this.week(),                                                                                           // 3329
                this.weekday(),                                                                                        // 3330
                this.localeData()._week.dow,                                                                           // 3331
                this.localeData()._week.doy);                                                                          // 3332
    }                                                                                                                  // 3333
                                                                                                                       // 3334
    function getSetISOWeekYear (input) {                                                                               // 3335
        return getSetWeekYearHelper.call(this,                                                                         // 3336
                input, this.isoWeek(), this.isoWeekday(), 1, 4);                                                       // 3337
    }                                                                                                                  // 3338
                                                                                                                       // 3339
    function getISOWeeksInYear () {                                                                                    // 3340
        return weeksInYear(this.year(), 1, 4);                                                                         // 3341
    }                                                                                                                  // 3342
                                                                                                                       // 3343
    function getWeeksInYear () {                                                                                       // 3344
        var weekInfo = this.localeData()._week;                                                                        // 3345
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);                                                   // 3346
    }                                                                                                                  // 3347
                                                                                                                       // 3348
    function getSetWeekYearHelper(input, week, weekday, dow, doy) {                                                    // 3349
        var weeksTarget;                                                                                               // 3350
        if (input == null) {                                                                                           // 3351
            return weekOfYear(this, dow, doy).year;                                                                    // 3352
        } else {                                                                                                       // 3353
            weeksTarget = weeksInYear(input, dow, doy);                                                                // 3354
            if (week > weeksTarget) {                                                                                  // 3355
                week = weeksTarget;                                                                                    // 3356
            }                                                                                                          // 3357
            return setWeekAll.call(this, input, week, weekday, dow, doy);                                              // 3358
        }                                                                                                              // 3359
    }                                                                                                                  // 3360
                                                                                                                       // 3361
    function setWeekAll(weekYear, week, weekday, dow, doy) {                                                           // 3362
        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),                                     // 3363
            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);                                      // 3364
                                                                                                                       // 3365
        this.year(date.getUTCFullYear());                                                                              // 3366
        this.month(date.getUTCMonth());                                                                                // 3367
        this.date(date.getUTCDate());                                                                                  // 3368
        return this;                                                                                                   // 3369
    }                                                                                                                  // 3370
                                                                                                                       // 3371
    // FORMATTING                                                                                                      // 3372
                                                                                                                       // 3373
    addFormatToken('Q', 0, 'Qo', 'quarter');                                                                           // 3374
                                                                                                                       // 3375
    // ALIASES                                                                                                         // 3376
                                                                                                                       // 3377
    addUnitAlias('quarter', 'Q');                                                                                      // 3378
                                                                                                                       // 3379
    // PRIORITY                                                                                                        // 3380
                                                                                                                       // 3381
    addUnitPriority('quarter', 7);                                                                                     // 3382
                                                                                                                       // 3383
    // PARSING                                                                                                         // 3384
                                                                                                                       // 3385
    addRegexToken('Q', match1);                                                                                        // 3386
    addParseToken('Q', function (input, array) {                                                                       // 3387
        array[MONTH] = (toInt(input) - 1) * 3;                                                                         // 3388
    });                                                                                                                // 3389
                                                                                                                       // 3390
    // MOMENTS                                                                                                         // 3391
                                                                                                                       // 3392
    function getSetQuarter (input) {                                                                                   // 3393
        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);     // 3394
    }                                                                                                                  // 3395
                                                                                                                       // 3396
    // FORMATTING                                                                                                      // 3397
                                                                                                                       // 3398
    addFormatToken('D', ['DD', 2], 'Do', 'date');                                                                      // 3399
                                                                                                                       // 3400
    // ALIASES                                                                                                         // 3401
                                                                                                                       // 3402
    addUnitAlias('date', 'D');                                                                                         // 3403
                                                                                                                       // 3404
    // PRIOROITY                                                                                                       // 3405
    addUnitPriority('date', 9);                                                                                        // 3406
                                                                                                                       // 3407
    // PARSING                                                                                                         // 3408
                                                                                                                       // 3409
    addRegexToken('D',  match1to2);                                                                                    // 3410
    addRegexToken('DD', match1to2, match2);                                                                            // 3411
    addRegexToken('Do', function (isStrict, locale) {                                                                  // 3412
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;                                          // 3413
    });                                                                                                                // 3414
                                                                                                                       // 3415
    addParseToken(['D', 'DD'], DATE);                                                                                  // 3416
    addParseToken('Do', function (input, array) {                                                                      // 3417
        array[DATE] = toInt(input.match(match1to2)[0], 10);                                                            // 3418
    });                                                                                                                // 3419
                                                                                                                       // 3420
    // MOMENTS                                                                                                         // 3421
                                                                                                                       // 3422
    var getSetDayOfMonth = makeGetSet('Date', true);                                                                   // 3423
                                                                                                                       // 3424
    // FORMATTING                                                                                                      // 3425
                                                                                                                       // 3426
    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');                                                           // 3427
                                                                                                                       // 3428
    // ALIASES                                                                                                         // 3429
                                                                                                                       // 3430
    addUnitAlias('dayOfYear', 'DDD');                                                                                  // 3431
                                                                                                                       // 3432
    // PRIORITY                                                                                                        // 3433
    addUnitPriority('dayOfYear', 4);                                                                                   // 3434
                                                                                                                       // 3435
    // PARSING                                                                                                         // 3436
                                                                                                                       // 3437
    addRegexToken('DDD',  match1to3);                                                                                  // 3438
    addRegexToken('DDDD', match3);                                                                                     // 3439
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {                                                   // 3440
        config._dayOfYear = toInt(input);                                                                              // 3441
    });                                                                                                                // 3442
                                                                                                                       // 3443
    // HELPERS                                                                                                         // 3444
                                                                                                                       // 3445
    // MOMENTS                                                                                                         // 3446
                                                                                                                       // 3447
    function getSetDayOfYear (input) {                                                                                 // 3448
        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;          // 3449
        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');                                         // 3450
    }                                                                                                                  // 3451
                                                                                                                       // 3452
    // FORMATTING                                                                                                      // 3453
                                                                                                                       // 3454
    addFormatToken('m', ['mm', 2], 0, 'minute');                                                                       // 3455
                                                                                                                       // 3456
    // ALIASES                                                                                                         // 3457
                                                                                                                       // 3458
    addUnitAlias('minute', 'm');                                                                                       // 3459
                                                                                                                       // 3460
    // PRIORITY                                                                                                        // 3461
                                                                                                                       // 3462
    addUnitPriority('minute', 14);                                                                                     // 3463
                                                                                                                       // 3464
    // PARSING                                                                                                         // 3465
                                                                                                                       // 3466
    addRegexToken('m',  match1to2);                                                                                    // 3467
    addRegexToken('mm', match1to2, match2);                                                                            // 3468
    addParseToken(['m', 'mm'], MINUTE);                                                                                // 3469
                                                                                                                       // 3470
    // MOMENTS                                                                                                         // 3471
                                                                                                                       // 3472
    var getSetMinute = makeGetSet('Minutes', false);                                                                   // 3473
                                                                                                                       // 3474
    // FORMATTING                                                                                                      // 3475
                                                                                                                       // 3476
    addFormatToken('s', ['ss', 2], 0, 'second');                                                                       // 3477
                                                                                                                       // 3478
    // ALIASES                                                                                                         // 3479
                                                                                                                       // 3480
    addUnitAlias('second', 's');                                                                                       // 3481
                                                                                                                       // 3482
    // PRIORITY                                                                                                        // 3483
                                                                                                                       // 3484
    addUnitPriority('second', 15);                                                                                     // 3485
                                                                                                                       // 3486
    // PARSING                                                                                                         // 3487
                                                                                                                       // 3488
    addRegexToken('s',  match1to2);                                                                                    // 3489
    addRegexToken('ss', match1to2, match2);                                                                            // 3490
    addParseToken(['s', 'ss'], SECOND);                                                                                // 3491
                                                                                                                       // 3492
    // MOMENTS                                                                                                         // 3493
                                                                                                                       // 3494
    var getSetSecond = makeGetSet('Seconds', false);                                                                   // 3495
                                                                                                                       // 3496
    // FORMATTING                                                                                                      // 3497
                                                                                                                       // 3498
    addFormatToken('S', 0, 0, function () {                                                                            // 3499
        return ~~(this.millisecond() / 100);                                                                           // 3500
    });                                                                                                                // 3501
                                                                                                                       // 3502
    addFormatToken(0, ['SS', 2], 0, function () {                                                                      // 3503
        return ~~(this.millisecond() / 10);                                                                            // 3504
    });                                                                                                                // 3505
                                                                                                                       // 3506
    addFormatToken(0, ['SSS', 3], 0, 'millisecond');                                                                   // 3507
    addFormatToken(0, ['SSSS', 4], 0, function () {                                                                    // 3508
        return this.millisecond() * 10;                                                                                // 3509
    });                                                                                                                // 3510
    addFormatToken(0, ['SSSSS', 5], 0, function () {                                                                   // 3511
        return this.millisecond() * 100;                                                                               // 3512
    });                                                                                                                // 3513
    addFormatToken(0, ['SSSSSS', 6], 0, function () {                                                                  // 3514
        return this.millisecond() * 1000;                                                                              // 3515
    });                                                                                                                // 3516
    addFormatToken(0, ['SSSSSSS', 7], 0, function () {                                                                 // 3517
        return this.millisecond() * 10000;                                                                             // 3518
    });                                                                                                                // 3519
    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {                                                                // 3520
        return this.millisecond() * 100000;                                                                            // 3521
    });                                                                                                                // 3522
    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {                                                               // 3523
        return this.millisecond() * 1000000;                                                                           // 3524
    });                                                                                                                // 3525
                                                                                                                       // 3526
                                                                                                                       // 3527
    // ALIASES                                                                                                         // 3528
                                                                                                                       // 3529
    addUnitAlias('millisecond', 'ms');                                                                                 // 3530
                                                                                                                       // 3531
    // PRIORITY                                                                                                        // 3532
                                                                                                                       // 3533
    addUnitPriority('millisecond', 16);                                                                                // 3534
                                                                                                                       // 3535
    // PARSING                                                                                                         // 3536
                                                                                                                       // 3537
    addRegexToken('S',    match1to3, match1);                                                                          // 3538
    addRegexToken('SS',   match1to3, match2);                                                                          // 3539
    addRegexToken('SSS',  match1to3, match3);                                                                          // 3540
                                                                                                                       // 3541
    var token;                                                                                                         // 3542
    for (token = 'SSSS'; token.length <= 9; token += 'S') {                                                            // 3543
        addRegexToken(token, matchUnsigned);                                                                           // 3544
    }                                                                                                                  // 3545
                                                                                                                       // 3546
    function parseMs(input, array) {                                                                                   // 3547
        array[MILLISECOND] = toInt(('0.' + input) * 1000);                                                             // 3548
    }                                                                                                                  // 3549
                                                                                                                       // 3550
    for (token = 'S'; token.length <= 9; token += 'S') {                                                               // 3551
        addParseToken(token, parseMs);                                                                                 // 3552
    }                                                                                                                  // 3553
    // MOMENTS                                                                                                         // 3554
                                                                                                                       // 3555
    var getSetMillisecond = makeGetSet('Milliseconds', false);                                                         // 3556
                                                                                                                       // 3557
    // FORMATTING                                                                                                      // 3558
                                                                                                                       // 3559
    addFormatToken('z',  0, 0, 'zoneAbbr');                                                                            // 3560
    addFormatToken('zz', 0, 0, 'zoneName');                                                                            // 3561
                                                                                                                       // 3562
    // MOMENTS                                                                                                         // 3563
                                                                                                                       // 3564
    function getZoneAbbr () {                                                                                          // 3565
        return this._isUTC ? 'UTC' : '';                                                                               // 3566
    }                                                                                                                  // 3567
                                                                                                                       // 3568
    function getZoneName () {                                                                                          // 3569
        return this._isUTC ? 'Coordinated Universal Time' : '';                                                        // 3570
    }                                                                                                                  // 3571
                                                                                                                       // 3572
    var momentPrototype__proto = Moment.prototype;                                                                     // 3573
                                                                                                                       // 3574
    momentPrototype__proto.add               = add_subtract__add;                                                      // 3575
    momentPrototype__proto.calendar          = moment_calendar__calendar;                                              // 3576
    momentPrototype__proto.clone             = clone;                                                                  // 3577
    momentPrototype__proto.diff              = diff;                                                                   // 3578
    momentPrototype__proto.endOf             = endOf;                                                                  // 3579
    momentPrototype__proto.format            = format;                                                                 // 3580
    momentPrototype__proto.from              = from;                                                                   // 3581
    momentPrototype__proto.fromNow           = fromNow;                                                                // 3582
    momentPrototype__proto.to                = to;                                                                     // 3583
    momentPrototype__proto.toNow             = toNow;                                                                  // 3584
    momentPrototype__proto.get               = stringGet;                                                              // 3585
    momentPrototype__proto.invalidAt         = invalidAt;                                                              // 3586
    momentPrototype__proto.isAfter           = isAfter;                                                                // 3587
    momentPrototype__proto.isBefore          = isBefore;                                                               // 3588
    momentPrototype__proto.isBetween         = isBetween;                                                              // 3589
    momentPrototype__proto.isSame            = isSame;                                                                 // 3590
    momentPrototype__proto.isSameOrAfter     = isSameOrAfter;                                                          // 3591
    momentPrototype__proto.isSameOrBefore    = isSameOrBefore;                                                         // 3592
    momentPrototype__proto.isValid           = moment_valid__isValid;                                                  // 3593
    momentPrototype__proto.lang              = lang;                                                                   // 3594
    momentPrototype__proto.locale            = locale;                                                                 // 3595
    momentPrototype__proto.localeData        = localeData;                                                             // 3596
    momentPrototype__proto.max               = prototypeMax;                                                           // 3597
    momentPrototype__proto.min               = prototypeMin;                                                           // 3598
    momentPrototype__proto.parsingFlags      = parsingFlags;                                                           // 3599
    momentPrototype__proto.set               = stringSet;                                                              // 3600
    momentPrototype__proto.startOf           = startOf;                                                                // 3601
    momentPrototype__proto.subtract          = add_subtract__subtract;                                                 // 3602
    momentPrototype__proto.toArray           = toArray;                                                                // 3603
    momentPrototype__proto.toObject          = toObject;                                                               // 3604
    momentPrototype__proto.toDate            = toDate;                                                                 // 3605
    momentPrototype__proto.toISOString       = moment_format__toISOString;                                             // 3606
    momentPrototype__proto.toJSON            = toJSON;                                                                 // 3607
    momentPrototype__proto.toString          = toString;                                                               // 3608
    momentPrototype__proto.unix              = unix;                                                                   // 3609
    momentPrototype__proto.valueOf           = to_type__valueOf;                                                       // 3610
    momentPrototype__proto.creationData      = creationData;                                                           // 3611
                                                                                                                       // 3612
    // Year                                                                                                            // 3613
    momentPrototype__proto.year       = getSetYear;                                                                    // 3614
    momentPrototype__proto.isLeapYear = getIsLeapYear;                                                                 // 3615
                                                                                                                       // 3616
    // Week Year                                                                                                       // 3617
    momentPrototype__proto.weekYear    = getSetWeekYear;                                                               // 3618
    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;                                                            // 3619
                                                                                                                       // 3620
    // Quarter                                                                                                         // 3621
    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;                                  // 3622
                                                                                                                       // 3623
    // Month                                                                                                           // 3624
    momentPrototype__proto.month       = getSetMonth;                                                                  // 3625
    momentPrototype__proto.daysInMonth = getDaysInMonth;                                                               // 3626
                                                                                                                       // 3627
    // Week                                                                                                            // 3628
    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;                          // 3629
    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;                       // 3630
    momentPrototype__proto.weeksInYear    = getWeeksInYear;                                                            // 3631
    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;                                                         // 3632
                                                                                                                       // 3633
    // Day                                                                                                             // 3634
    momentPrototype__proto.date       = getSetDayOfMonth;                                                              // 3635
    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;                     // 3636
    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;                                                         // 3637
    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;                                                            // 3638
    momentPrototype__proto.dayOfYear  = getSetDayOfYear;                                                               // 3639
                                                                                                                       // 3640
    // Hour                                                                                                            // 3641
    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;                                           // 3642
                                                                                                                       // 3643
    // Minute                                                                                                          // 3644
    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;                                     // 3645
                                                                                                                       // 3646
    // Second                                                                                                          // 3647
    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;                                     // 3648
                                                                                                                       // 3649
    // Millisecond                                                                                                     // 3650
    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;                      // 3651
                                                                                                                       // 3652
    // Offset                                                                                                          // 3653
    momentPrototype__proto.utcOffset            = getSetOffset;                                                        // 3654
    momentPrototype__proto.utc                  = setOffsetToUTC;                                                      // 3655
    momentPrototype__proto.local                = setOffsetToLocal;                                                    // 3656
    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;                                             // 3657
    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;                                                // 3658
    momentPrototype__proto.isDST                = isDaylightSavingTime;                                                // 3659
    momentPrototype__proto.isLocal              = isLocal;                                                             // 3660
    momentPrototype__proto.isUtcOffset          = isUtcOffset;                                                         // 3661
    momentPrototype__proto.isUtc                = isUtc;                                                               // 3662
    momentPrototype__proto.isUTC                = isUtc;                                                               // 3663
                                                                                                                       // 3664
    // Timezone                                                                                                        // 3665
    momentPrototype__proto.zoneAbbr = getZoneAbbr;                                                                     // 3666
    momentPrototype__proto.zoneName = getZoneName;                                                                     // 3667
                                                                                                                       // 3668
    // Deprecations                                                                                                    // 3669
    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);    // 3670
    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);        // 3671
    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);           // 3672
    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
    momentPrototype__proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
                                                                                                                       // 3675
    var momentPrototype = momentPrototype__proto;                                                                      // 3676
                                                                                                                       // 3677
    function moment__createUnix (input) {                                                                              // 3678
        return local__createLocal(input * 1000);                                                                       // 3679
    }                                                                                                                  // 3680
                                                                                                                       // 3681
    function moment__createInZone () {                                                                                 // 3682
        return local__createLocal.apply(null, arguments).parseZone();                                                  // 3683
    }                                                                                                                  // 3684
                                                                                                                       // 3685
    function preParsePostFormat (string) {                                                                             // 3686
        return string;                                                                                                 // 3687
    }                                                                                                                  // 3688
                                                                                                                       // 3689
    var prototype__proto = Locale.prototype;                                                                           // 3690
                                                                                                                       // 3691
    prototype__proto.calendar        = locale_calendar__calendar;                                                      // 3692
    prototype__proto.longDateFormat  = longDateFormat;                                                                 // 3693
    prototype__proto.invalidDate     = invalidDate;                                                                    // 3694
    prototype__proto.ordinal         = ordinal;                                                                        // 3695
    prototype__proto.preparse        = preParsePostFormat;                                                             // 3696
    prototype__proto.postformat      = preParsePostFormat;                                                             // 3697
    prototype__proto.relativeTime    = relative__relativeTime;                                                         // 3698
    prototype__proto.pastFuture      = pastFuture;                                                                     // 3699
    prototype__proto.set             = locale_set__set;                                                                // 3700
                                                                                                                       // 3701
    // Month                                                                                                           // 3702
    prototype__proto.months            =        localeMonths;                                                          // 3703
    prototype__proto.monthsShort       =        localeMonthsShort;                                                     // 3704
    prototype__proto.monthsParse       =        localeMonthsParse;                                                     // 3705
    prototype__proto.monthsRegex       = monthsRegex;                                                                  // 3706
    prototype__proto.monthsShortRegex  = monthsShortRegex;                                                             // 3707
                                                                                                                       // 3708
    // Week                                                                                                            // 3709
    prototype__proto.week = localeWeek;                                                                                // 3710
    prototype__proto.firstDayOfYear = localeFirstDayOfYear;                                                            // 3711
    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;                                                            // 3712
                                                                                                                       // 3713
    // Day of Week                                                                                                     // 3714
    prototype__proto.weekdays       =        localeWeekdays;                                                           // 3715
    prototype__proto.weekdaysMin    =        localeWeekdaysMin;                                                        // 3716
    prototype__proto.weekdaysShort  =        localeWeekdaysShort;                                                      // 3717
    prototype__proto.weekdaysParse  =        localeWeekdaysParse;                                                      // 3718
                                                                                                                       // 3719
    prototype__proto.weekdaysRegex       =        weekdaysRegex;                                                       // 3720
    prototype__proto.weekdaysShortRegex  =        weekdaysShortRegex;                                                  // 3721
    prototype__proto.weekdaysMinRegex    =        weekdaysMinRegex;                                                    // 3722
                                                                                                                       // 3723
    // Hours                                                                                                           // 3724
    prototype__proto.isPM = localeIsPM;                                                                                // 3725
    prototype__proto.meridiem = localeMeridiem;                                                                        // 3726
                                                                                                                       // 3727
    function lists__get (format, index, field, setter) {                                                               // 3728
        var locale = locale_locales__getLocale();                                                                      // 3729
        var utc = create_utc__createUTC().set(setter, index);                                                          // 3730
        return locale[field](utc, format);                                                                             // 3731
    }                                                                                                                  // 3732
                                                                                                                       // 3733
    function listMonthsImpl (format, index, field) {                                                                   // 3734
        if (typeof format === 'number') {                                                                              // 3735
            index = format;                                                                                            // 3736
            format = undefined;                                                                                        // 3737
        }                                                                                                              // 3738
                                                                                                                       // 3739
        format = format || '';                                                                                         // 3740
                                                                                                                       // 3741
        if (index != null) {                                                                                           // 3742
            return lists__get(format, index, field, 'month');                                                          // 3743
        }                                                                                                              // 3744
                                                                                                                       // 3745
        var i;                                                                                                         // 3746
        var out = [];                                                                                                  // 3747
        for (i = 0; i < 12; i++) {                                                                                     // 3748
            out[i] = lists__get(format, i, field, 'month');                                                            // 3749
        }                                                                                                              // 3750
        return out;                                                                                                    // 3751
    }                                                                                                                  // 3752
                                                                                                                       // 3753
    // ()                                                                                                              // 3754
    // (5)                                                                                                             // 3755
    // (fmt, 5)                                                                                                        // 3756
    // (fmt)                                                                                                           // 3757
    // (true)                                                                                                          // 3758
    // (true, 5)                                                                                                       // 3759
    // (true, fmt, 5)                                                                                                  // 3760
    // (true, fmt)                                                                                                     // 3761
    function listWeekdaysImpl (localeSorted, format, index, field) {                                                   // 3762
        if (typeof localeSorted === 'boolean') {                                                                       // 3763
            if (typeof format === 'number') {                                                                          // 3764
                index = format;                                                                                        // 3765
                format = undefined;                                                                                    // 3766
            }                                                                                                          // 3767
                                                                                                                       // 3768
            format = format || '';                                                                                     // 3769
        } else {                                                                                                       // 3770
            format = localeSorted;                                                                                     // 3771
            index = format;                                                                                            // 3772
            localeSorted = false;                                                                                      // 3773
                                                                                                                       // 3774
            if (typeof format === 'number') {                                                                          // 3775
                index = format;                                                                                        // 3776
                format = undefined;                                                                                    // 3777
            }                                                                                                          // 3778
                                                                                                                       // 3779
            format = format || '';                                                                                     // 3780
        }                                                                                                              // 3781
                                                                                                                       // 3782
        var locale = locale_locales__getLocale(),                                                                      // 3783
            shift = localeSorted ? locale._week.dow : 0;                                                               // 3784
                                                                                                                       // 3785
        if (index != null) {                                                                                           // 3786
            return lists__get(format, (index + shift) % 7, field, 'day');                                              // 3787
        }                                                                                                              // 3788
                                                                                                                       // 3789
        var i;                                                                                                         // 3790
        var out = [];                                                                                                  // 3791
        for (i = 0; i < 7; i++) {                                                                                      // 3792
            out[i] = lists__get(format, (i + shift) % 7, field, 'day');                                                // 3793
        }                                                                                                              // 3794
        return out;                                                                                                    // 3795
    }                                                                                                                  // 3796
                                                                                                                       // 3797
    function lists__listMonths (format, index) {                                                                       // 3798
        return listMonthsImpl(format, index, 'months');                                                                // 3799
    }                                                                                                                  // 3800
                                                                                                                       // 3801
    function lists__listMonthsShort (format, index) {                                                                  // 3802
        return listMonthsImpl(format, index, 'monthsShort');                                                           // 3803
    }                                                                                                                  // 3804
                                                                                                                       // 3805
    function lists__listWeekdays (localeSorted, format, index) {                                                       // 3806
        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');                                              // 3807
    }                                                                                                                  // 3808
                                                                                                                       // 3809
    function lists__listWeekdaysShort (localeSorted, format, index) {                                                  // 3810
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');                                         // 3811
    }                                                                                                                  // 3812
                                                                                                                       // 3813
    function lists__listWeekdaysMin (localeSorted, format, index) {                                                    // 3814
        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');                                           // 3815
    }                                                                                                                  // 3816
                                                                                                                       // 3817
    locale_locales__getSetGlobalLocale('en', {                                                                         // 3818
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,                                                                          // 3819
        ordinal : function (number) {                                                                                  // 3820
            var b = number % 10,                                                                                       // 3821
                output = (toInt(number % 100 / 10) === 1) ? 'th' :                                                     // 3822
                (b === 1) ? 'st' :                                                                                     // 3823
                (b === 2) ? 'nd' :                                                                                     // 3824
                (b === 3) ? 'rd' : 'th';                                                                               // 3825
            return number + output;                                                                                    // 3826
        }                                                                                                              // 3827
    });                                                                                                                // 3828
                                                                                                                       // 3829
    // Side effect imports                                                                                             // 3830
    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);
                                                                                                                       // 3833
    var mathAbs = Math.abs;                                                                                            // 3834
                                                                                                                       // 3835
    function duration_abs__abs () {                                                                                    // 3836
        var data           = this._data;                                                                               // 3837
                                                                                                                       // 3838
        this._milliseconds = mathAbs(this._milliseconds);                                                              // 3839
        this._days         = mathAbs(this._days);                                                                      // 3840
        this._months       = mathAbs(this._months);                                                                    // 3841
                                                                                                                       // 3842
        data.milliseconds  = mathAbs(data.milliseconds);                                                               // 3843
        data.seconds       = mathAbs(data.seconds);                                                                    // 3844
        data.minutes       = mathAbs(data.minutes);                                                                    // 3845
        data.hours         = mathAbs(data.hours);                                                                      // 3846
        data.months        = mathAbs(data.months);                                                                     // 3847
        data.years         = mathAbs(data.years);                                                                      // 3848
                                                                                                                       // 3849
        return this;                                                                                                   // 3850
    }                                                                                                                  // 3851
                                                                                                                       // 3852
    function duration_add_subtract__addSubtract (duration, input, value, direction) {                                  // 3853
        var other = create__createDuration(input, value);                                                              // 3854
                                                                                                                       // 3855
        duration._milliseconds += direction * other._milliseconds;                                                     // 3856
        duration._days         += direction * other._days;                                                             // 3857
        duration._months       += direction * other._months;                                                           // 3858
                                                                                                                       // 3859
        return duration._bubble();                                                                                     // 3860
    }                                                                                                                  // 3861
                                                                                                                       // 3862
    // supports only 2.0-style add(1, 's') or add(duration)                                                            // 3863
    function duration_add_subtract__add (input, value) {                                                               // 3864
        return duration_add_subtract__addSubtract(this, input, value, 1);                                              // 3865
    }                                                                                                                  // 3866
                                                                                                                       // 3867
    // supports only 2.0-style subtract(1, 's') or subtract(duration)                                                  // 3868
    function duration_add_subtract__subtract (input, value) {                                                          // 3869
        return duration_add_subtract__addSubtract(this, input, value, -1);                                             // 3870
    }                                                                                                                  // 3871
                                                                                                                       // 3872
    function absCeil (number) {                                                                                        // 3873
        if (number < 0) {                                                                                              // 3874
            return Math.floor(number);                                                                                 // 3875
        } else {                                                                                                       // 3876
            return Math.ceil(number);                                                                                  // 3877
        }                                                                                                              // 3878
    }                                                                                                                  // 3879
                                                                                                                       // 3880
    function bubble () {                                                                                               // 3881
        var milliseconds = this._milliseconds;                                                                         // 3882
        var days         = this._days;                                                                                 // 3883
        var months       = this._months;                                                                               // 3884
        var data         = this._data;                                                                                 // 3885
        var seconds, minutes, hours, years, monthsFromDays;                                                            // 3886
                                                                                                                       // 3887
        // if we have a mix of positive and negative values, bubble down first                                         // 3888
        // check: https://github.com/moment/moment/issues/2166                                                         // 3889
        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||                                                       // 3890
                (milliseconds <= 0 && days <= 0 && months <= 0))) {                                                    // 3891
            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;                                              // 3892
            days = 0;                                                                                                  // 3893
            months = 0;                                                                                                // 3894
        }                                                                                                              // 3895
                                                                                                                       // 3896
        // The following code bubbles up values, see the tests for                                                     // 3897
        // examples of what that means.                                                                                // 3898
        data.milliseconds = milliseconds % 1000;                                                                       // 3899
                                                                                                                       // 3900
        seconds           = absFloor(milliseconds / 1000);                                                             // 3901
        data.seconds      = seconds % 60;                                                                              // 3902
                                                                                                                       // 3903
        minutes           = absFloor(seconds / 60);                                                                    // 3904
        data.minutes      = minutes % 60;                                                                              // 3905
                                                                                                                       // 3906
        hours             = absFloor(minutes / 60);                                                                    // 3907
        data.hours        = hours % 24;                                                                                // 3908
                                                                                                                       // 3909
        days += absFloor(hours / 24);                                                                                  // 3910
                                                                                                                       // 3911
        // convert days to months                                                                                      // 3912
        monthsFromDays = absFloor(daysToMonths(days));                                                                 // 3913
        months += monthsFromDays;                                                                                      // 3914
        days -= absCeil(monthsToDays(monthsFromDays));                                                                 // 3915
                                                                                                                       // 3916
        // 12 months -> 1 year                                                                                         // 3917
        years = absFloor(months / 12);                                                                                 // 3918
        months %= 12;                                                                                                  // 3919
                                                                                                                       // 3920
        data.days   = days;                                                                                            // 3921
        data.months = months;                                                                                          // 3922
        data.years  = years;                                                                                           // 3923
                                                                                                                       // 3924
        return this;                                                                                                   // 3925
    }                                                                                                                  // 3926
                                                                                                                       // 3927
    function daysToMonths (days) {                                                                                     // 3928
        // 400 years have 146097 days (taking into account leap year rules)                                            // 3929
        // 400 years have 12 months === 4800                                                                           // 3930
        return days * 4800 / 146097;                                                                                   // 3931
    }                                                                                                                  // 3932
                                                                                                                       // 3933
    function monthsToDays (months) {                                                                                   // 3934
        // the reverse of daysToMonths                                                                                 // 3935
        return months * 146097 / 4800;                                                                                 // 3936
    }                                                                                                                  // 3937
                                                                                                                       // 3938
    function as (units) {                                                                                              // 3939
        var days;                                                                                                      // 3940
        var months;                                                                                                    // 3941
        var milliseconds = this._milliseconds;                                                                         // 3942
                                                                                                                       // 3943
        units = normalizeUnits(units);                                                                                 // 3944
                                                                                                                       // 3945
        if (units === 'month' || units === 'year') {                                                                   // 3946
            days   = this._days   + milliseconds / 864e5;                                                              // 3947
            months = this._months + daysToMonths(days);                                                                // 3948
            return units === 'month' ? months : months / 12;                                                           // 3949
        } else {                                                                                                       // 3950
            // handle milliseconds separately because of floating point math errors (issue #1867)                      // 3951
            days = this._days + Math.round(monthsToDays(this._months));                                                // 3952
            switch (units) {                                                                                           // 3953
                case 'week'   : return days / 7     + milliseconds / 6048e5;                                           // 3954
                case 'day'    : return days         + milliseconds / 864e5;                                            // 3955
                case 'hour'   : return days * 24    + milliseconds / 36e5;                                             // 3956
                case 'minute' : return days * 1440  + milliseconds / 6e4;                                              // 3957
                case 'second' : return days * 86400 + milliseconds / 1000;                                             // 3958
                // Math.floor prevents floating point math errors here                                                 // 3959
                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;                                    // 3960
                default: throw new Error('Unknown unit ' + units);                                                     // 3961
            }                                                                                                          // 3962
        }                                                                                                              // 3963
    }                                                                                                                  // 3964
                                                                                                                       // 3965
    // TODO: Use this.as('ms')?                                                                                        // 3966
    function duration_as__valueOf () {                                                                                 // 3967
        return (                                                                                                       // 3968
            this._milliseconds +                                                                                       // 3969
            this._days * 864e5 +                                                                                       // 3970
            (this._months % 12) * 2592e6 +                                                                             // 3971
            toInt(this._months / 12) * 31536e6                                                                         // 3972
        );                                                                                                             // 3973
    }                                                                                                                  // 3974
                                                                                                                       // 3975
    function makeAs (alias) {                                                                                          // 3976
        return function () {                                                                                           // 3977
            return this.as(alias);                                                                                     // 3978
        };                                                                                                             // 3979
    }                                                                                                                  // 3980
                                                                                                                       // 3981
    var asMilliseconds = makeAs('ms');                                                                                 // 3982
    var asSeconds      = makeAs('s');                                                                                  // 3983
    var asMinutes      = makeAs('m');                                                                                  // 3984
    var asHours        = makeAs('h');                                                                                  // 3985
    var asDays         = makeAs('d');                                                                                  // 3986
    var asWeeks        = makeAs('w');                                                                                  // 3987
    var asMonths       = makeAs('M');                                                                                  // 3988
    var asYears        = makeAs('y');                                                                                  // 3989
                                                                                                                       // 3990
    function duration_get__get (units) {                                                                               // 3991
        units = normalizeUnits(units);                                                                                 // 3992
        return this[units + 's']();                                                                                    // 3993
    }                                                                                                                  // 3994
                                                                                                                       // 3995
    function makeGetter(name) {                                                                                        // 3996
        return function () {                                                                                           // 3997
            return this._data[name];                                                                                   // 3998
        };                                                                                                             // 3999
    }                                                                                                                  // 4000
                                                                                                                       // 4001
    var milliseconds = makeGetter('milliseconds');                                                                     // 4002
    var seconds      = makeGetter('seconds');                                                                          // 4003
    var minutes      = makeGetter('minutes');                                                                          // 4004
    var hours        = makeGetter('hours');                                                                            // 4005
    var days         = makeGetter('days');                                                                             // 4006
    var months       = makeGetter('months');                                                                           // 4007
    var years        = makeGetter('years');                                                                            // 4008
                                                                                                                       // 4009
    function weeks () {                                                                                                // 4010
        return absFloor(this.days() / 7);                                                                              // 4011
    }                                                                                                                  // 4012
                                                                                                                       // 4013
    var round = Math.round;                                                                                            // 4014
    var thresholds = {                                                                                                 // 4015
        s: 45,  // seconds to minute                                                                                   // 4016
        m: 45,  // minutes to hour                                                                                     // 4017
        h: 22,  // hours to day                                                                                        // 4018
        d: 26,  // days to month                                                                                       // 4019
        M: 11   // months to year                                                                                      // 4020
    };                                                                                                                 // 4021
                                                                                                                       // 4022
    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize                          // 4023
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {                                      // 4024
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);                                    // 4025
    }                                                                                                                  // 4026
                                                                                                                       // 4027
    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {                                 // 4028
        var duration = create__createDuration(posNegDuration).abs();                                                   // 4029
        var seconds  = round(duration.as('s'));                                                                        // 4030
        var minutes  = round(duration.as('m'));                                                                        // 4031
        var hours    = round(duration.as('h'));                                                                        // 4032
        var days     = round(duration.as('d'));                                                                        // 4033
        var months   = round(duration.as('M'));                                                                        // 4034
        var years    = round(duration.as('y'));                                                                        // 4035
                                                                                                                       // 4036
        var a = seconds < thresholds.s && ['s', seconds]  ||                                                           // 4037
                minutes <= 1           && ['m']           ||                                                           // 4038
                minutes < thresholds.m && ['mm', minutes] ||                                                           // 4039
                hours   <= 1           && ['h']           ||                                                           // 4040
                hours   < thresholds.h && ['hh', hours]   ||                                                           // 4041
                days    <= 1           && ['d']           ||                                                           // 4042
                days    < thresholds.d && ['dd', days]    ||                                                           // 4043
                months  <= 1           && ['M']           ||                                                           // 4044
                months  < thresholds.M && ['MM', months]  ||                                                           // 4045
                years   <= 1           && ['y']           || ['yy', years];                                            // 4046
                                                                                                                       // 4047
        a[2] = withoutSuffix;                                                                                          // 4048
        a[3] = +posNegDuration > 0;                                                                                    // 4049
        a[4] = locale;                                                                                                 // 4050
        return substituteTimeAgo.apply(null, a);                                                                       // 4051
    }                                                                                                                  // 4052
                                                                                                                       // 4053
    // This function allows you to set the rounding function for relative time strings                                 // 4054
    function duration_humanize__getSetRelativeTimeRounding (roundingFunction) {                                        // 4055
        if (roundingFunction === undefined) {                                                                          // 4056
            return round;                                                                                              // 4057
        }                                                                                                              // 4058
        if (typeof(roundingFunction) === 'function') {                                                                 // 4059
            round = roundingFunction;                                                                                  // 4060
            return true;                                                                                               // 4061
        }                                                                                                              // 4062
        return false;                                                                                                  // 4063
    }                                                                                                                  // 4064
                                                                                                                       // 4065
    // This function allows you to set a threshold for relative time strings                                           // 4066
    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {                                       // 4067
        if (thresholds[threshold] === undefined) {                                                                     // 4068
            return false;                                                                                              // 4069
        }                                                                                                              // 4070
        if (limit === undefined) {                                                                                     // 4071
            return thresholds[threshold];                                                                              // 4072
        }                                                                                                              // 4073
        thresholds[threshold] = limit;                                                                                 // 4074
        return true;                                                                                                   // 4075
    }                                                                                                                  // 4076
                                                                                                                       // 4077
    function humanize (withSuffix) {                                                                                   // 4078
        var locale = this.localeData();                                                                                // 4079
        var output = duration_humanize__relativeTime(this, !withSuffix, locale);                                       // 4080
                                                                                                                       // 4081
        if (withSuffix) {                                                                                              // 4082
            output = locale.pastFuture(+this, output);                                                                 // 4083
        }                                                                                                              // 4084
                                                                                                                       // 4085
        return locale.postformat(output);                                                                              // 4086
    }                                                                                                                  // 4087
                                                                                                                       // 4088
    var iso_string__abs = Math.abs;                                                                                    // 4089
                                                                                                                       // 4090
    function iso_string__toISOString() {                                                                               // 4091
        // for ISO strings we do not use the normal bubbling rules:                                                    // 4092
        //  * milliseconds bubble up until they become hours                                                           // 4093
        //  * days do not bubble at all                                                                                // 4094
        //  * months bubble up until they become years                                                                 // 4095
        // This is because there is no context-free conversion between hours and days                                  // 4096
        // (think of clock changes)                                                                                    // 4097
        // and also not between days and months (28-31 days per month)                                                 // 4098
        var seconds = iso_string__abs(this._milliseconds) / 1000;                                                      // 4099
        var days         = iso_string__abs(this._days);                                                                // 4100
        var months       = iso_string__abs(this._months);                                                              // 4101
        var minutes, hours, years;                                                                                     // 4102
                                                                                                                       // 4103
        // 3600 seconds -> 60 minutes -> 1 hour                                                                        // 4104
        minutes           = absFloor(seconds / 60);                                                                    // 4105
        hours             = absFloor(minutes / 60);                                                                    // 4106
        seconds %= 60;                                                                                                 // 4107
        minutes %= 60;                                                                                                 // 4108
                                                                                                                       // 4109
        // 12 months -> 1 year                                                                                         // 4110
        years  = absFloor(months / 12);                                                                                // 4111
        months %= 12;                                                                                                  // 4112
                                                                                                                       // 4113
                                                                                                                       // 4114
        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js                // 4115
        var Y = years;                                                                                                 // 4116
        var M = months;                                                                                                // 4117
        var D = days;                                                                                                  // 4118
        var h = hours;                                                                                                 // 4119
        var m = minutes;                                                                                               // 4120
        var s = seconds;                                                                                               // 4121
        var total = this.asSeconds();                                                                                  // 4122
                                                                                                                       // 4123
        if (!total) {                                                                                                  // 4124
            // this is the same as C#'s (Noda) and python (isodate)...                                                 // 4125
            // but not other JS (goog.date)                                                                            // 4126
            return 'P0D';                                                                                              // 4127
        }                                                                                                              // 4128
                                                                                                                       // 4129
        return (total < 0 ? '-' : '') +                                                                                // 4130
            'P' +                                                                                                      // 4131
            (Y ? Y + 'Y' : '') +                                                                                       // 4132
            (M ? M + 'M' : '') +                                                                                       // 4133
            (D ? D + 'D' : '') +                                                                                       // 4134
            ((h || m || s) ? 'T' : '') +                                                                               // 4135
            (h ? h + 'H' : '') +                                                                                       // 4136
            (m ? m + 'M' : '') +                                                                                       // 4137
            (s ? s + 'S' : '');                                                                                        // 4138
    }                                                                                                                  // 4139
                                                                                                                       // 4140
    var duration_prototype__proto = Duration.prototype;                                                                // 4141
                                                                                                                       // 4142
    duration_prototype__proto.abs            = duration_abs__abs;                                                      // 4143
    duration_prototype__proto.add            = duration_add_subtract__add;                                             // 4144
    duration_prototype__proto.subtract       = duration_add_subtract__subtract;                                        // 4145
    duration_prototype__proto.as             = as;                                                                     // 4146
    duration_prototype__proto.asMilliseconds = asMilliseconds;                                                         // 4147
    duration_prototype__proto.asSeconds      = asSeconds;                                                              // 4148
    duration_prototype__proto.asMinutes      = asMinutes;                                                              // 4149
    duration_prototype__proto.asHours        = asHours;                                                                // 4150
    duration_prototype__proto.asDays         = asDays;                                                                 // 4151
    duration_prototype__proto.asWeeks        = asWeeks;                                                                // 4152
    duration_prototype__proto.asMonths       = asMonths;                                                               // 4153
    duration_prototype__proto.asYears        = asYears;                                                                // 4154
    duration_prototype__proto.valueOf        = duration_as__valueOf;                                                   // 4155
    duration_prototype__proto._bubble        = bubble;                                                                 // 4156
    duration_prototype__proto.get            = duration_get__get;                                                      // 4157
    duration_prototype__proto.milliseconds   = milliseconds;                                                           // 4158
    duration_prototype__proto.seconds        = seconds;                                                                // 4159
    duration_prototype__proto.minutes        = minutes;                                                                // 4160
    duration_prototype__proto.hours          = hours;                                                                  // 4161
    duration_prototype__proto.days           = days;                                                                   // 4162
    duration_prototype__proto.weeks          = weeks;                                                                  // 4163
    duration_prototype__proto.months         = months;                                                                 // 4164
    duration_prototype__proto.years          = years;                                                                  // 4165
    duration_prototype__proto.humanize       = humanize;                                                               // 4166
    duration_prototype__proto.toISOString    = iso_string__toISOString;                                                // 4167
    duration_prototype__proto.toString       = iso_string__toISOString;                                                // 4168
    duration_prototype__proto.toJSON         = iso_string__toISOString;                                                // 4169
    duration_prototype__proto.locale         = locale;                                                                 // 4170
    duration_prototype__proto.localeData     = localeData;                                                             // 4171
                                                                                                                       // 4172
    // Deprecations                                                                                                    // 4173
    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
    duration_prototype__proto.lang = lang;                                                                             // 4175
                                                                                                                       // 4176
    // Side effect imports                                                                                             // 4177
                                                                                                                       // 4178
    // FORMATTING                                                                                                      // 4179
                                                                                                                       // 4180
    addFormatToken('X', 0, 0, 'unix');                                                                                 // 4181
    addFormatToken('x', 0, 0, 'valueOf');                                                                              // 4182
                                                                                                                       // 4183
    // PARSING                                                                                                         // 4184
                                                                                                                       // 4185
    addRegexToken('x', matchSigned);                                                                                   // 4186
    addRegexToken('X', matchTimestamp);                                                                                // 4187
    addParseToken('X', function (input, array, config) {                                                               // 4188
        config._d = new Date(parseFloat(input, 10) * 1000);                                                            // 4189
    });                                                                                                                // 4190
    addParseToken('x', function (input, array, config) {                                                               // 4191
        config._d = new Date(toInt(input));                                                                            // 4192
    });                                                                                                                // 4193
                                                                                                                       // 4194
    // Side effect imports                                                                                             // 4195
                                                                                                                       // 4196
                                                                                                                       // 4197
    utils_hooks__hooks.version = '2.15.1';                                                                             // 4198
                                                                                                                       // 4199
    setHookCallback(local__createLocal);                                                                               // 4200
                                                                                                                       // 4201
    utils_hooks__hooks.fn                    = momentPrototype;                                                        // 4202
    utils_hooks__hooks.min                   = min;                                                                    // 4203
    utils_hooks__hooks.max                   = max;                                                                    // 4204
    utils_hooks__hooks.now                   = now;                                                                    // 4205
    utils_hooks__hooks.utc                   = create_utc__createUTC;                                                  // 4206
    utils_hooks__hooks.unix                  = moment__createUnix;                                                     // 4207
    utils_hooks__hooks.months                = lists__listMonths;                                                      // 4208
    utils_hooks__hooks.isDate                = isDate;                                                                 // 4209
    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;                                     // 4210
    utils_hooks__hooks.invalid               = valid__createInvalid;                                                   // 4211
    utils_hooks__hooks.duration              = create__createDuration;                                                 // 4212
    utils_hooks__hooks.isMoment              = isMoment;                                                               // 4213
    utils_hooks__hooks.weekdays              = lists__listWeekdays;                                                    // 4214
    utils_hooks__hooks.parseZone             = moment__createInZone;                                                   // 4215
    utils_hooks__hooks.localeData            = locale_locales__getLocale;                                              // 4216
    utils_hooks__hooks.isDuration            = isDuration;                                                             // 4217
    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;                                                 // 4218
    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;                                                 // 4219
    utils_hooks__hooks.defineLocale          = defineLocale;                                                           // 4220
    utils_hooks__hooks.updateLocale          = updateLocale;                                                           // 4221
    utils_hooks__hooks.locales               = locale_locales__listLocales;                                            // 4222
    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;                                               // 4223
    utils_hooks__hooks.normalizeUnits        = normalizeUnits;                                                         // 4224
    utils_hooks__hooks.relativeTimeRounding = duration_humanize__getSetRelativeTimeRounding;                           // 4225
    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;                         // 4226
    utils_hooks__hooks.calendarFormat        = getCalendarFormat;                                                      // 4227
    utils_hooks__hooks.prototype             = momentPrototype;                                                        // 4228
                                                                                                                       // 4229
    var _moment = utils_hooks__hooks;                                                                                  // 4230
                                                                                                                       // 4231
    return _moment;                                                                                                    // 4232
                                                                                                                       // 4233
}));                                                                                                                   // 4234
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/momentjs_moment/meteor/export.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
// moment.js makes `moment` global on the window (or global) object, while Meteor expects a file-scoped global variable
moment = this.moment;                                                                                                  // 2
try {                                                                                                                  // 3
    delete this.moment;                                                                                                // 4
} catch (e) {                                                                                                          // 5
}                                                                                                                      // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['momentjs:moment'] = {}, {
  moment: moment
});

})();
