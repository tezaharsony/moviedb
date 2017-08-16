'use strict';
module.exports = function(sequelize, DataTypes) {
  var Movie = sequelize.define('Movie', {
    movie_name: DataTypes.STRING,
    release_year: DataTypes.STRING,
    synopsis: DataTypes.TEXT,
    company: DataTypes.STRING,
    producer: DataTypes.STRING
  });
  Movie.associate = models => {
    Movie.belongsToMany(models.User, {through : 'MovieUser'})
  }
  return Movie;
};
