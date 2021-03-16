import User from './user.model';
import Tasting from './tasting.model';

const associationOpts = {
  foreignKey: 'user_id',
  as: 'tastings'
};

Tasting.belongsTo(User, associationOpts);
User.hasMany(Tasting, associationOpts);

