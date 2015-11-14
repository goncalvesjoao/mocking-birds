var express = require('express');
var control = require('./control');
var makeThemFly = require('./makeThemFly');
var prepareTheNest = require('./prepareTheNest');
var gatherTheFlock = require('./gatherTheFlock');

function MockingBirds(mocksDirectory, serverPort, whitelist) {
  var app = express();
  var nestPrepared = prepareTheNest(
    app,
    mocksDirectory,
    serverPort || 0,
    whitelist || []
  );

  if (!nestPrepared) {
    return false;
  }

  var mockingBirds = gatherTheFlock(mocksDirectory);
  var launchedBirds = makeThemFly(app, mockingBirds);

  if (!launchedBirds) {
    return control.warning('No mocks where launched.');
  }

  control.log(launchedBirds + ' mock(s) up and running.');
  app.listen(serverPort || 9090);

  return app;
}

module.exports = MockingBirds;
