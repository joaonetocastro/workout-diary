import { TrainingExecution } from "../model/training-execution-model";

export interface CreateTrainingExecutionSchema {
    trainingPlanId: string
} 

export interface UpdateTrainingExecutionSchema {
    id: string;
    trainingPlanId?: string
}

export type FilterTrainingExecutionSchema = Partial<TrainingExecution>;
