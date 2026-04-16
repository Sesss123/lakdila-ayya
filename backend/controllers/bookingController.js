import Booking from '../models/Booking.js';

export async function createBooking(req, res) {
  const booking = await Booking.create({
    userId: req.user.id,
    packageId: req.body.packageId,
    date: req.body.date,
    status: 'pending',
  });
  res.status(201).json(booking);
}

export async function getMyBookings(req, res) {
  const bookings = await Booking.find({ userId: req.user.id }).populate('packageId');
  res.json(bookings);
}
