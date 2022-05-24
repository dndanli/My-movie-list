import fs from "fs";
import path from "path";
import PassportJwt from "passport-jwt";
import { UserService } from "../user/services/userService";
import { UserController } from "../user/controllers/userController";

const PATH_TO_KEY = path.join(__dirname, "../user/utils/rsa_pub.pem");
console.log(PATH_TO_KEY);

const PUB_KEY = fs.readFileSync(PATH_TO_KEY, "utf8");

const cookieExtractor = (req: any) => {
  let jwt = null;
  if (req && req.cookies) {
    jwt = req.cookies["token"];
  }
  return jwt;
};

const options = {
  jwtFromRequest: cookieExtractor,
  secretOrKey: PUB_KEY,
  algorithms: ["RS256"],
};

const userService = new UserService();
const userController = new UserController(userService);

const strategy = new PassportJwt.Strategy(options, (payload, done) => {
  userController
    .findUserByUsername(payload.sub)
    .then((user) => {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => done(err, null));
});

module.exports = (passport: any) => {
  passport.use(strategy);
};
