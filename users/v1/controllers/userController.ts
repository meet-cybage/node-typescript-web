import express from "express"
import { logger } from "../../../main/logging"
import { UserService } from "../services/userService"
import { User } from "../interfaces/response-models";

class UsersController{

    userService: UserService = new UserService();

    async getUsers(req: express.Request, res: express.Response){
        logger.info("First winston log")
        res.status(200)
        res.send(await this.userService.getUsers())
    }
}

export let userControllerV1 =  new UsersController();
