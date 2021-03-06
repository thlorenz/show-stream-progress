# show-stream-progress [![build status](https://secure.travis-ci.org/thlorenz/show-stream-progress.png)](http://travis-ci.org/thlorenz/show-stream-progress)

Shows progress of any async operation that streams results.

```js
var showProgress =  require('show-stream-progress')
  , browserify   =  require('browserify')

browserify()
  .require(require.resolve('./entry.js'), { entry: true })
  .bundle({ debug: true })
  .pipe(showProgress(process.stderr))
  .pipe(fs.createWriteStream('./bundle.js'))
  ;
```

```
................................................................................
```

Although this example shows how to use this while building a bundle with browserify, show-stream-progress works with any
stream.

**Note:** Actual output subject to change depending on browserify version. I make no guarantees ;)

## Installation

    npm i show-stream-progress

## Demo

    npm explore show-stream-progress
    npm run demo

## API

```
/**
 * @name showProgress
 * @function
 * @param out {Stream} The stream to output progress indicators to, defaults to process.stdout.
 * @return {Stream} Readable and writable stream that just passes along data written to it.
 */
```

