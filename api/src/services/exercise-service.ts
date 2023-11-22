import { Request, Response } from "express";
import { ExerciseRepository } from "../repository/exercise-repository";

export class ExerciseService {
    repository: ExerciseRepository

    constructor() {
        this.repository = new ExerciseRepository()
    } 
    
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