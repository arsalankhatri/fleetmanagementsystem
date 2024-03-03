// src/controllers/usageController.ts
import { Request, Response } from 'express';
import * as usageService from '../services/usageService';

export const logUsage = async (req: Request, res: Response): Promise<void> => {
    try {
        const { vehicleId } = req.params;
        const { hoursOperated, distanceTraveled, date } = req.body;

        await usageService.logUsage(vehicleId, hoursOperated, distanceTraveled, date);

        res.status(201).json({ message: 'Usage logged successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to log usage.' });
    }
};

export const getUsageAnalytics = async (req: Request, res: Response): Promise<void> => {
    try {
        const { vehicleId } = req.params;
        const usageAnalytics = await usageService.getUsageAnalytics(vehicleId);

        res.status(200).json(usageAnalytics);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve usage analytics.' });
    }
};
