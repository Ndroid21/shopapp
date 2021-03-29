import express from 'express';
import {
  getUserProfile,
  loginUser,
  registerUser,
  updateUserProfile,
} from '../controllers/userController.js';
const router = express.Router();

import { protect } from '../middleware/authMiddleware.js';

router.post('/', registerUser);
router.post('/login', loginUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
