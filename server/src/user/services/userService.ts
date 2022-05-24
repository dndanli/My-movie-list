import { credentials } from "../../configs/postgres-config";
import { Pool } from "pg";
import { hashPassword } from "../utils/utils";
const pool = new Pool(credentials);

//TODO: STORE JWT INTO HTTP ONLY COOKIE.

class UserService {
  constructor() {}
  async findUserByUsername(username: string) {
    const client = await pool.connect();
    try {
      const textQuery = `
          SELECT username FROM users WHERE username = $1
        `;
      return await client.query(textQuery, [username]);
    } catch (error) {
      console.log(`there was an error ${error}`);
    } finally {
      client.release();
    }
  }

  async findPasswordByUsername(username: string) {
    const client = await pool.connect();
    try {
      const textQuery = `
          SELECT password FROM users WHERE username = $1
        `;
      const res = await client.query(textQuery, [username]);
      return res.rows[0].password;
    } catch (error) {
      console.log(`there was an error ${error}`);
    } finally {
      client.release();
    }
  }

  async registerUser(user: any) {
    const client = await pool.connect();
    try {
      const res = await this.findUserByUsername(user.username);
      console.log(res);
      if (res !== undefined) {
        if (res.rowCount === 0) {
          await client.query("BEGIN");
          const textQuery = `
              INSERT INTO users (username, email, password)
              VALUES ($1, $2, $3)
              RETURNING username
              `;
          const hashedPassword = hashPassword(user.password);
          const values = [user.username, user.email, hashedPassword];
          const transaction = await client.query(textQuery, values);
          await client.query("COMMIT");
          return transaction;
        } else {
          console.log("username is not available");
          return;
        }
      }
    } catch (error) {
      console.log(`there was an error ${error}`);
      await client.query("ROLLBACK");
    } finally {
      client.release();
    }
  }
}

export { UserService };
