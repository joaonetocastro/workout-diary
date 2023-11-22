import { User } from "../model/user-model";

export interface CreateUserSchema {
    name: string
    fullName: string
    email: string
    password: string
} 

export interface UpdateUserSchema {
    id: string;
    name?: string
    fullName?: string
    email?: string
    password?: string
}

export type FilterUserSchema = Partial<User>;
