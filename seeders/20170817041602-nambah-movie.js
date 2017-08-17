'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Movies', [{
      movie_name: "Beauty and the Beast",
      release_year: "2016",
      synopsis:"serah",
      company:"Universal Studios",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      movie_name: "LOL",
      release_year: "1998",
      synopsis:"hahaha",
      company:"wkwkwkw.inc",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Movies', [{
      movie_name: "Beauty and the Beast",
      release_year: "2016",
      synopsis:"serah",
      company:"Universal Studios",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      movie_name: "LOL",
      release_year: "1998",
      synopsis:"hahaha",
      company:"wkwkwkw.inc",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  }
};
