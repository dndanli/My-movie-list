import express from "express";
import passport from "passport";
import { UserController } from "../../user/controllers/userController";
import { UserService } from "../../user/services/userService";
import ListController from "../controllers/listController";
import { ListService } from "../services/listService";
const router = express.Router();

const userService = new UserService();
const userController = new UserController(userService);
const listService = new ListService(userController);
const listController = new ListController(listService);

router.post(
  "/addList",
  passport.authenticate("jwt", { session: false }),
  async (request, response) => {
    const listObj = {
      user: request.body.user,
      apiId: request.body.apiId,
      title: request.body.title,
      listStatus: request.body.listStatus,
      mediaType: request.body.mediaType,
      score: request.body.score,
      notes: request.body.notes,
    };

    const userHasList = await listController.checkIfUserHasList(
      listObj.user,
      listObj.listStatus
    );
    const userId = await userController.getUserId(listObj.user);
    if (!userHasList) {
      const successObj = await listController.createNewList({
        status: listObj.listStatus,
        userId: userId,
      });

      if (successObj.sucess) {
        const listId = await listController.getListId(
          userId,
          listObj.listStatus
        );

        /**
         * check if item is in any other list
         * do not need to check in this list
         * TODO: skip current list id
         */
        const userLists = await listController.getUserLists(userId);

        if (userLists !== undefined) {
          for (let list of userLists) {
            const itemInList = await listController.checkIfItemInList(
              parseInt(list.id),
              listObj.apiId
            );
            if (itemInList) {
              console.log("item is in  list: ", list.list_type);
              listController.removeItemFromList(listObj.apiId, list.id);
            }
          }

          listController.createNewItem({
            apiId: listObj.apiId,
            listId: listId,
            mediaType: listObj.mediaType,
            title: listObj.title,
            rating: listObj.score,
            notes: listObj.notes,
          });
        }
      }
    } else {
      const listId = await listController.getListId(userId, listObj.listStatus);
      const userLists = await listController.getUserLists(userId);
      if (userLists !== undefined) {
        for (let list of userLists) {
          const itemInList = await listController.checkIfItemInList(
            parseInt(list.id),
            listObj.apiId
          );
          if (itemInList) {
            console.log("item is in  list: ", list.list_type);
            listController.removeItemFromList(listObj.apiId, list.id);
          }
        }

        listController.createNewItem({
          apiId: listObj.apiId,
          listId: listId,
          mediaType: listObj.mediaType,
          title: listObj.title,
          rating: listObj.score,
          notes: listObj.notes,
        });
      }
    }
    response.status(200).json({
      sucess: true,
      message: "authorized",
      user: request.user,
    });
  }
);

export default router;
