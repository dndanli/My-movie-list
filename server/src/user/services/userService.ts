import { credentials } from "../../configs/postgres-config";
import { Pool } from "pg";
const pool = new Pool(credentials);

class UserService {
  constructor() {}
  async registerUser(user: any) {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");
      const textQuery = `
          INSERT INTO users (username, email)
          VALUES ($1, $2)
      `;
      const values = [user.username, user.email];
      await client.query(textQuery, values);

      await client.query("COMMIT");
    } catch (error) { 
      console.log(`there was an error ${error}`);
      await client.query("ROLLBACK");
    } finally {
      client.release();
    }
  }
}

export { UserService };
