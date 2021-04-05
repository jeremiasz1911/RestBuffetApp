use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      // *** ASSIOCIATE USERS ***
      return queryInterface.addColumn(
        'Users',
        'RoleId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Roles',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    })

    .then(() => {
      // *** ASSIOCIATE ORDER ***
      return queryInterface.addColumn(
        'Orders',
        'UserId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        }
    )})

    .then(() => {
      // *** ASSIOCIATE ORDER ***
      return queryInterface.addColumn(
        'Orders',
        'StatusId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Order_statuses',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        }
    )})

    .then(() => {
      // *** ASSIOCIATE PRODUCT ***
      return queryInterface.addColumn(
        'Product',
        'CategoryId',
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'Categories',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
        }
    )})

    
    
  },

  down: async (queryInterface, Sequelize) => {
    // *** USERS ***
    return queryInterface.removeColumn(
      'Users',
      'RoleId'
    ).then(() => {
    // *** ORDERS ***
      queryInterface.removeColumn(
        'Orders',
        'UserId'
    )})
    .then(() => {
      // *** ORDERS ***
        queryInterface.removeColumn(
          'Orders',
          'StatusId'
      )})
    .then(() => {
      // *** PRODUCT ***
        queryInterface.removeColumn(
          'Product',
          'CategoryId'
      )})
    
  }
};
