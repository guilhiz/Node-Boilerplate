import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

export function loadEnv() {
  const path = `envs/.env.${process.env.NODE_ENV}`;

  const currentEnvs = dotenv.config({ path });
  dotenvExpand.expand(currentEnvs);
}
