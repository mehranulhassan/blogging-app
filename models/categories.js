'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categories.belongsTo(models.Posttocategories,{
        onDelete:"CASCADE",
        foreignKey:'category_id',
        as:'posttocategories'
      });
      
    }
  }
  Categories.init({
    category_url: DataTypes.STRING,
    category_name: DataTypes.STRING,
    category_summary: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};