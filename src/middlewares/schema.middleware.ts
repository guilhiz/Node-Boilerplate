import { NextFunction, Request, Response } from "express";
import { Schema, ZodIssue } from "zod";
import sanitizeObject from "../utils/sanitizeObject";
import erros from "../erros";

const schemaMiddleware = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    res.locals.sanitizedRequest = sanitizeObject({ ...req.params, ...req.body, ...req.query });
    const result = schema.safeParse(res.locals.sanitizedRequestData);

    if (!result.success && "error" in result) {
      const errorMessages = result.error.issues.map((issue: ZodIssue) => {
        return issue.path ? `${issue.path.join(".")}: ${issue.message}` : issue.message;
      });

      throw erros.unprocessableEntityError(errorMessages);
    }

    next();
  };
};

export default schemaMiddleware;
