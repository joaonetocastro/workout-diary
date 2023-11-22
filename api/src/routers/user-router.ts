import { User } from "../model/user-model";
import { CreateUserSchema, FilterUserSchema, UpdateUserSchema } from "../schemas/user-schemas";
import { UserService } from "../services/user-service";
import { BaseRouter } from "./base-router";

export class UserRouter extends BaseRouter<User, CreateUserSchema, UpdateUserSchema, FilterUserSchema> {
    constructor() {
        super(new UserService())
    }
}