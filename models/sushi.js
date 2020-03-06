module.exports = sequelize.define("sushi", {
    name: {
        type:DataTypes.STRING,
        allowNULL: false,
    },
    description: {
        type:DataTypes.STRING,
        allowNULL: false
    },
    picture: {
        type:DataTypes.picture,
        allowNULL: true
    },
    category: {
        type:DataTypes.STRING,
        allowNULL: False 
    }


});

new.sushi()