'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users', [
      
    {
      RoleId:1,
      phone:'-',
      picture:'-',
      email:'admin',
      password:'admin',
      token:'9xq2fx',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});

  }
};
