import { ExerciseService } from "../services/exercise-service";
import express from 'express'

export class ExerciseRouter {
    service: ExerciseService;

    constructor() {
        this.service = new ExerciseService()
    }

    getExpressRouter() {
        const router = express.Router()
        router.get('/', this.service.getAll.bind(this.service))
        router.get('/:id', this.service.getById.bind(this.service))
        router.post('/', this.service.post.bind(this.service))
        router.patch('/:id', this.service.patch.bind(this.service))
        router.delete('/:id', this.service.delete.bind(this.service))
        return router
    }
}