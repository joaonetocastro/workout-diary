import { User } from "../model/user-model";
import { CreateUserSchema, FilterUserSchema, UpdateUserSchema } from "../schemas/user-schemas";
import { UserService } from "../services/user-service";
import { BaseRouter } from "./base-router";
import { Router } from "express";

export class UserRouter extends BaseRouter<User, CreateUserSchema, UpdateUserSchema, FilterUserSchema> {
    service: UserService

    constructor() {
        super(new UserService())
        this.service = new UserService()
    }

    getExpressRouter(): Router {
        const router = Router()
        router.post('/signup', this.service.signup.bind(this.service))
        router.post('/login', this.service.login.bind(this.service))
        return router
    }
}