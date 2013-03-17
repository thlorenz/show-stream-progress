'use strict';

var progressify =  require('..')
  , browserify  =  require('browserify')
  , path        =  require('path')
  , fs          =  require('fs')
  , entryFile   =  require.resolve('browserify')
  , bundle      =  path.join(__dirname, 'bundle.js')
  ;

browserify()
  .require(__filename, { entry: true })
  .transform(progressify)
  .bundle({ debug: true })
  .pipe(fs.createWriteStream(bundle))
  ;


