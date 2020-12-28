"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _db = require("../db");

var router = (0, _express.Router)();

var yeasts = _db.db.use('yeasts');
/* GET users listing. */


router.get('/', function (req, res, next) {
  res.send('in yeasts route');
});
var _default = router;
exports["default"] = _default;