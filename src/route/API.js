import express from "express";
import APIController from "../controller/APIController";
let router = express.Router();

const initAPIRoutes = (app) => {
  router.get("/", APIController.getUser);
  router.get("/list", APIController.getUsers);
  router.post("/create", APIController.createUser);
  router.put("/update", APIController.updateUser);
  router.delete("/delete", APIController.deleteUser);

  return app.use("/api/v1/user", router);
};

export default initAPIRoutes;
