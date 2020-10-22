#!/usr/bin/env node
import yargs = require('yargs')

import HelloCommand from './commands/hello'
import CompileCommand from './commands/compile'

yargs(process.argv.slice(2))
  .command(...HelloCommand(false))
  .command(...CompileCommand(false))
  .help().argv
