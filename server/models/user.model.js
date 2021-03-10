'use strict';

const sequelize = require('./index');
const { DataTypes } = require('sequelize');

  const User = sequelize.define('user', {
    mail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  user.associate = model => {
    user.hasMany(model.tasting);
  };

module.exports = User;