'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Orders.belongsTo(models.Users);
      Orders.belongsTo(models.Order_statuses);
      Orders.belongsToMany(models.Products, { through: 'Order_has_product' });

    }
  };
  Orders.init({
    number: DataTypes.INTEGER,
    tip: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};