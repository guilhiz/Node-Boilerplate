const createError = (status: number, name: string, message: string) => ({ status, name, message });

const unauthorizedError = () => createError(401, "UnauthorizedError", "You must be signed in to continue");

const invalidCredentialsError = () => createError(401, "InvalidCredentialsError", "Invalid email or password");

const notFoundError = () => createError(404, "NotFoundError", "No results found for this search!");

const duplicatedUserError = () => createError(409, "DuplicatedUserError", "User already exists");

const unprocessableEntityError = (message: string[]) =>
  createError(422, "UnprocessableEntityError", `The request body did not match the expected schema: ${message}`);

export default {
  unauthorizedError,
  notFoundError,
  invalidCredentialsError,
  duplicatedUserError,
  unprocessableEntityError,
};
