'use strict';

require('dotenv').config(); 
const express = require("express");
const router = require('./router');
const cors = require("cors");
const app = express();
const sequelize = require("./models");
const User = require('./models/user.model');
const Tasting = require('./models/tasting.model');

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.get("/", (req, res) => {
  res.json({ message: "Hello from the Express Server 🍷" });
});

sequelize.sync();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}🍷.`);
});


