var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    debugger
    res.json({message: "in recipes router"});
});

module.exports = router;