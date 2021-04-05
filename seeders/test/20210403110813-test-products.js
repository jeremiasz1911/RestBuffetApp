'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Products', [
      
    {
      name:'Omlety',
      secondName:'Omletes',
      image:'./images/products/omletes.png',
      price:20,
      preparationTime:10,
      description:'Omlety z jaj kurzych na maśle w sosie tłuszczowym podawane na gorocoho',
      secondDescription:'Eggs with flour , hot spicy omletes',
      weight:521,
      vege:false,
      createdAt: new Date(),
      updatedAt: new Date(),
      CategoryId:1
    }
  ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Products', null, {});

  }
};
