'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PosttoCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PosttoCategories.belongsTo(models.Post,{
        onDelete:"CASCADE",
        foreignKey:'post_id',
        targetkey:'id',
        as:'post'
      });
      PosttoCategories.belongsTo(models.Category,{
        onDelete:"CASCADE",
        targetKey:'id',
        foreignKey:'category_id',
        as:'categories'

      }
      )
    }
  }
  PosttoCategories.init({
    post_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'PosttoCategories',
  });
  return PosttoCategories;
};