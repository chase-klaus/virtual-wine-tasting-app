'use strict';

import { config } from 'dotenv';
config(); 
import express from 'express';
import router from './router';
import cors from 'cors';
const app = express();
import sequelize from './models';

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.get("/", (res: express.Response) => {
  res.json({ message: "Hello from the Express Server 🍷" });
});

sequelize.sync();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}🍷.`);
});

export default app;