#!/usr/bin/env node
'use strict';

var commander = require('commander');
var MockingBirds = require('../dist').default;

function run(mocksDirectory, options) {
  MockingBirds({
    mocksDirectory,
    serverPort: options.port,
    whitelist: (options.whiteList || '').split(','),
  });
}

commander
  .version(require('../package.json').version)
  .usage('<mocks directory> [options]')
  .option('-p, --port <n>', 'Server port')
  .option('-w, --white-list <url>,<url>,...', 'list of URLs accepted by CORS')
  .action(run)
  .parse(process.argv);

if (!process.argv.slice(2).length) {
  commander.outputHelp();
}
