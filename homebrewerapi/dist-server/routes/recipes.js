"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

// import { nano } from '../app'
var router = (0, _express.Router)(); // var recipes = nano.use('recipes')

/* GET users listing. */

router.get('/', function (req, res, next) {
  res.send('in recipes route, hello');
});
var _default = router;
exports["default"] = _default;