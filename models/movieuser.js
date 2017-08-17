'use strict';
module.exports = function(sequelize, DataTypes) {
  var MovieUser = sequelize.define('MovieUser', {
    MovieId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    Rating: DataTypes.INTEGER
  });

  MovieUser.associate = models => {
    MovieUser.belongsTo(models.Movie)
    MovieUser.belongsTo(models.User)
  }

  return MovieUser;
};
