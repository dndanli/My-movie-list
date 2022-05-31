import axios from "axios";

export class UserService {
  async getUserObject(authenticatedUrl: string, onError: any) {
    try {
      const userObj = await axios.get(authenticatedUrl);
      return userObj;
    } catch (err) {
      onError("/login");
    }
  }
}
