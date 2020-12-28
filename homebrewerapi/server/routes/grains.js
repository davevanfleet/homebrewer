import { Router } from 'express';
// import { nano } from '../app'

var router = Router();
// var grains = nano.use('grains')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('in grains route');
});

export default router;