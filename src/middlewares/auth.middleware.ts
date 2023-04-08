import { Request, Response, NextFunction } from "express";

import erros from "../erros/index.js";
// import jwt from "jsonwebtoken";
import "dotenv/config";

// type JWTPayload = {
//   userId: number;
// };

const tokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;
  const token = authorization?.split(" ")[1]?.trim();

  if (!token) throw erros.unauthorizedError();

  try {
    // const { userId } = jwt.verify(token, process.env.SECRET_KEY) as JWTPayload;
    // res.locals.userId = userId;
  } catch {
    throw erros.unauthorizedError();
  }

  next();
};

export default tokenMiddleware;
