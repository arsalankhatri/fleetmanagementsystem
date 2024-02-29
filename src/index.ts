import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRouter from './routes/apiRoutes';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swaggerConfig';
dotenv.config();

const app = express();

const connect = async () => {

  try {
    await mongoose.connect(process.env.MONGO_URL || '');
    console.log("Connected MongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

app.use(express.json());
app.use(cors());
app.use('/api', apiRouter);
// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen("3001", () => {
  connect();
  console.log("Connected to backend.");
});