import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import fs from "fs";
import path from "path";

const pathToKey = path.join(__dirname, "./rsa_priv.pem");
const PRIV_KEY = fs.readFileSync(pathToKey, "utf8");

export function hashPassword(password: string) {
  const SALT_ROUNDS = 10;
  try {
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  } catch (error) {
    console.log(`An error occurred: ${error}`);
  }
}

export async function verifyPassword(
  clientPassword: string,
  hashedPassword: string
) {
  const match = await bcrypt.compare(clientPassword, hashedPassword);
  return match;
}

export function issueJwt(user: any) {
  const username: string = user.username;
  const expiration: string = "1d";

  const payload = {
    sub: username,
    iat: Date.now(),
  };

  const signedToken = jsonwebtoken.sign(payload, PRIV_KEY, {
    expiresIn: expiration,
    algorithm: "RS256",
  });

  return {
    token: signedToken,
    expires: expiration,
  };
}
