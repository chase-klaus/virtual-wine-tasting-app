import User from './user.model';
import Tasting from './tasting.model';

const associationOpts = {
  foreignKey: 'userId',
  as: 'tastings'
};

Tasting.belongsTo(User, associationOpts);
User.hasMany(Tasting, associationOpts);

console.log("Associations Check");