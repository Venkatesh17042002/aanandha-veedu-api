'use strict';

// Define a model for stock table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('stock', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
      
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Quantity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Exact: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    tableName: 'stock'
  });
  // Adding a class level method.
  Model.associate = function (models) {
  };
  return Model;
};