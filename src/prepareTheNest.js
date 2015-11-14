var fs = require('fs-extra');
var cors = require('cors');
var control = require('./control');
var bodyParser = require('body-parser');

function prepareTheNest(app, mocksDirectory, serverPort, whitelist) {
  try {
    if (!fs.lstatSync(mocksDirectory).isDirectory()) {
      return control.error('Mocks directory not found');
    }
  } catch(error) {
    return control.error('Mocks directory not found');
  }

  if (isNaN(serverPort)) {
    return control.error('Invalid server port!');
  }

  if (!Array.isArray(whitelist)) {
    return control.error('Invalid whitelist!');
  }

  app.use(cors({
    origin(origin, callback) {
      callback(null, (whitelist.indexOf(origin) !== -1));
    },
  }));

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: true }));

  return true;
}

module.exports = prepareTheNest;
