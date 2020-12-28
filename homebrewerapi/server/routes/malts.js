import { Router } from 'express';
import { db } from '../db'

const router = Router();
const malts = db.use('malts')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('in malts route');
});

export default router;