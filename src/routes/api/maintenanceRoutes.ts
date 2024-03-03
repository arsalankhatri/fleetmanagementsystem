import express from 'express';
import * as maintenanceController from '../../controllers/maintenanceController';

const router = express.Router();

/**
 * @swagger
 * /api/maintenance/{vehicleId}:
 *   post:
 *     summary: Log maintenance for a vehicle
 *     description: Log maintenance history for a specific vehicle.
 *     tags: 
 *       - Maintenance Logs
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
 *               description:
 *                 type: string
 *                 description: Description of the maintenance.
 *               date:
 *                 type: string
 *                 format: date-time
 *                 description: Date of the maintenance.
 *             required:
 *               - description
 *     responses:
 *       201:
 *         description: Maintenance logged successfully. Returns the logged maintenance record.
 *       400:
 *         description: Bad request. Invalid input data.
 *   get:
 *     summary: Get maintenance history for a vehicle
 *     description: Retrieve the maintenance history for a specific vehicle.
 *     tags: 
 *       - Maintenance Logs
 *     parameters:
 *       - in: path
 *         name: vehicleId
 *         required: true
 *         description: ID of the vehicle
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval. Returns an array of maintenance records.
 *       404:
 *         description: Vehicle not found or maintenance history not available.
 */
router.post('/:vehicleId', maintenanceController.logMaintenance);
router.get('/:vehicleId', maintenanceController.getMaintenanceHistory);


export default router;
