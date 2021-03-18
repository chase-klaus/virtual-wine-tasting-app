'use strict';

require('dotenv').config(); 
import express from 'express';
import router from './router';
import cors from 'cors';
const app = express();
import sequelize from './models';
// import './models/tasting.model'
// app.use(cors());

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app.use(cors(corsConfig));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(router);

// app.get("/test", (req:express.Request, res:express.Response) => {
//   res.status(200).send('hello');
// });

sequelize.sync();

const PORT = process.env.PORT || 3001;
const serverApp = app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}🍷.`);
});


module.exports = serverApp;