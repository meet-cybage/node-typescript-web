import express from "express"
import { userService } from "../services/userService"


class UsersControllerV2{

    getUsers(req: express.Request, res: express.Response){
        res.send(userService.getUsers())
    }
}

export let userControllerV2 =  new UsersControllerV2();
