"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        email: "linhnd@paditech.com",
        firstName: "nguyen danh",
        lastName: "linh",
        address: "ba vi - ha noi",
        phonenumber: "0329323119",
        sex: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
