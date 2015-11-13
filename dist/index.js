'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _importMocks = require('./importMocks');

var _importMocks2 = _interopRequireDefault(_importMocks);

var _applyMiddleware = require('./applyMiddleware');

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function MockingBird(_ref) {
  var mocksDirectory = _ref.mocksDirectory;
  var whitelist = _ref.whitelist;
  var _ref$serverPort = _ref.serverPort;
  var serverPort = _ref$serverPort === undefined ? 9090 : _ref$serverPort;

  var app = (0, _express2.default)();

  (0, _applyMiddleware2.default)(app, whitelist);

  (0, _importMocks2.default)(mocksDirectory, app);

  app.listen(serverPort);

  return app;
}

exports.default = MockingBird;