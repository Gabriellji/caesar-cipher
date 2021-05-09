#! /usr/bin/env node

'use strict'

try {
  const { input, transform, output } = require('./utils/stream.js');
  input.pipe(transform).pipe(output);

} catch(err) {
      process.stderr.write(err.message + '\n');
      process.exit(1);
}



