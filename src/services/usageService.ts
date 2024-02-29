// src/services/usageService.ts
import UsageRecordModel, { UsageRecord } from '../models/usageModel';

export const logUsage = async (vehicleId: string, hoursOperated: number, distanceTraveled: number): Promise<void> => {
    try {
        const usageRecord = new UsageRecordModel({
            vehicleId,
            hoursOperated,
            distanceTraveled,
        });
        await usageRecord.save();
    } catch (error) {
        throw new Error('Failed to log usage.');
    }
};

export const getUsageAnalytics = async (vehicleId: string): Promise<UsageRecord[]> => {
    try {
        const usageAnalytics = await UsageRecordModel.find({ vehicleId }).exec();
        return usageAnalytics;
    } catch (error) {
        throw new Error('Failed to retrieve usage analytics.');
    }
};
