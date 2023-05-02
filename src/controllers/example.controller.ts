import chalk from 'chalk';

import { Request, Response, NextFunction } from 'express';
// import { exampleProps } from '../@types';

const create = async (req: Request, res: Response, next: NextFunction) => {
  // const { email, password } = res.locals.sanitizedRequest as exampleProps;
  console.log(chalk.cyan('POST /example'));

  try {
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

export default {
  create
};
