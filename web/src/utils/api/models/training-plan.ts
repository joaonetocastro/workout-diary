import { BaseModel } from "./base-model";

export interface TrainingPlan extends BaseModel {
    name: string;
    userId: string;
}

export interface CreateTrainingPlanSchema {
    name: string;
    userId: string;
}