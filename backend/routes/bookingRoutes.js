import { Router } from 'express';
import { createBooking, getMyBookings } from '../controllers/bookingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = Router();
router.post('/book', protect, createBooking);
router.get('/my-bookings', protect, getMyBookings);

export default router;
