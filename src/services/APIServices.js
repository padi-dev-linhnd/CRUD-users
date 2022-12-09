import db from "../database/models/index";

const getUser = async (userId) => {
  if (!userId) {
    return "not userID";
  }
  const dataUser = await db.User.findOne({
    raw: true,
    where: { id: userId },
  });
  return dataUser;
};

const getUsers = async () => {
  const dataUser = await db.User.findAll();
  return dataUser;
};

const createUser = async (dataUser) => {
  if (
    !dataUser.email ||
    !dataUser.firstName ||
    !dataUser.lastName ||
    !dataUser.address ||
    !dataUser.PhoneNumber ||
    !dataUser.sex
  ) {
    return "Incomplete user information";
  }
  await db.User.create({
    email: dataUser.email,
    firstName: dataUser.firstName,
    lastName: dataUser.lastName,
    address: dataUser.address,
    phonenumber: dataUser.PhoneNumber,
    sex: dataUser.sex === "1" ? true : false,
  });
  return "ok";
};

const updateUser = async (dataUser) => {
  if (
    !dataUser.email ||
    !dataUser.firstName ||
    !dataUser.lastName ||
    !dataUser.address ||
    !dataUser.PhoneNumber ||
    !dataUser.sex ||
    !dataUser.id
  ) {
    return "Incomplete user information";
  }
  const user = await db.User.findOne({
    where: { id: dataUser.id },
  });
  user.email = dataUser.email;
  user.phonenumber = dataUser.PhoneNumber;
  user.address = dataUser.address;
  user.firstName = dataUser.firstName;
  user.lastName = dataUser.lastName;
  (user.sex = dataUser.sex === "1" ? true : false), await user.save();
  return "ok";
};

const deleteUser = async (userId) => {
  if (!userId) {
    return "not userID";
  }
  const user = await db.User.findOne({
    where: { id: userId },
  });
  if (!user) {
    return "not found user";
  }
  await user.destroy();
  return "ok";
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUsers,
};
