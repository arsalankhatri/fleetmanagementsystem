
import { Request, Response } from 'express';
import * as trackingService from '../services/trackingService';
const vehicleTrackingData: Record<string, { status: string, location: string, speed: number }> = {};

export const getVehicleTracking = (req: Request, res: Response): void => {
    const { vehicleId } = req.params;
    const vehicleTrackingInfo = vehicleTrackingData[vehicleId];

    if (vehicleTrackingInfo) {
        res.status(200).json(vehicleTrackingInfo);
    } else {
        res.status(404).json({ error: 'Vehicle not found or tracking data not available.' });
    }
};

export const updateVehicleTracking = (vehicleId: string, status: string, location: string, speed: number): void => {
    vehicleTrackingData[vehicleId] = { status, location, speed};
};

// Start the simulation when the application starts
    trackingService.simulateTrackingUpdates(updateVehicleTracking);
