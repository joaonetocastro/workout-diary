import { TrainingExecutionExercise } from "../model/training-execution-exercise-model";
import { TrainingExecutionExerciseRepository } from "../repository/training-execution-exercise-repository";
import { CreateTrainingExecutionExerciseSchema, FilterTrainingExecutionExerciseSchema, UpdateTrainingExecutionExerciseSchema } from "../schemas/training-execution-exercise-schemas";
import { BaseService } from "./base-service";

export class TrainingExecutionExerciseService extends BaseService<TrainingExecutionExercise, CreateTrainingExecutionExerciseSchema, UpdateTrainingExecutionExerciseSchema, FilterTrainingExecutionExerciseSchema>{
    constructor() {
        super(new TrainingExecutionExerciseRepository())
    }    
}