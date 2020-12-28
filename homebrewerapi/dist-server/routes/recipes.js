"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _db = require("../db");

var router = (0, _express.Router)();

var recipes = _db.db.use('recipes');
/* GET users listing. */


router.get('/', function (req, res, next) {
  res.send('in recipes route');
});
var _default = router;
exports["default"] = _default;