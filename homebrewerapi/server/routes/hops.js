import { Router } from 'express';
import { db } from '../db'

const router = Router();
const hops = db.use('hops')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('in hops route');
});

export default router;