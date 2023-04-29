'use strict';

// Define a model for budget table
module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('budget', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Balance: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'budget'
  });
  // Adding a class level method.
  Model.associate = function (models) {
  };
  return Model;
};