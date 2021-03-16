// const Sequelize = require('sequelize');
import {Sequelize} from 'sequelize';

const { DB_CONNECTION_URI } = process.env;
console.log(DB_CONNECTION_URI);
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/winetasting');

export default sequelize;

// module.exports = sequelize;
