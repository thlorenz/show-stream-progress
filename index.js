'use strict';
var through = require('through');

/**
 * @name showProgress
 * @function
 * @param out {Stream} The stream to output progress indicators to, defaults to process.stdout.
 * @return {Stream} Readable and writable stream that just passes along data written to it.
 */
module.exports = function showProgress(out) {
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
