'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Roles', [
      {
      name: 'Admin',
      addingUsers: true,
      editingMenu: true,
      dashboardAccess: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Director',
      addingUsers: true,
      editingMenu: true,
      dashboardAccess: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Analyst',
      addingUsers: false,
      editingMenu: false,
      dashboardAccess: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Manager',
      addingUsers: true,
      editingMenu: true,
      dashboardAccess: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Older Waiter',
      addingUsers: false,
      editingMenu: true,
      dashboardAccess: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Waiter',
      addingUsers: false,
      editingMenu: false,
      dashboardAccess: false,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    
  ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Roles', null, {});

  }
};
