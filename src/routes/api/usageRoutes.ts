import express from 'express';
import * as usageController from '../../controllers/usageController';

const router = express.Router();

/**
 * @swagger
 * /api/usage/{vehicleId}:
 *   post:
 *     summary: Log usage analytics for a vehicle
 *     description: Log usage analytics for a specific vehicle.
 *     tags: 
 *       - Analytics
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
 *               hoursOperated:
 *                 type: number
 *                 description: Number of hours operated.
 *               distanceTraveled:
 *                 type: number
 *                 description: Distance traveled in kilometers.
 *     responses:
 *       201:
 *         description: Usage analytics logged successfully.
 *       400:
 *         description: Bad request. Invalid input data.
 *   get:
 *     summary: Get usage analytics for a vehicle
 *     description: Retrieve the usage analytics for a specific vehicle.
 *     tags: 
 *       - Analytics
 *     parameters:
 *       - in: path
 *         name: vehicleId
 *         required: true
 *         description: ID of the vehicle
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful retrieval. Returns an array of usage analytics.
 *         content:
 *           application/json:
 *             example:
 *               - vehicleId: "exampleVehicleId"
 *                 date: "2022-03-03"
 *                 totalHoursOperated: 10
 *                 totalDistanceTraveled: 200
 *       404:
 *         description: Vehicle not found or usage analytics not available.
 */
router.post('/:vehicleId', usageController.logUsage);
router.get('/:vehicleId', usageController.getUsageAnalytics);


export default router;
