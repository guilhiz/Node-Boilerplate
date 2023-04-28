import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';

import express, { json, Request, Response } from 'express';

import { loadEnv } from './configs/loadEnvs.js';
import handleApplicationErrors from './middlewares/error.middleware.js';
import routes from './routes/index.js';

loadEnv();

const app = express();

app.use(cors());
app.use(json());
app.use(helmet());
app.get('/health', (req: Request, res: Response) => res.send("I'am alive!"));
app.use(routes);
app.use(handleApplicationErrors);

export default app;
