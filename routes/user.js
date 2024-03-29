import express from 'express';
import { deleteUser, getAllUsers, getUserById, registerUser, updateUser } from '../controllers/user';
import { authenticateToken } from '../middlewares/auth';

const router = express.Router();

router.use('/').post(registerUser).get(authenticateToken, getAllUsers);

router.use('/:id').get(authenticateToken, getUserById).put(authenticateToken, updateUser).delete(authenticateToken, deleteUser);
