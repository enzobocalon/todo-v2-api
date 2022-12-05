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

    // app.use(cors());
    app.use((req, res, next) => {
      const allowedOrigins = ['http://127.0.0.1:8020', 'http://localhost:8020', 'http://127.0.0.1:9000', 'http://localhost:9000'];
      const origin = req.headers.origin;
      if (allowedOrigins.includes(origin as string)) {
        res.setHeader('Access-Control-Allow-Origin', origin as string);
      }
      //res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8020');
      res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.header('Access-Control-Allow-Credentials', true);
      return next();
    });
    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
      console.log('🚀 Running server');
    });

  })
  .catch(() => console.log('❌ Failed to connect to database.'));
