'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User,{
        onDelete:'CASCADE',
        foreignKey:user_id,
        targetKey:'id',
        as:'user'


      });
      Post.hasMany(models.Comments,{
        onDelete:"CASCADE",
        foreignKey:'post_id',
        targetkey:'id',
        as:'comments'

      })
    }
  }
  Post.init({
    user_id: DataTypes.INTEGER,
    post_url: DataTypes.STRING,
    post_title: DataTypes.STRING,
    post_summary: DataTypes.STRING,
    post_content: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};