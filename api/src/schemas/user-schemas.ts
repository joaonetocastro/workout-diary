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

export interface LoginSchema {
    email: string
    password: string
}

export interface decodedJWTSchema {
    userId: string
    email: string
    fullName: string
}

export type FilterUserSchema = Partial<User>;
