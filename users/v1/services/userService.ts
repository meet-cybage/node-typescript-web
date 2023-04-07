import { Users } from "../interfaces/response-models";
import { Route, Get, Example, Tags } from "tsoa"

@Tags("UserVersion1")
@Route("/api/v1/")
export class UserService{

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
    @Get("users")
    async getUsers(): Promise<Users>{
        const users = [
            {
                "name": "mhp",
                "skills": "python"
            },
            {
                "name": "mhp-node",
                "skills": "node"
            }
        ]
        return users
    }
}
