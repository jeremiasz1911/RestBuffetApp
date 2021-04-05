'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Orders', [
      
    {
      number:1,
      tip:5,
      OrderStatusId:1,
      UserId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Orders', null, {});

  }
};
