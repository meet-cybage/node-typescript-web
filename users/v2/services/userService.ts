
class UserService{

    getUsers(){
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

export let userService = new UserService();
