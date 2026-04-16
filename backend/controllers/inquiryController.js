import Inquiry from '../models/Inquiry.js';

export async function createInquiry(req, res) {
  const inquiry = await Inquiry.create({ userId: req.user.id, message: req.body.message });
  res.status(201).json(inquiry);
}

export async function getInquiries(req, res) {
  const inquiries = await Inquiry.find().populate('userId', 'name email').sort({ createdAt: -1 });
  res.json(inquiries);
}
