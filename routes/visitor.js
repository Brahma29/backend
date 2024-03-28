import express from 'express';
import { register, getAllVisitors } from '../controllers/visitorController.js';

const router = express.Router();

router.route('/').post(register).get(getAllVisitors);

export default router;
