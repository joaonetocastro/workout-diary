import { PrismaClient } from "@prisma/client";
import { CreateExerciseSchema, FilterExerciseSchema, UpdateExerciseSchema } from "../schemas/exercise-schemas";
import { Exercise } from "../model/exercise-model";
import { BaseRepository } from "./base-repository";

export class ExerciseRepository extends BaseRepository<Exercise, CreateExerciseSchema, UpdateExerciseSchema, FilterExerciseSchema> {
    constructor(){
        super(
            (data) => new Exercise(data),
            new PrismaClient().exercise
        )
    }
}