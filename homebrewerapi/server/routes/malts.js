import { Router } from 'express';
// import { nano } from '../app'

var router = Router();
// var malts = nano.use('malts')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('in malts route');
});

export default router;