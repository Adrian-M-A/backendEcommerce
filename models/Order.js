'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Relation =-----=  with Product
      Order.belongsToMany(models.Product, {
        through: models.OrderProduct 
      })
    };
  };
  Order.init({
    ProductId: DataTypes.INTEGER,
    CustomerId: DataTypes.INTEGER,
    OrderDate: DataTypes.DATE,
    DeliveryDate: DataTypes.DATE,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};