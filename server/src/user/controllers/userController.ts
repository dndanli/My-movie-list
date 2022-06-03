import { UserService } from "../services/userService";

class UserController {
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async registerUser(user: any) {
    return this.userService.registerUser(user);
  }

  async findUserByUsername(username: string) {
    return this.userService.findUserByUsername(username);
  }

  async findUserByEmail(email: string) {
    return this.userService.findUserByEmail(email);
  }

  async findPasswordByUsername(username: string) {
    return this.userService.findPasswordByUsername(username);
  }

  async checkIfUserHasList(username:string){
    return this.userService.checkIfUserHasList(username);
  }

  async getUserId(username:string){
    return this.userService.getUserId(username);
  }

  async getListId(userId:number, listType:string){
    return this.userService.getListId(userId, listType);
  }

  async createNewList(listDetails:any){
    return this.userService.createNewList(listDetails);
  }

  async createNewItem(itemObj:any){
    return this.userService.createNewItem(itemObj);
  }
}

export { UserController };
