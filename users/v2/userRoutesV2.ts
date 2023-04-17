import express from 'express';
import { userControllerV2 } from './controllers/userControllerV2';

export let userRoutesV2 = express.Router()

userRoutesV2.get("/users", userControllerV2.getUsers.bind(userControllerV2))
