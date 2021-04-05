'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Configs', [
      
    {
      isTipShared:true,
      mainLanguage:'Polski',
      secondaryLanguage:'English',
      restaurantName:'Buffet',
      logo:'./images/logos/buffet.png',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Configs', null, {});

  }
};
