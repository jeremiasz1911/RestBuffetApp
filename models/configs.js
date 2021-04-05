'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Configs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Configs.init({
    isTipShared: DataTypes.BOOLEAN,
    mainLanguage: DataTypes.STRING,
    secondaryLanguage: DataTypes.STRING,
    restaurantName: DataTypes.STRING,
    logo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Configs',
  });
  return Configs;
};