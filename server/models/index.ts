// const Sequelize = require('sequelize');
import {Sequelize} from 'sequelize';

const DB_CONNECTION_URI = process.env.DB_CONNECTION_URI || 'postgres://localhost:5432/postgres';
const sequelize = new Sequelize(DB_CONNECTION_URI);

export default sequelize;

// module.exports = sequelize;
