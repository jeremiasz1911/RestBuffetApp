import Model from 'sequelize';
export default (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsTo(models.Categories);
      Products.belongsToMany(models.Orders, { through: 'Order_has_product' });
    }
  };
  Products.init({
    name: DataTypes.STRING,
    secondName: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT,
    preparationTime: DataTypes.INTEGER,
    description: DataTypes.STRING,
    secondDescription: DataTypes.STRING,
    weight: DataTypes.INTEGER,
    vege: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};