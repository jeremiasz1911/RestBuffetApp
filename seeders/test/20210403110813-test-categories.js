'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Categories', [
      
    {
      name:'Śniadanie',
      secondName:'Breakfast',
      image:'./images/soft/ads.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Categories', null, {});

  }
};
