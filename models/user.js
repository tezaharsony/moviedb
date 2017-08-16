'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });
  User.associate = models => {
    User.belongsToMany(models.Movie, {through : 'MovieUser'})
  }
  return User;
};
