'use strict';

const sequelize = require('./index');
import {DataTypes} from 'sequelize'

interface User {
  mail: string;
  password: string;
}

const User:User = sequelize.define('user', {
    mail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

module.exports = User;