import { Route, Get, Example, Tags } from "tsoa";
import { Users } from "../interfaces/response-model";

@Tags("UserVersion2")
@Route("/api/v2")
export class UserServiceV2{

    @Example<Users>([
        {
            "name": "mhp",
            "skills": "python"
        },
        {
            "name": "mhp1",
            "skills": "python1"
        },
    ])
    @Get("/users")
    async getUsers(): Promise<Users>{
        const users = [
            {
                "name": "mhp-v2",
                "skills": "python"
            },
            {
                "name": "mhp-node-v2",
                "skills": "node"
            }
        ]
        return users
    }
}
