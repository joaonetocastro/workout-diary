import { BaseClient } from "./base-client";
import { CreateTrainingPlanSchema, TrainingPlan } from "./models/training-plan";

export class TrainingPlanClient extends BaseClient<
    TrainingPlan,
    CreateTrainingPlanSchema
> {
    resource: string = 'v1/training-plan'
}