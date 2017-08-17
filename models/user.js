'use strict';

const generate = require('../helpers/generateSalt');
const hash = require('../helpers/hash')


module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING
  },{
    hooks: {
      beforeCreate : (models) => {
        const secret = generate(); //helper
        const hashData = hash(secret, models.password);
        models.password = hashData;
        models.salt = secret;
      }
    }
  });
  User.associate = models => {
    User.belongsToMany(models.Movie, {through : 'MovieUser'})
  }
  return User;
};
