import { Router } from 'express';
var router = Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('in users route');
});

export default router;
