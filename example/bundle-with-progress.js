'use strict';

var progressify =  require('..')
  , browserify  =  require('browserify')
  , path        =  require('path')
  , fs          =  require('fs')
  , entryFile   =  require.resolve('browserify')
  , bundle      =  path.join(__dirname, 'bundle.js')
  ;

browserify()
  .transform(progressify)
  .require(__filename, { entry: true })
  .bundle({ debug: true })
  .pipe(fs.createWriteStream(bundle))
  ;


