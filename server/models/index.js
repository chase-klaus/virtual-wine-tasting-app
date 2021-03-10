'use strict';

const Sequelize = require('sequelize');

const { DB_CONNECTION_URI } = process.env;
console.log(DB_CONNECTION_URI)
const sequelize = new Sequelize(DB_CONNECTION_URI)

module.exports = sequelize;