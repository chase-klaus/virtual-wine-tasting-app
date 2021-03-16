// const Sequelize = require('sequelize');
import {Sequelize} from 'sequelize';

// const { DB_CONNECTION_URI } = process.env;
console.log('postgres://postgres:password@localhost:5432/winetasting');
const sequelize = new Sequelize('postgres://postgres:password@localhost:5432/winetasting')

export default sequelize;

// module.exports = sequelize;
