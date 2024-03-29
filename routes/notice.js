import express from 'express';
import { post, getAllNotices, getNoticeById, updateNoticeById, deleteNoticeById } from '../controllers/noticeController.js';
import { authenticateToken } from '../middlewares/auth.js';

const router = express.Router();

router.route('/').post(authenticateToken, post).get(authenticateToken, getAllNotices);
router.route('/:id').get(authenticateToken, getNoticeById).put(authenticateToken, updateNoticeById).delete(authenticateToken, deleteNoticeById);

export default router;
