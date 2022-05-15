import express, { response } from "express";
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
  console.log(newUserObj);
  const transaction = await userController.registerUser(newUserObj);
  console.log(`transaction: ${transaction}`);
  if (transaction !== undefined) {
    const jwt = issueJwt(transaction?.rows[0].username);
    reponse.json({
      success: true,
      user: transaction?.rows[0].username,
      token: jwt.token,
      expiresIn: jwt.expires,
    });
  }
  // add response in case registration fails.
  reponse.end();
});

router.post("/login", async (request, response) => {
  // add validation

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
        response.status(200).json({
          sucess: true,
          token: tokenObject,
          expiresIn: tokenObject.expires,
        });
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
  "/protected",
  passport.authenticate("jwt", { session: false }),
  async (request, response) => {
    response.status(200).json({ sucess: true, message: "authorized" });
  }
);

export default router;
