'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_has_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order_has_product.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order_has_product',
  });
  return Order_has_product;
};