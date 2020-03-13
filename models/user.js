`use strict`

module.exports = function (sequelize, DataTypes) {
const User = sequelize.define(`user`, {
    // freezeTableName: true,
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
        }
    },
    nameJa: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
        }
    }
});
return User;         
};