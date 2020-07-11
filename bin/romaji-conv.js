#!/usr/bin/env node

const { Command } = require('commander');
const package = require('../package');
const romajiConv = require('../lib/index');

const program = new Command();


program
  .option('--katakana')
  .action((someString, options) => {
    const instance = romajiConv(someString);
    console.log(options.katakana ? instance.toKatakana() : instance.toHiragana());
  });

program
  .version(package.version)
  .arguments('<someString>')
  .parse(process.argv);
