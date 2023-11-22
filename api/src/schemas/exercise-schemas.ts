import { Exercise } from "../model/exercise-model";

export interface CreateExerciseSchema {
    name: string
} 

export interface UpdateExerciseSchema {
    id: string;
    name?: string
}

export type FilterExerciseSchema = Partial<Exercise>;
