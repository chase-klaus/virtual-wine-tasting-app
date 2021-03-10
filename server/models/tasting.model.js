'use strict';
const sequelize = require('./index');
const {DataTypes} = require('sequelize');

  const Tasting = sequelize.define('tasting', {
    winery: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    grape: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fruit: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    acidity: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    tannins: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    body: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    dominantFlavors: {
      type: DataTypes.ARRAY(Sequelize.TEXT),
      allowNull: true
    },
    arrPossibleFlavors: {
      type: DataTypes.ARRAY(Sequelize.TEXT),
      allowNull: true
    },
    overallRating: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  });

module.exports = Tasting;