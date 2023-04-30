import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';

import express, { json } from 'express';

import { loadEnv } from './configs/loadEnvs';
import handleApplicationErrors from './middlewares/error.middleware';
import routes from './routes';

loadEnv();

const app = express();

app.use(cors());
app.use(json());
app.use(helmet());
app.get('/health', (_req, res) => res.send('OK!'));
app.use(routes);
app.use(handleApplicationErrors);

export default app;
