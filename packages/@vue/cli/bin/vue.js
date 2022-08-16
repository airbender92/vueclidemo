#!/usr/bin/env node

const { chalk, semver } = require('@vue/cli-shared-utils');
const requiredVersion = require('../package.json').engines.node;
const leven = require('leven')

function checkNodeVersion(wanted, id) {
  if (!semver.satisfies(process.version, wanted, { includePrerelease: true })) {
    console.log(chalk.red(
      'You are using Node ' + process.version + ', but this version of ' + id + 
      ' requires Node ' + wanted + '.\nPlease upgrade your Node version.'
    ))
    process.exit(1)
  }
}

checkNodeVersion(requiredVersion, '@vue/cli')

const fs = require('fs')
const path = require('path')
const slash = require('slash');
const minimist = require('minimist')

// enter debug mode when createing test repo
if (
  slash(process.cwd()).indexOf('/packages/test') > 0 && (
    fs.existsSync(path.resolve(process.cwd(), '../@vue')) || 
    fs.existsSync(path.resolve(process.cwd(), '../../@vue'))
  )
) {
  process.env.VUE_CLI_DEBUG = true
}

const program = require('commander');
const loadCommand = require('../lib/util/loadCommand')

program
  .version(`@vue/cli ${require('../package').version}`)
  .usage('<command> [options]')
  
// add some useful info on help
program.on('--help', () => {
  console.log()
  console.log(`Run ${chalk.cyan(`vue-local <command> --help`)} for detailed usage of given command.`)
  console.log()
})

program.commands.forEach(c => c.on('--help', () => console.log()))