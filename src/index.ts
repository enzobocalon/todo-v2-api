import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { router } from './routes';
import * as dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT as string | 3977;
mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => {
    const app = express();

    app.use(cors({
      origin: '*'
    }));
    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
      console.log('🚀 Running server');
    });

  })
  .catch(() => console.log('❌ Failed to connect to database.'));
