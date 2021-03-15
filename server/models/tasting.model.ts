'use strict';
import { DataTypes } from 'sequelize'
import sequelize from './index';

// interface Tasting {
//   winery: string,
//   year: number,
//   grape: string,
//   fruit: number,
//   acidity: number,
//   tannins: number,
//   body: number,
//   dominantFlavors: string[],
//   arrPossibleFlavors: string[],
//   overallRating: number
// }

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
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: true
  },
  arrPossibleFlavors: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
    allowNull: true
  },
  overallRating: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
});

export default Tasting;