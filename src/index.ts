import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRouter from './routes/apiRoutes';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swaggerConfig';
import path from 'path';
import multer from 'multer';

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

// Add middleware for serving static files
app.use(express.static('public'));

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads'); // Set the destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Set a unique filename
  },
});

const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());
app.use(upload.single('picture')); // Use multer middleware for handling file uploads

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', apiRouter);

app.listen(process.env.PORT || "3001", () => {
  connect();
  console.log("Connected to backend.");
});
export default app;
