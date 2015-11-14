#!/usr/bin/env node
'use strict';

var commander = require('commander');
var packageJson = require('../package.json');
var MockingBirds = require('../src');

function run(mocksDirectory, options) {
  var whitelist = (options.whiteList || '').split(',');
  var serverPort = options.port;

  MockingBirds(mocksDirectory, serverPort, whitelist);
}

commander
  .version(packageJson.version)
  .usage('<mocks directory> [options]')
  .option('-p, --port <n>', 'Server port')
  .option('-w, --white-list <url>,<url>,...', 'list of URLs accepted by CORS')
  .action(run)
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  commander.outputHelp();
}
