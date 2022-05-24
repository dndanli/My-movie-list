import express from "express";
import passport from "passport";
import { UserController } from "../controllers/userController";
import { UserService } from "../services/userService";
import { issueJwt, verifyPassword } from "../utils/utils";
const router = express.Router();

// route starts with user
const userService = new UserService();
const userController = new UserController(userService);

router.post("/register", async (request, reponse) => {
  const newUserObj = {
    username: request.body.data.username,
    email: request.body.data.email,
    password: request.body.data.password,
  };
  const transaction = await userController.registerUser(newUserObj);
  if (transaction !== undefined) {
    const tokenObject = issueJwt(transaction?.rows[0].username);

    reponse.json({
      success: true,
      user: transaction?.rows[0].username,
      token: tokenObject.token,
      expiresIn: tokenObject.expires,
    });
  }
  //TODO:Todo: add response in case registration fails.
});

router.post("/login", async (request, response) => {
  // find users by username in database
  const clientUserCredentials = {
    username: request.body.data.username,
    password: request.body.data.password,
  };

  const user = await userController.findUserByUsername(
    clientUserCredentials.username
  );

  if (user !== undefined) {
    if (user?.rows.length > 0) {
      const hashedPassword = await userController.findPasswordByUsername(
        clientUserCredentials.username
      );

      const match = await verifyPassword(
        clientUserCredentials.password,
        hashedPassword
      );

      if (match) {
        const tokenObject = issueJwt(clientUserCredentials);

        //TODO: set cookie that will expire in 1 day.
        response.cookie("token", tokenObject.token, {
          maxAge: 24 * 60 * 60,
          httpOnly: true,
        });

        response.status(200).json({
          sucess: true,
          token: tokenObject.token,
        });

        response.end();
      } else {
        response.status(401).json({
          sucess: false,
          message: "username or password is incorrect.",
        });
      }
    } else {
      response
        .status(401)
        .json({ success: false, message: "could not find user" });
    }
  }
  response.end();
});

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  async (request, response) => {
    response.status(200).json({ sucess: true, message: "authorized" });
  }
);

export default router;
