`use strict`

module.exports = function (sequelize, DataTypes) {
const User = sequelize.define(`user`, {
    // freezeTableName: true,
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
        }
    },
    email: {
        type: DataTypes.STRING,
        allownNull: false,
        validate: {
            isEmail: {
                msg: `Must be a valid email address`
            }
        }
    }
});
return User;         
};