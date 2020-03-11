'use strict';

module.exports = function(sequelize, DataTypes) {
  const Sushi = sequelize.define(`Sushi`, {
    // freezeTableName: true,
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
        }
    },
    name_ja: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
        }
    }
  });

  return Sushi;
};