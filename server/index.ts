'use strict';

require('dotenv').config(); 
import * as express from 'express';
// const express = require("express");
const router = require('./router');
const cors = require("cors");
const app = express();
const sequelize = require("./models");

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.get("/", (req:express.Request, res:express.Response) => {
  res.json({ message: "Hello from the Express Server 🍷" });
});

sequelize.sync();

const PORT = process.env.PORT || 3001;
app.listen(PORT, ():void => {
  console.log(`Server is running on port http://localhost:${PORT}🍷.`);
});


