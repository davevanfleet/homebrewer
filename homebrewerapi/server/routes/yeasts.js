import { Router } from 'express';
import { db } from '../db'

const router = Router();
const yeasts = db.use('yeasts')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('in yeasts route');
});

export default router;