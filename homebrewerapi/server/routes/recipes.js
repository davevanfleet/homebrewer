import { Router } from 'express';
import { db } from '../db'

const router = Router();
const recipes = db.use('recipes')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('in recipes route');
});

export default router;