import bcrypt from "bcrypt";

export function savePassword(password: string) {
  const SALT_ROUNDS = 10;
  try{
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  }catch(error){
    console.log(`An error occurred: ${error}`);
  }
}
