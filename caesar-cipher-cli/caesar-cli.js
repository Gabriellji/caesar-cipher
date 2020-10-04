#! /usr/bin/env node

try {
  const { input, transform, output } = require('./modules/stream.js');
  input.pipe(transform).pipe(output);

} catch(err) {
      process.stderr.write(err.message + '\n');
      process.exit(1);
}



