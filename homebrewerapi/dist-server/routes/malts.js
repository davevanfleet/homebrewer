"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

// import { nano } from '../app'
var router = (0, _express.Router)(); // var malts = nano.use('malts')

/* GET users listing. */

router.get('/', function (req, res, next) {
  res.send('in malts route');
});
var _default = router;
exports["default"] = _default;