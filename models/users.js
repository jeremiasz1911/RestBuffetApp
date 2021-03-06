import Model from 'sequelize';
export default (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.belongsTo(models.Roles);
      Users.hasMany(models.Orders);
    }
  };
  Users.init({
    phone: DataTypes.STRING,
    picture: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};