// src/routes/apiRoutes.ts
import express from 'express';
import vehicleRoutes from './api/vehicleRoutes';
import trackingRoutes from './api/trackingRoutes';
import maintenanceRoutes from './api/maintenanceRoutes';
import usageRoutes from './api/usageRoutes';

const router = express.Router();

router.use('/vehicles', vehicleRoutes);
router.use('/tracking', trackingRoutes);
router.use('/maintenance', maintenanceRoutes);
router.use('/usage', usageRoutes); 
export default router;
