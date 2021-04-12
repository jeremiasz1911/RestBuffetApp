import Model from 'sequelize';
export default (sequelize, DataTypes) => {
  class Order_statuses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order_statuses.hasMany(models.Orders);
    }
  };
  Order_statuses.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order_statuses',
  });
  return Order_statuses;
};