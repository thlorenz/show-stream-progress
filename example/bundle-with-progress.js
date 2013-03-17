'use strict';

var showProgress =  require('..')
  , browserify  =  require('browserify')
  , path        =  require('path')
  , fs          =  require('fs')
  , entryFile   =  require.resolve('browserify')
  , bundle      =  path.join(__dirname, 'bundle.js')
  ;

browserify()
  .require(require.resolve(__filename), { entry: true })
  .bundle({ debug: true })
  .pipe(showProgress(process.stderr))
  .pipe(fs.createWriteStream(bundle))
  ;


