'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function applyMiddleware(app, whitelist) {
  app.use((0, _cors2.default)({
    origin: function origin(_origin, callback) {
      callback(null, whitelist.indexOf(_origin) !== -1);
    }
  }));

  app.use(_bodyParser2.default.json());

  app.use(_bodyParser2.default.urlencoded({ extended: true }));
}

exports.default = applyMiddleware;