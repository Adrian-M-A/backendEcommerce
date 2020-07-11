'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allergen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Relation =-----=  with Product
      Allergen.belongsToMany(models.Product, {
        through: models.AllergenProduct 
      })
    }
  };
  Allergen.init({
    name: DataTypes.STRING,
    ImagePath: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Allergen',
  });
  return Allergen;
};