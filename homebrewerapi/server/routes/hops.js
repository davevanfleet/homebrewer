import { Router } from 'express';
// import { nano } from '../app'

var router = Router();
// var hops = nano.use('hops')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('in hops route');
});

export default router;