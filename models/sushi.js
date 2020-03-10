'use strict';

module.exports = function(sequelize, DataTypes) {
  const Sushi = sequelize.define(`Sushi`, {
    sushi_name: DataTypes.STRING,
    sushi_name_ja: DataTypes.STRING
  });

  return Sushi;
};


