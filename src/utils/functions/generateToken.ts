import jwt from 'jsonwebtoken';

import { MS_IN_DAY } from '../constants';
import 'dotenv/config';

export const generateToken = async (payload: object): Promise<string> => {
  const token = jwt.sign(payload, process.env.JWT_SECRET!, {
    expiresIn: MS_IN_DAY
  });
  return token;
};
