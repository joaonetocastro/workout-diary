import { TrainingPlanExercise } from "../model/training-plan-exercise-model"

export interface CreateTrainingPlanExerciseSchema {
    trainingPlanId: string
    exerciseId: string;
    minRep: number
    maxRep: number
    series: number
    repGoal: number
    weightGoal: number
} 

export interface UpdateTrainingPlanExerciseSchema {
    id: string;
    trainingPlanId?: string
    exerciseId?: string;
    minRep?: number
    maxRep?: number
    series?: number
    repGoal?: number
    weightGoal?: number
}

export type FilterTrainingPlanExerciseSchema = Partial<TrainingPlanExercise>;
