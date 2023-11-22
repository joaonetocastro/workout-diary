import { TrainingExecutionExercise } from "../model/training-execution-exercise-model";

export interface CreateTrainingExecutionExerciseSchema {
    trainingExecutionId: string
    trainingPlanExerciseId: string
    reps: number
    weight: number
} 

export interface UpdateTrainingExecutionExerciseSchema {
    id: string;
    trainingExecutionId?: string
    trainingPlanExerciseId?: string
    reps?: number
    weight?: number
}

export type FilterTrainingExecutionExerciseSchema = Partial<TrainingExecutionExercise>;
