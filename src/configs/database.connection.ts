import pg from "pg";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const configDatabase = {
  connectionString: process.env.DATABASE_URL,
  ...(process.env.NODE_ENV === "production" && {
    ssl: {
      rejectUnauthorized: false,
    },
  }),
};

const db = new Pool(configDatabase);

db.connect((err) => {
  if (err) {
    console.error(chalk.red("Error connecting to the database:"), err.stack);
  } else {
    console.log(chalk.blue("Successfully connected to the database!"));
  }
});

export default db;
