import { User } from "../model/user-model";
import { UserRepository } from "../repository/user-repository";
import { CreateUserSchema, FilterUserSchema, UpdateUserSchema } from "../schemas/user-schemas";
import { BaseService } from "./base-service";

export class UserService extends BaseService<User, CreateUserSchema, UpdateUserSchema, FilterUserSchema>{
    constructor() {
        super(new UserRepository())
    }    
}