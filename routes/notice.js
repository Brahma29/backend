import express from 'express';
import { post, getAllNotices, getNoticeById, updateNoticeById, deleteNoticeById } from '../controllers/noticeController.js';

const router = express.Router();

router.route('/').post(post).get(getAllNotices);
router.route('/:id').get(getNoticeById).put(updateNoticeById).delete(deleteNoticeById);

export default router;
