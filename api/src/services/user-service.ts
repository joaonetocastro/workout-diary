import { Request, Response } from "express";
import { User } from "../model/user-model";
import { UserRepository } from "../repository/user-repository";
import { CreateUserSchema, FilterUserSchema, UpdateUserSchema } from "../schemas/user-schemas";
import { BaseService } from "./base-service";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class UserService extends BaseService<User, CreateUserSchema, UpdateUserSchema, FilterUserSchema>{
    constructor() {
        super(new UserRepository())
    }

    async signup(request: Request, response: Response) {
        let password = request.body.password
        if(password) {
            const salt = bcrypt.genSaltSync(10)
            password = bcrypt.hashSync(password, salt)
        }
        const instance: any = await this.repository.create({...request.body, password})
        delete instance.password
        response.json(instance)
    }

    async login(request: Request, response: Response) {
        const instances = await this.repository.filter({email: request.body.email})
        if(!instances.length) {
            response.status(404).send();
            return;
        }
        const instance = instances[0]
        if(!bcrypt.compareSync(request.body.password, instance.password)) {
            response.status(401).send();
            return;
        }
        const accessToken = jwt.sign({
            userId: instance.id,
            email: instance.email, 
            fullName: instance.fullName
        }, process.env.JWT_SECRET || 'secret', {expiresIn: '7d'})

        response.json({accessToken, expiresIn: '7d'})
    }
    
}