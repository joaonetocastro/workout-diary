import { BaseModel } from "./base-model"

export interface TrainingPlanExercise extends BaseModel {
    trainingPlanId: string
    exerciseId: string
    minRep: number
    maxRep: number
    series: number
    repGoal: number
    weightGoal: number
}

export interface CreateTrainingPlanExerciseSchema {
    trainingPlanId: string
    exerciseId: string
    minRep: number
    maxRep: number
    series: number
    repGoal: number
    weightGoal: number
}