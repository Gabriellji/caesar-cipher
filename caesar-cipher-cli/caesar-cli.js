#!/usr/bin/env node
//clear();
const chalk = require('chalk');
// const clear = require('clear');
const figlet = require('figlet');
console.log(
  chalk.yellow(
    figlet.textSync('Yo!')
  )
);
const {caesar} = require('./modules/caesar.js')

console.log(caesar('aa bb AA BB 11334вапуап', 2));

const shift = ['--s', '--shift'];
const input = ['--i', '--input'];



let argv = require('minimist')(process.argv.slice(2));
console.log(argv);