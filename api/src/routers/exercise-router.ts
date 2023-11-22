import { ExerciseService } from "../services/exercise-service";
import { BaseRouter } from "./base-router";
import { Exercise } from "../model/exercise-model";
import { CreateExerciseSchema, FilterExerciseSchema, UpdateExerciseSchema } from "../schemas/exercise-schemas";

export class ExerciseRouter extends BaseRouter<Exercise, CreateExerciseSchema, UpdateExerciseSchema, FilterExerciseSchema> {
    constructor() {
        super(new ExerciseService())
    }
}