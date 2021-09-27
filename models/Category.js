const { Model, DataTypes } = require('sequelize/types');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {

  id:{
    type: DataTypes.INTEGER,
    allowNull:false,
    primarKey:true,
    autoIncriment: true,
  },
  category_name: {
    allowNull:false,
    type: DataTypes.STRING,
  },
  
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
