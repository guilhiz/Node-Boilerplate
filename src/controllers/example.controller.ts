import chalk from "chalk";

import { Request, Response, NextFunction } from "express";
// import { z } from "zod";

const create = async (req: Request, res: Response, next: NextFunction) => {
  // const { name, password } = res.locals.sanitizedRequest as z.infer<typeof exampleSchema>;
  console.log(chalk.cyan("POST /example"));

  try {
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
};

export default {
  create,
};
