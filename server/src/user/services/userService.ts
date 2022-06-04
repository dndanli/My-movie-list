import { pool } from "../../configs/postgres-config";
import { hashPassword } from "../utils/utils";

class UserService {
  constructor() {}

  /**
   *
   * @param username string
   * @returns user result query
   */
  async findUserByUsername(username: string) {
    const client = await pool.connect();
    try {
      const textQuery = `
          SELECT username, email FROM users WHERE username = $1
        `;
      return await client.query(textQuery, [username]);
    } catch (error) {
      console.log(`there was an error ${error}`);
    } finally {
      client.release();
    }
  }

  /**
   *
   * @param email string
   * @returns user email
   */
  async findUserByEmail(email: string) {
    const client = await pool.connect();
    try {
      const textQuery = `
          SELECT email FROM users WHERE email = $1
        `;
      return await client.query(textQuery, [email]);
    } catch (error) {
      console.log(`there was an error ${error}`);
    } finally {
      client.release();
    }
  }

  /**
   *
   * @param username string
   * @returns hashed user password
   */
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

  /**
   *
   * @param username string
   * @returns id for user with given username
   */
  async getUserId(username: string) {
    const client = await pool.connect();
    try {
      const textQuery = `SELECT id FROM users WHERE username = $1`;
      const res = await client.query(textQuery, [username]);
      return res.rows[0].id;
    } catch (error) {
      console.log(`there was an error ${error}`);
    } finally {
      client.release();
    }
  }

  /**
   *
   * @param user user object with username and email
   * @returns  QueryResult<any> transaction
   */
  async registerUser(user: any) {
    const client = await pool.connect();
    try {
      const findUserRes = await this.findUserByUsername(user.username);
      const findUserEmail = await this.findUserByEmail(user.email);

      if (findUserRes !== undefined && findUserEmail !== undefined) {
        if (findUserRes.rowCount === 0) {
          if (findUserEmail?.rowCount === 0) {
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
            console.log("this email is aleady registered with another account");
          }
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
