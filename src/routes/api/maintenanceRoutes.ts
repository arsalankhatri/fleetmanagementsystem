// src/routes/api/maintenanceRoutes.ts
import express from 'express';
import * as maintenanceController from '../../controllers/maintenanceController';

const router = express.Router();

/**
 * @swagger
 * /api/maintenance/{vehicleId}:
 *   post:
 *     summary: Log maintenance for a vehicle
 *     description: Log maintenance history for a specific vehicle.
 *     parameters:
 *       - in: path
 *         name: vehicleId
 *         required: true
 *         description: ID of the vehicle
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                type: string
 *                description: Status of the vehicle.
 *               description:
 *                 type: string
 *                 description: Description of the maintenance.
 *     responses:
 *       201:
 *         description: Maintenance logged successfully.
 *       400:
 *         description: Bad request. Invalid input data.
 *   get:
 *     summary: Get maintenance history for a vehicle
 *     description: Retrieve the maintenance history for a specific vehicle.
 *     parameters:
 *       - in: path
 *         name: vehicleId
 *         required: true
 *         description: ID of the vehicle
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval. Returns the maintenance history.
 *       404:
 *         description: Vehicle not found or maintenance history not available.
 */
router.post('/:vehicleId', maintenanceController.logMaintenance);
router.get('/:vehicleId', maintenanceController.getMaintenanceHistory);

export default router;
