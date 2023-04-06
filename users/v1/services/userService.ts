class UserService{

    getUsers(){
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

export let userService = new UserService();
