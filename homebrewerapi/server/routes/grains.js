import { Router } from 'express';
import { db } from '../db'

const router = Router();
let grains = db.use('grains')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('in grains route');
});

export default router;