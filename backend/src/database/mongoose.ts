import mongoose from 'mongoose';

/**
 * Connect to database
 *
 * @param {string} connectionString
 * @returns {Promise<void>}
 */
const connectDB = (connectionString: string): Promise<void> => {
  return mongoose
    .connect(connectionString)
    .then(() => {
      console.log('MongoDB connected...');
    })
    .catch((err) => {
      console.error('Database connection failed:', err);
      process.exit(1);
    });
};

export default connectDB;
