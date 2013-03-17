'use strict';
var through = require('through');

module.exports = function (file) {
  var data = '';
  process.stderr.write(file + ' : ' );

  return through(write, end);

  function write (buf) { data += buf; }
  function end () {
    this.queue(data);
    this.queue(null);
  }
};
