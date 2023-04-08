import "express-async-errors";
import chalk from "chalk";
import cors from "cors";
import * as dotenv from "dotenv";
import helmet from "helmet";

import express, { json } from "express";

import handleApplicationErrors from "./middlewares/error.middleware";
import routes from "./routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use(helmet());
app.use(routes);
app.use(handleApplicationErrors);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(chalk.green(`Server running in port: ${port}`));
});
