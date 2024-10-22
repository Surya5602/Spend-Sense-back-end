import dotenv from 'dotenv'
dotenv.config({ path: './config.env' });
export const secretKey = process.env.JWT_SK