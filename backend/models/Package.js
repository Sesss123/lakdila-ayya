import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    destination: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    duration: { type: Number, required: true, min: 1 },
    description: { type: String, required: true },
    travelType: { type: String, default: 'general' },
  },
  { timestamps: true },
);

export default mongoose.model('Package', packageSchema);
