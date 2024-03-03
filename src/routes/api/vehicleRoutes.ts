import express from 'express';
import * as vehicleController from '../../controllers/vehicleController';

const vehicleRoutes = express.Router();
/**
 * @swagger
 * /api/vehicles:
 *   post:
 *     summary: Register a new vehicle
 *     description: Add a new vehicle to the system, including details like model, name, type, and status (active, maintenance, etc.).
 *     tags: 
 *       - Vehicles
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               vmodel:
 *                 type: string
 *               name:
 *                type: string
 *               type:
 *                 type: string
 *     responses:
 *       201:
 *         description: Successful registration. Returns the registered vehicle.
 *         content:
 *           application/json:
 *             example:
 *               vmodel: "ExampleModel"
 *               name: "ExampleName"
 *               type: "ExampleType"
 *               status: "active"
 *               picture: "example_picture.jpg"
 *       400:
 *         description: Bad request. Invalid input data.
 * 
 *   get:
 *     summary: Get all vehicles
 *     description: Retrieve the list of all vehicles in the system.
 *     tags: 
 *       - Vehicles
 *     responses:
 *       200:
 *         description: Successful retrieval. Returns an array of vehicles.
 *         content:
 *           application/json:
 *             example:
 *               - vmodel: "ExampleModel"
 *                 name: "ExampleName"
 *                 type: "ExampleType"
 *                 status: "active"
 *                 picture: "example_picture.jpg"
 *       500:
 *         description: Internal server error.
 */
vehicleRoutes.route('/')
    .post(vehicleController.registerVehicle)
    .get(vehicleController.getVehicles);

export default vehicleRoutes;