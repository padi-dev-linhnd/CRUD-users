// import CRUDservices from "../services/CRUDservices";

// var createUser = (req, res) => {
//   return res.render("createUser.ejs");
// };

// var postCRUD = async (req, res) => {
//   var data = req.body;
//   var message = await CRUDservices.crateUsers(data);
//   console.log(message);
//   return res.render("createUser.ejs");
// };

// var getCRUD = async (req, res) => {
//   var data = await CRUDservices.getAllUsers();
//   return res.render("getCRUD.ejs", { data: data });
// };

// var getEditCRUD = async (req, res) => {
//   var userId = req.query.id;
//   if (userId) {
//     var userData = await CRUDservices.getUserInfoById(userId);
//     console.log(userData);
//     return res.render("editCRUD.ejs", { userData: userData });
//   } else {
//     return res.send("k co id nao o day ca");
//   }
// };
// var putEditCRUD = async (req, res) => {
//   var data = req.body;
//   var allUser = await CRUDservices.updateDataCRUD(data);
//   return res.render("getCRUD.ejs", { data: allUser });
// };

// var deleteCRUD = async (req, res) => {
//   var id = req.query.id;
//   if (id) {
//     var allUser = await CRUDservices.deleteCRUDById(id);
//     return res.render("getCRUD.ejs", { data: allUser });
//   }
// };

// module.exports = {
//   getCRUD,
//   postCRUD,
//   createUser,
//   getEditCRUD,
//   putEditCRUD,
//   deleteCRUD,
// };
