const chalk = require('chalk')
const stripAnsi = require('strip-ansi')
const readline = require('readline')
const EventEmitter = require('events')

const { stopSpinner } = require('./spinner')