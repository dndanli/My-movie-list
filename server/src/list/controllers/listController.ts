import { ListService } from "../services/listService";

class ListController {
  listService: ListService;
  constructor(listService: ListService) {
    this.listService = listService;
  }

  async checkIfUserHasList(username: string, listType: string) {
    return this.listService.checkIfUserHasList(username, listType);
  }

  async getListId(userId: number, listType: string) {
    return this.listService.getListId(userId, listType);
  }

  async createNewList(listDetails: any) {
    return this.listService.createNewList(listDetails);
  }

  async createNewItem(itemObj: any) {
    return this.listService.createNewItem(itemObj);
  }

  async checkIfItemInList(listId: number, apiId: string) {
    return this.listService.checkIfItemInList(listId, apiId);
  }

  async getUserLists(userId: number) {
    return this.listService.getUserLists(userId);
  }

  async removeItemFromList(apiId: string, listId: number){
    return this.listService.removeItemFromList(apiId, listId);
  }
}
export default ListController;
