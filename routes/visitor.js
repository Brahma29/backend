import express from 'express';
import { register, getAllVisitors } from '../controllers/visitorController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.route('/').post(authenticateToken, register).get(authenticateToken, getAllVisitors);

export default router;