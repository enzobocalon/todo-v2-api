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

    app.use(cors());
    app.use(function(req, res, next) {
      res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
      console.log('🚀 Running server');
    });

  })
  .catch(() => console.log('❌ Failed to connect to database.'));
