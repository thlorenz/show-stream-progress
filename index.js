'use strict';
var through = require('through');

module.exports = function (out) {
  var data = '';
  out = out || process.stdout;

  return through(write, end);

  function write (buf) { 
    data += buf; 
    process.stdout.write('.');
  }
  function end () {
    this.queue(data);
    this.queue(null);
  }
};
