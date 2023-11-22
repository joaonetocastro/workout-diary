import { Request } from 'express';
import { decodedJWTSchema } from './schemas/user-schemas';

declare module 'express' {
  interface Request {
    context?: {
      decodedJWT: decodedJWTSchema;
    };
  }
}