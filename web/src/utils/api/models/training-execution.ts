import { BaseModel } from "./base-model";

export interface TrainingExecution extends BaseModel {
    trainingPlanId: string;
}

export interface CreateTrainingExecutionSchema {
    trainingPlanId: string;
}