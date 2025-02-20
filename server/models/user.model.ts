import sequelize from './index'
import {DataTypes} from 'sequelize'

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

export default User;
