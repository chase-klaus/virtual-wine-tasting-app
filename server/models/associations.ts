const User = require('./user.model')
const Tasting = require('./tasting.model')

const associationOpts = {
  foreignKey: 'user_id',
  as: 'tastings'
};

Tasting.belongsTo(User, associationOpts);
User.hasMany(Tasting, associationOpts);
