'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Order_statuses', [
      
    {
      name:'In progress',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Order_statuses', null, {});

  }
};
