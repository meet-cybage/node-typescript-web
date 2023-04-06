import express from "express"
import { logger } from "../../../main/logging"
import { userService } from "../services/userService"

class UsersController{

    getUsers(req: express.Request, res: express.Response){
        logger.info("First winston log")
        res.status(200)
        res.send(userService.getUsers())
    }
}

export let userControllerV1 =  new UsersController();
