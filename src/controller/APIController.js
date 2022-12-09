import APIServices from "../services/APIServices";

const getUser = async (req, res) => {
  const userId = req.query.id;
  const data = await APIServices.getUser(userId);
  return res.status(200).json({
    data: data,
  });
};

const getUsers = async (req, res) => {
  const data = await APIServices.getUsers();
  return res.status(200).json({
    data: data,
  });
};

const createUser = async (req, res) => {
  const dataUser = req.body;
  const message = await APIServices.createUser(dataUser);
  return res.status(200).json({
    message: message,
  });
};

const updateUser = async (req, res) => {
  const dataUser = req.body;
  // const userId = {
  //   userId: req.query.id,
  // };
  // dataUser = { ...dataUser, ...userId };
  const messages = await APIServices.updateUser(dataUser);
  return res.status(200).json({
    message: messages,
  });
};

const deleteUser = async (req, res) => {
  const userId = req.query.id;
  const message = await APIServices.deleteUser(userId);
  return res.status(200).json({
    message: message,
  });
};

module.exports = {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUsers,
};
