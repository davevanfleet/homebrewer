"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var router = (0, _express.Router)();
/* GET users listing. */

router.get('/', function (req, res, next) {
  res.send('in users route');
});
var _default = router;
exports["default"] = _default;