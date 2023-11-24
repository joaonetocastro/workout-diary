import { Request, Response } from "express";
import { BaseRepository } from "../repository/base-repository";

export class BaseService<
    Model,
    CreateSchema,
    UpdateSchema extends {id: string},
    FilterSchema> {

    constructor(public readonly repository: BaseRepository<
        Model,
        CreateSchema,
        UpdateSchema,
        FilterSchema
    >) {} 
    
    async getAll(request: Request, response: Response) {
        const instances = await this.repository.filter(request.query as FilterSchema)
        response.json(instances)
    }
    
    async getById(request: Request, response: Response) {
        const id = request.params.id;
        const instance = await this.repository.getById(id)
        response.json(instance)
    }
    
    async post(request: Request, response: Response) {
        const instance = await this.repository.create(request.body)
        response.json(instance)
    }
    
    async patch(request: Request, response: Response) {
        const id = request.params.id;
        const instance = await this.repository.update({id, ...request.body})
        response.json(instance)
    }

    async delete(request: Request, response: Response) {
        const id = request.params.id;
        const instance = await this.repository.deleteById(id)
        response.json(instance)
    }
}