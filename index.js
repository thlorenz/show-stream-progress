'use strict';
var through = require('through');

module.exports = function (file) {
  var data = '';

  return through(write, end);

  function write (buf) { data += buf; }
  function end () {
    process.stderr.write(file + ' : ' );
    this.queue(data);
    this.queue(null);
  }
};
