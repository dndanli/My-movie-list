import { pool } from "../../configs/postgres-config";
import { UserController } from "../../user/controllers/userController";

class ListService {
  userController: UserController;

  constructor(userController: UserController) {
    this.userController = userController;
  }

  /**
   *
   * @param username string
   * @param listType list type/status - Watching, Plan to watch, Dropped or Completed.
   * @returns query with 0 or more lists in it.
   */
  async checkIfUserHasList(username: string, listType: string) {
    const client = await pool.connect();
    try {
      const userId = await this.userController.getUserId(username);
      const textQuery = `SELECT * FROM list WHERE user_Id = $1 AND list_type = $2`;

      const res = await client.query(textQuery, [userId, listType]);
      if (res.rows.length === 0) {
        return false;
      }
      return true;
    } catch (error) {
      console.error(error);
    } finally {
      client.release();
    }
  }

  /**
   *
   * @param listId number: the if of the unique list
   * @param apiId string: the api id for a movie or show.
   *
   * @return true if item in list false if not.
   */
  async checkIfItemInList(listId: number, apiId: string): Promise<boolean> {
    const client = await pool.connect();
    try {
      const textQuery = `SELECT COUNT(*) FROM item WHERE list_id = $1 AND api_id = $2`;
      const res = await client.query(textQuery, [listId, apiId]);
      console.log(res);

      if (parseInt(res.rows[0]?.count) > 0) {
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
    }
    return false;
  }

  /**
   *
   * @param listDetails list object with list type/status and the user id who wants the list created.
   * @returns success object
   */
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

  /**
   *
   * @param userId the if the user
   * @param listType the list type
   * @returns number: the list id
   */
  async getListId(userId: number, listType: string) {
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

  async getUserLists(userId: number): Promise<any[] | undefined> {
    const client = await pool.connect();
    try {
      const textQuery = `SELECT id, list_type FROM list WHERE user_id = $1`;
      const res = await client.query(textQuery, [userId]);
      return res.rows;
    } catch (error) {
    } finally {
      client.release();
    }
  }

  /**
   *
   * @param itemObj item object with credentials to create an item
   * @returns sucess object
   */
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
      console.error(error);
      await client.query("ROLLBACK");
      return { sucess: false };
    } finally {
      client.release();
    }
  }

  async removeItemFromList(apiId: string, listId: number) {
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      const textQuery = `DELETE FROM item WHERE api_id = $1 AND list_id = $2`;
      await client.query("COMMIT");
      await client.query(textQuery, [apiId, listId]);
      return { sucess: true };
    } catch (error) {
      console.error(error);
      await client.query("ROLLBACK");
    } finally {
      client.release();
    }
  }
}

export { ListService };
