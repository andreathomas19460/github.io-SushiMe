'use strict';
module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Sushis', [{
      name : 'salmon',
      name_ja : 'salmon_ja',
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },
  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Sushis', [{
      name : 'salmon'
    }])
  }
};



