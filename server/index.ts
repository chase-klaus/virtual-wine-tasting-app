'use strict';

import { config } from 'dotenv';
config(); 
import express from 'express';
import router from './router';
import cors from 'cors';
const app = express();
import sequelize from './models';
import './models/associations';

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsConfig));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(router);

sequelize.sync({force: true});

const PORT = process.env.PORT;
const serverApp = app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}🍷.`);
});

export default serverApp;