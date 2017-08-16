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

    return queryInterface.bulkInsert('Users', [{
      username: "John Doe",
      password: "12345",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: "Teja Kantal",
      password: "123456789",
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

    return queryInterface.bulkDelete('Users', [{
      username: "John Doe",
      password: "12345",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: "Teja Kantal",
      password: "123456789",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  }
};
