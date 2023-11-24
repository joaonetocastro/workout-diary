import { BaseClient } from "./base-client";
import { CreateTrainingPlanExerciseSchema, TrainingPlanExercise } from "./models/training-plan-exercise";

export class TrainingPlanExerciseClient extends BaseClient<
    TrainingPlanExercise,
    CreateTrainingPlanExerciseSchema
> {
    resource: string = 'v1/training-plan-exercise'
}