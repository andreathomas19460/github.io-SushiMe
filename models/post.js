`use strict`

module.exports = function (sequelize, DataTypes) {
const Post = sequelize.define(`Post`, {
    // freezeTableName: true,
    user: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
        }
    },
    sushiArray: {
        type: DataTypes.STRING,
        allowNull: true

    }
});
return Post;         
};