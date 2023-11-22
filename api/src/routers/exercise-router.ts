import { ExerciseService } from "../services/exercise-service";
import express from 'express'
import { BaseRouter } from "./base-router";
import { Exercise } from "../model/exercise-model";
import { CreateExerciseSchema, FilterExerciseSchema, UpdateExerciseSchema } from "../schemas/exercise-schemas";

export class ExerciseRouter extends BaseRouter<Exercise, CreateExerciseSchema, UpdateExerciseSchema, FilterExerciseSchema> {
    constructor() {
        super(new ExerciseService())
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