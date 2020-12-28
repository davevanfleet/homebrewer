import { Router } from 'express';
// import { nano } from '../app'

var router = Router();
// var yeasts = nano.use('yeasts')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('in yeasts route');
});

export default router;