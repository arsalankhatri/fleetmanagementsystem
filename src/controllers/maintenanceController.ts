import { Request, Response } from 'express';
import * as maintenanceService from '../services/maintenanceService';

export const logMaintenance = async (req: Request, res: Response): Promise<void> => {
    try {
        const { vehicleId } = req.params;
        const { description } = req.body;

        await maintenanceService.logMaintenance(vehicleId, description);

        res.status(201).json({ message: 'Maintenance logged successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to log maintenance.' });
    }
};

export const getMaintenanceHistory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { vehicleId } = req.params;
        const maintenanceHistory = await maintenanceService.getMaintenanceHistory(vehicleId);

        res.status(200).json(maintenanceHistory);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve maintenance history.' });
    }
};
