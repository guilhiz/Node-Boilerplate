import jwt from 'jsonwebtoken';

import { Request, Response, NextFunction } from 'express';

import erros from '../erros';
import 'dotenv/config';

type JWTPayload = {
  userId: number;
};

const tokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  const token = authorization?.split(' ')[1]?.trim();

  if (!token) throw erros.unauthorizedError();

  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET!) as JWTPayload;
    res.locals.userId = userId;
  } catch {
    throw erros.unauthorizedError();
  }

  next();
};

export default tokenMiddleware;
