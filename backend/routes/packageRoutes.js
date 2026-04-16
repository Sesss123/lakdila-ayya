import { Router } from 'express';
import { createPackage, getPackageById, listPackages } from '../controllers/packageController.js';
import { authorize, protect } from '../middleware/authMiddleware.js';

const router = Router();
router.get('/packages', listPackages);
router.get('/packages/:id', getPackageById);
router.post('/packages', protect, authorize('admin'), createPackage);

export default router;
