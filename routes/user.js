import express from 'express';
import { deleteUser, getAllUsers, getUserById, registerUser, updateUser } from '../controllers/user';

const router = express.Router();

router.use('/').post(registerUser).get(getAllUsers);

router.use('/:id').get(getUserById).put(updateUser).delete(deleteUser);
