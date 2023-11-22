import { TrainingPlan } from "../model/training-plan-model";

export interface CreateTrainingPlanSchema {
    name: string
    userId: string
} 

export interface UpdateTrainingPlanSchema {
    id: string;
    name?: string
    userId?: string
}

export type FilterTrainingPlanSchema = Partial<TrainingPlan>;
