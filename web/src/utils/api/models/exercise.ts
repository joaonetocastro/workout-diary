import { BaseModel } from "./base-model";

export interface Exercise extends BaseModel {
    name: string;
}

export interface CreateExerciseSchema {
    name: string;
}