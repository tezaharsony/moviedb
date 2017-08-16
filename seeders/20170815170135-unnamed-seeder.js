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
      movie_name: "Dawn of the dead",
      release_year: "2004",
      synopsis:"When zombie ruining the world and eat you like a donut",
      company:"Universal Studios",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      movie_name: "Titanic",
      release_year: "1997",
      synopsis:"Sink of the sheep",
      company:"Paramount",
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
      movie_name: "Dawn of the dead",
      release_year: "2004",
      synopsis:"When zombie ruining the world and eat you like a donut",
      company:"Universal Studios",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      movie_name: "Titanic",
      release_year: "1997",
      synopsis:"Sink of the sheep",
      company:"Paramount",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  }
};
