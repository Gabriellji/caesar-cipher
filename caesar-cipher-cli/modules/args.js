const shift = ['--s', '--shift'];
const input = ['--i', '--input'];



let argv = require('minimist')(process.argv.slice(2));
console.log(argv);