import UsageRecordModel from '../models/usageModel';

export const logUsage = async (vehicleId: string, hoursOperated: number, distanceTraveled: number, timestamp: string): Promise<void> => {
    try {
        const usageRecord = new UsageRecordModel({
            vehicleId,
            hoursOperated,
            distanceTraveled,
            timestamp
        });
        await usageRecord.save();
    } catch (error) {
        throw new Error('Failed to log usage.');
    }
};


export const getUsageAnalytics = async (vehicleId: string): Promise<{ vehicleId: string, date: string, totalHoursOperated: number, totalDistanceTraveled: number }[]> => {
    try {
        const result = await UsageRecordModel.aggregate([
            {
                $match: { vehicleId: vehicleId }
            },
            {
                $group: {
                    _id: {
                        vehicleId: '$vehicleId',
                        date: { $dateToString: { format: '%Y-%m-%d', date: '$timestamp' } }
                    },
                    totalHoursOperated: { $sum: '$hoursOperated' },
                    totalDistanceTraveled: { $sum: '$distanceTraveled' }
                }
            },
            {
                $project: {
                    _id: 0,
                    vehicleId: '$_id.vehicleId',
                    date: '$_id.date',
                    totalHoursOperated: 1,
                    totalDistanceTraveled: 1
                }
            },
            {
                $sort: { date: 1 }
            }
        ]);

        return result.map(entry => ({
            vehicleId: entry.vehicleId,
            date: entry.date,
            totalHoursOperated: entry.totalHoursOperated,
            totalDistanceTraveled: entry.totalDistanceTraveled
        }));
    } catch (error) {
        throw new Error('Failed to retrieve usage analytics.');
    }
};


