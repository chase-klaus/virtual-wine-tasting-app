import {Sequelize} from 'sequelize';

const { DB_CONNECTION_URI } = process.env;
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/winetasting');

export default sequelize;
