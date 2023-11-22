import { PrismaClient } from "@prisma/client";
import { BaseRepository } from "./base-repository";
import { User } from "../model/user-model";
import { CreateUserSchema, FilterUserSchema, UpdateUserSchema } from "../schemas/user-schemas";

export class UserRepository extends BaseRepository<User, CreateUserSchema, UpdateUserSchema, FilterUserSchema> {
    constructor(){
        super(
            (data) => new User(data),
            new PrismaClient().user
        )
    }
}