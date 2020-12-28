"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = void 0;

var _nano = _interopRequireDefault(require("nano"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var db = (0, _nano["default"])('http://localhost:5984');
exports.db = db;