import { credentials } from "../../configs/postgres-config";
import { Pool } from "pg";
import { hashPassword } from "../utils/utils";
const pool = new Pool(credentials);

class UserService {
  constructor() {}
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

  async checkIfUserHasList(username: string, listType:string) {
    const client = await pool.connect();
    try {
      const userId = await this.getUserId(username);
      const textQuery = `SELECT * FROM list WHERE user_Id = $1 AND list_type = $2`;

      const res = await client.query(textQuery, [userId, listType]);
      if (res.rows.length === 0) {
        return false;
      }
      return true;
    } catch (error) {
      console.log(`there was an error ${error}`);
    } finally {
      client.release();
    }
  }
  async createNewList(listDetails: any) {
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      const textQuery = `INSERT INTO list (list_type, user_id, private)
      VALUES ($1, $2, $3)`;
      await client.query(textQuery, [
        listDetails.status,
        listDetails.userId,
        true,
      ]);
      await client.query("COMMIT");
      return { sucess: true };
    } catch (error) {
      console.log(`there was an error ${error}`);
      await client.query("ROLLBACK");
      return { sucess: false };
    } finally {
      client.release();
    }
  }
  async getListId(userId: number, listType:string) {
    const client = await pool.connect();
    try {
      const textQuery = `SELECT id FROM list WHERE user_id = $1 AND list_type = $2`;
      const res = await client.query(textQuery, [userId, listType]);
      return res.rows[0].id;
    } catch (error) {
      console.log(`there was an error ${error}`);
      await client.query("ROLLBACK");
    } finally {
      client.release();
    }
  }
  async createNewItem(itemObj: any) {
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      const textQuery = `INSERT INTO item (api_id, list_id, media_type, title, rating, notes)
      VALUES ($1, $2, $3, $4, $5, $6)`;
      await client.query(textQuery, [
        itemObj.apiId,
        itemObj.listId,
        itemObj.mediaType,
        itemObj.title,
        itemObj.rating,
        itemObj.notes,
      ]);
      

      await client.query("COMMIT");
      return { sucess: true };
    } catch (error) {
      console.log(`there was an error: ${error}`);
      await client.query("ROLLBACK");
      return { sucess: false };
    } finally {
      client.release();
    }
  }

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
