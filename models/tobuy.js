'use strict';

// Define a model for tobuy table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('tobuy', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
      
    },
    Item: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'tobuy'
  });
  // Adding a class level method.
  Model.associate = function (models) {
  };
  return Model;
};