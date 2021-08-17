import dotenv from 'dotenv';

dotenv.config();

const config = {
  env: process.env.ENV,
  port: process.env.PORT,
};

export default config;
