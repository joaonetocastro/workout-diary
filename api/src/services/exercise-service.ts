import { ExerciseRepository } from "../repository/exercise-repository";
import { BaseService } from "./base-service";
import { Exercise } from "../model/exercise-model";
import { CreateExerciseSchema, FilterExerciseSchema, UpdateExerciseSchema } from "../schemas/exercise-schemas";

export class ExerciseService extends BaseService<Exercise, CreateExerciseSchema, UpdateExerciseSchema, FilterExerciseSchema>{
    constructor() {
        super(new ExerciseRepository())
    }    
}