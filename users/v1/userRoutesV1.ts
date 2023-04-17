import express from 'express';
import { userControllerV1 } from './controllers/userController';

export let userRoutesV1 = express.Router()

userRoutesV1.get("/users", userControllerV1.getUsers.bind(userControllerV1))
