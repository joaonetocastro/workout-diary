import { TrainingExecutionExercise } from "../model/training-execution-exercise-model";
import { CreateTrainingExecutionExerciseSchema, FilterTrainingExecutionExerciseSchema, UpdateTrainingExecutionExerciseSchema } from "../schemas/training-execution-exercise-schemas";
import { TrainingExecutionExerciseService } from "../services/training-execution-exercise-service";
import { BaseRouter } from "./base-router";

export class TrainingExecutionExerciseRouter extends BaseRouter<TrainingExecutionExercise, CreateTrainingExecutionExerciseSchema, UpdateTrainingExecutionExerciseSchema, FilterTrainingExecutionExerciseSchema> {
    constructor() {
        super(new TrainingExecutionExerciseService())
    }
}
