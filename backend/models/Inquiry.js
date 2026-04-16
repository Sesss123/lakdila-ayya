import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    response: { type: String, default: '' },
    status: { type: String, enum: ['open', 'answered'], default: 'open' },
  },
  { timestamps: true },
);

export default mongoose.model('Inquiry', inquirySchema);
