import {UserService} from "../services/userService";

class UserController{
  userService:UserService;

  constructor(userService:UserService){
    this.userService = userService;
  }

  async registerUser(user:any){
    return this.userService.registerUser(user);
  }
}

export {UserController}
