import express from "express";

import {
  create,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUser,
} from "../controllers/user.Controller.js";

const route = express.Router();

route.post("/user", create);
route.get("/users", getAllUsers);
route.get("/users/:id", getUserById);
route.put("/update/user/:id", updateUserById);
route.delete("/delete/user/:id", deleteUser);

export default route;
