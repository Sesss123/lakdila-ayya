import { Router } from 'express';
import { createInquiry, getInquiries } from '../controllers/inquiryController.js';
import { authorize, protect } from '../middleware/authMiddleware.js';

const router = Router();
router.post('/inquiry', protect, createInquiry);
router.get('/inquiries', protect, authorize('staff', 'admin'), getInquiries);

export default router;
