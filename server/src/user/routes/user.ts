import express from "express";
import { UserController } from "../controllers/userController";
import { UserService } from "../services/userService";

const router = express.Router();

// route starts with user

router.get("/register/:username/:email", (request, reponse) => {
  const userService = new UserService();
  const userController = new UserController(userService);

  const newUserObj = {
    username: request.params.username,
    email: request.params.email,
  };

  userController.registerUser(newUserObj);
  reponse.end();
});

export default router;
