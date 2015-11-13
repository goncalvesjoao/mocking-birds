'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function importMocks(_directory, app) {
  var directory = _directory;

  if (!directory.endsWith('/')) {
    directory += '/';
  }

  _fsExtra2.default.readdirSync(directory).forEach(function (fileName) {
    var file = _fsExtra2.default.lstatSync(directory + fileName);

    if (file.isDirectory()) {
      return importMocks(directory + fileName, app);
    }

    if (fileName === 'index.js') {
      return false;
    }

    return require(process.cwd() + '/' + directory + fileName)(app);
  });
}

exports.default = importMocks;