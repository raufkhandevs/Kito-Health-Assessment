import dotenv from 'dotenv';

dotenv.config();

/**
 * Config
 */
export default {
  // App
  appUrl: process.env.APP_URL || 'http://localhost:3001',
  appEnv: process.env.APP_ENV || 'development',
  port: process.env.PORT || 3000,
  debug: process.env.APP_DEBUG,
  mongoURI: process.env.DB_CONNECTION || 'mongodb://localhost:27017/university',

  // features
  questionnairePerPage: (process.env.QUESTIONNAIRE_PER_PAGE || 10) as number,
};
