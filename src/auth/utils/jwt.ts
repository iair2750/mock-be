import * as dotenv from 'dotenv';

export function getJwtSecret(): string {
  dotenv.config();
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error('jwt error - missing env.JWT_SECRET');
  }
  if (secret.length < 10) {
    throw new Error('jwt error - jwt secret is too short (minimum of 10 characters)');
  }
  return secret;
}
