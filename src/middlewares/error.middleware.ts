import { Request, Response, NextFunction } from 'express';

type ApplicationError = {
  status?: number;
} & Error;

const handleApplicationErrors = (
  err: ApplicationError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) => {
  if (err.status) {
    return res.status(err.status).send({ name: err.name, message: err.message });
  }

  console.log(err);
  return res.status(500).send({
    message: 'Internal Server Error'
  });
};

export default handleApplicationErrors;
