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
}

export { UserController };
