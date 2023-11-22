import { Request, Response } from "express";
import { BaseRepository } from "../repository/base-repository";

export class BaseService<
    Model,
    CreateSchema,
    UpdateSchema extends {id: string},
    FilterSchema> {

    constructor(private readonly repository: BaseRepository<
        Model,
        CreateSchema,
        UpdateSchema,
        FilterSchema
    >) {} 
    
    async getAll(request: Request, response: Response) {
        const exercises = await this.repository.getAll()
        response.json(exercises)
    }
    
    async getById(request: Request, response: Response) {
        const id = request.params.id;
        const exercise = await this.repository.getById(id)
        response.json(exercise)
    }
    
    async post(request: Request, response: Response) {
        const exercise = await this.repository.create(request.body)
        response.json(exercise)
    }
    
    async patch(request: Request, response: Response) {
        const id = request.params.id;
        const exercise = await this.repository.update({id, ...request.body})
        response.json(exercise)
    }

    async delete(request: Request, response: Response) {
        const id = request.params.id;
        const exercise = await this.repository.deleteById(id)
        response.json(exercise)
    }
}