import { Router } from 'express';
// import { nano } from '../app'

var router = Router();
// var recipes = nano.use('recipes')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('in recipes route, hello');
});

export default router;