import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { router } from './routes';
import * as dotenv from 'dotenv';
dotenv.config();

// Create an .env file and insert your mongodb url there
// following: MONGODB_URI = ""
// you can change your port
const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => {
    const app = express();

    app.use(cors({
      origin: ['https://react-todo-v2.vercel.app', 'http://localhost:5173/'],
      methods: ['GET','POST','DELETE','PATCH'],
      allowedHeaders: '*'
    }));
    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
      console.log('🚀 Running server on http://localhost:3001');
    });

  })
  .catch(() => console.log('❌ Failed to connect to database.'));
