'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    Users.hasMany(models.Post,{
      onDelete:"CASCADE",
      foreignKey:'user_id',
      as:'post',
      targetkey:'id'

    });
    Users.hasMany(models.Comments,{
      onDelete:'CASCADE',
      foreignKey:'user_id',
      targetkey:'id',
      as:'comments'

    })
    }
  }
  Users.init({
    user_role: DataTypes.STRING,
    user_name: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_pass: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};