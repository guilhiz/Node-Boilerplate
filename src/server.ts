import "express-async-errors";
import express, { json } from "express";
import cors from "cors";
import helmet from "helmet";
import chalk from "chalk";
import * as dotenv from "dotenv";

import routes from "./routes";
import handleApplicationErrors from "./middlewares/error.middleware";

dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use(helmet());
// app.use(routes);
// app.use(handleApplicationErrors);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(chalk.green(`Server running in port: ${port}`));
});
