'use strict';
/*jshint asi: true */

var test    =  require('tap').test
  , through =  require('through')
  , from    =  require('from')
  , show    =  require('..')

test('streaming four packets', function (t) {
  var data = ''
    , actualdata = ''
    , packets = ['packet1', 'packet2', 'packet3', 'packet4'];
  t.plan(2);

  from(packets)
    .pipe(show(through(outwrite)))
    .pipe(through(checkwrite, checkend))

  function outwrite(buf) { data += buf }

  function checkwrite(buf) { actualdata += buf }
  function checkend() { 
    t.equal(actualdata, packets.join(''), 'streams actual data through')
    t.equal(data, '....', 'shows progress: ....') 
  }
})
