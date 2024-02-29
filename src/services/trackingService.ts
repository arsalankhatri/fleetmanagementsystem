// src/services/trackingService.ts
export const simulateTrackingUpdates = (
    vehicleIds: string[],
    updateCallback: (vehicleId: string, status: string, location: string) => void
): void => {
    setInterval(() => {
        // Simulate tracking updates for registered vehicles
        vehicleIds.forEach(vehicleId => {
            const statusOptions = ['active', 'maintenance'];
            const randomStatus = statusOptions[Math.floor(Math.random() * statusOptions.length)];
            const randomLocation = generateRandomLocation();

            updateCallback(vehicleId, randomStatus, randomLocation);
        });
    }, 5000); // Update every 5 seconds
};

const generateRandomLocation = (): string => {
    const latitude = (Math.random() * 180 - 90).toFixed(6);
    const longitude = (Math.random() * 360 - 180).toFixed(6);
    return `${latitude}, ${longitude}`;
};
