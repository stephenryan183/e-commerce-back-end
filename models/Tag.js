const { Model, DataTypes } = require('sequelize/types');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
  id:{
    type: DataTypes.INTEGER,
    allowNull:false,
    primarKey:true,
    autoIncriment: true,
  },
  tag_name: {
    type: DataTypes.STRING,
  },
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
