/**
 * Created by huangxinghui on 2015/8/28.
 */

var _ = require('underscore');

module.exports = {
  substitute: function(str) {
    if (str == null) return '';

    var args = Array.prototype.slice.call(arguments, 1);

    if (args.length == 1 && _.isArray(args[0])) {
      args = args[0];
    }

    str = str.replace(/\{(\d+)\}/g, function(m, i) {
      return args[i]
    });

    return str;
  },

  utf8Length: function(str) {
    // see http://stackoverflow.com/questions/5515869/string-length-in-bytes-in-javascript
    var m = encodeURIComponent(str).match(/%[89ABab]/g);
    return str.length + (m ? m.length : 0);
  },

  leftPad: function(str, size, padStr) {
    if (str == null) return null;

    padStr = padStr || ' ';

    var pads = size - str.length;

    if (pads <= 0) {
      return str;
    }

    return this.padding(pads, padStr).concat(str);
  },

  padding: function(repeat, pad) {
    var buffer = '';

    for (var i = 0; i < repeat; i++) {
      buffer += pad;
    }
    return buffer;
  }
};
