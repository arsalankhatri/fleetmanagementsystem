// src/routes/api/trackingRoutes.ts
import express from 'express';
import * as trackingController from '../../controllers/trackingController';

const router = express.Router();

/**
 * @swagger
 * /api/tracking/{vehicleId}:
 *   get:
 *     summary: Get real-time tracking information for a vehicle
 *     description: Retrieve the real-time status and location of a specific vehicle.
 *     parameters:
 *       - in: path
 *         name: vehicleId
 *         required: true
 *         description: ID of the vehicle
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval. Returns the real-time tracking information.
 *       404:
 *         description: Vehicle not found or tracking data not available.
 */
router.get('/:vehicleId', trackingController.getVehicleTracking);

export default router;
