import axios from "axios";

export class UserService {
  async getUserObject(onError: any) {
    try {
      const userObj = await axios.get("/user/profile");
      return userObj;
    } catch (err) {
      onError("/login");
    }
  }
}
