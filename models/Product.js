'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Relation =-----=  with Order
      Product.belongsToMany(models.Order, {
        through: models.OrderProduct 
      });
      //Relation =-----=  with Allergen
      Product.belongsToMany(models.Allergen, {
        through: models.AllergenProduct
      });
      //Relation =-----1  with Type
      Product.belongsTo(models.Type)
    };
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    ImagePath: DataTypes.STRING,
    price: DataTypes.INTEGER,
    gluten: DataTypes.BOOLEAN,
    vegetarian: DataTypes.BOOLEAN,
    TypeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};