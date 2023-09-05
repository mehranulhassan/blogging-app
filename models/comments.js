'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comments.belongsTo(model.Users,{
        onDelete:"CASCADE",
        targetKey:'id',
        foreignKey:'user_id',
        as:'users'

      });
      Comments.belongsTo(models.Post,{
        onDelete:"CASCADE",
        targetKey:'id',
        foreignKey:'post_id',
        as:'post'

      })
    }
  }
  Comments.init({
    post_id: DataTypes.INTEGER,
    user_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    user_email: DataTypes.STRING,
    comment_text: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};