// const Sequelize = require('sequelize');
import {Sequelize} from 'sequelize';

const { DB_CONNECTION_URI } = process.env;
console.log(DB_CONNECTION_URI);
const sequelize = new Sequelize(DB_CONNECTION_URI)

export default sequelize;

// module.exports = sequelize;