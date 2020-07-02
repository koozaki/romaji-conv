#!/usr/bin/env node

const { Command } = require('commander');
const package = require('../package');
const romajiConv = require('../lib/index');

const program = new Command();

program
  .version(package.version)
  .arguments('<romaji>')
  .action(romaji => {
    console.log(romajiConv(romaji));
  })
  .parse(process.argv);
