import { BaseModel } from "./base-model";

export interface TrainingExecutionExercise extends BaseModel {
    trainingExecutionId: string
    trainingPlanExerciseId: string
    reps: number
    weight: number
}

export interface CreateTrainingExecutionExerciseSchema {
    trainingExecutionId: string
    trainingPlanExerciseId: string
    reps: number
    weight: number
}