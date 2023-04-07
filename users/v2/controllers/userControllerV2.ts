import express from "express"
import { UserServiceV2 } from "../services/userService"


class UsersControllerV2{

    userService: UserServiceV2 = new UserServiceV2()

    async getUsers(req: express.Request, res: express.Response){
        res.send(await this.userService.getUsers())
    }
}

export let userControllerV2 =  new UsersControllerV2();
