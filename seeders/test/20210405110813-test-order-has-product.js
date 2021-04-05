'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Order_has_product', [
      
    {
      OrderId:1,
      ProductId:1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Order_has_product', null, {});

  }
};
