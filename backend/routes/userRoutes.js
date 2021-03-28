import express from 'express';
import {
  getUserProfile,
  loginUser,
  registerUser,
} from '../controllers/userController.js';
const router = express.Router();

import { protect } from '../middleware/authMiddleware.js';

router.post('/', registerUser);
router.post('/login', loginUser);
router.route('/profile').get(protect, getUserProfile);

export default router;
