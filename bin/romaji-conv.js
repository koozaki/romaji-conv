#!/usr/bin/env node

const { Command } = require('commander');
const package = require('../package');
const romajiConv = require('../lib/index');

const program = new Command();


program
  .option('--katakana')
  .action((someString, options) => {
    const instance = romajiConv(someString);
    if (options.katakana) {
      console.log(instance.toKatakana());
    } else if (options.romaji) {
      console.log(instance.toRomaji());
    } else {
      console.log(instance.toHiragana());
    }
  });

program
  .version(package.version)
  .arguments('<someString>')
  .parse(process.argv);
