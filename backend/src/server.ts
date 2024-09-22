import express from 'express';
import config from '@/config';
import connectDB from '@/database/mongoose';
import appRouter from '@/routes';
import cors from 'cors';

/**
 * Express app
 *
 * @type {*}
 */
const app = express();

/**
 * Enable CORS
 */
app.use(cors());

/**
 * Middlewares
 */
app.use(express.json());

/**
 * api routes
 */
app.use('/api', appRouter);

/**
 * Connect to database and start the server
 */
connectDB(config.mongoURI)
  .then(() => {
    app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  })
  .catch((err) => {
    console.error(`Failed to start the server due to ${err.message}:`, err);
  });
