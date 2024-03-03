import request from 'supertest';
import express, { Express } from 'express';
import mongoose from 'mongoose';
import usageRoutes from '../src/routes/api/usageRoutes';

const app: Express = express();

app.use(express.json());
app.use('/api/usage', usageRoutes);
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/vehicle_tracking_db');
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('Usage Routes', () => {
  it('should log usage analytics for a vehicle', async () => {
    const response = await request(app)
      .post('/api/usage/vehicleID1')
      .send({
        hoursOperated: 10,
        distanceTraveled: 200,
        date: '2022-03-03',
      })
      .expect(201);

    expect(response.body).toEqual({ message: 'Usage logged successfully.' });
  });

  it('should get usage analytics for a vehicle', async () => {
    const response = await request(app)
      .get('/api/usage/vehicleID1')

    expect(response.body).toBeInstanceOf(Array);
  });
});