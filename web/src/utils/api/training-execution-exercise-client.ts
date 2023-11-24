import { BaseClient } from "./base-client";
import { CreateTrainingExecutionExerciseSchema, TrainingExecutionExercise } from "./models/training-execution-exercise";

export class TrainingExecutionExerciseClient extends BaseClient<
    TrainingExecutionExercise,
    CreateTrainingExecutionExerciseSchema
> {
    resource: string = 'v1/training-execution-exercise'
}