'use strict';
var through = require('through');

/**
 * @name showProgress
 * @function
 * @param out {Stream} The stream to output progress indicators to, defaults to process.stdout.
 * @return {Stream} Readable and writable stream that just passes along data written to it.
 */
module.exports = function showProgress(out) {
  out = out || process.stdout;
  return through(write);

  function write (buf) { 
    out.write('.');
    this.queue(buf);
  }
};
