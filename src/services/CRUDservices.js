import db from "../models/index";

var crateUsers = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.create({
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        phonenumber: data.PhoneNumber,
        sex: data.sex === "1" ? true : false,
      });
      resolve("them vao database thanh cong");
    } catch (err) {
      reject(err);
    }
  });
};

var getAllUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      var user = await db.User.findAll({
        raw: true,
      });
      resolve(user);
    } catch (err) {
      reject(err);
    }
  });
};

var getUserInfoById = (userID) => {
  return new Promise(async (resolve, reject) => {
    try {
      var dataUser = await db.User.findOne({
        raw: true,
        where: { id: userID },
      });
      resolve(dataUser);
    } catch (err) {
      reject(err);
    }
  });
};

var updateDataCRUD = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      var user = await db.User.findOne({
        where: { id: data.id },
      });
      if (user) {
        user.email = data.email;
        user.phonenumber = data.PhoneNumber;
        user.address = data.address;
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        await user.save();
        var allUser = await db.User.findAll();
        resolve(allUser);
      } else {
        resolve("khong co user nao ca");
      }
    } catch (err) {
      reject(err);
    }
  });
};

// var deleteCRUDById = (id) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       var user = await db.User.findOne({
//         where: { id: id },
//       });
//       if (user) {
//         await user.destroy();
//       }
//       var allUser = await db.User.findAll();
//       resolve(allUser);
//     } catch (err) {
//       reject(err);
//     }
//   });
// };

module.exports = {
  crateUsers,
  getAllUsers,
  getUserInfoById,
  updateDataCRUD,
  deleteCRUDById,
};
