import { PrismaClient } from "@prisma/client";
import { BaseRepository } from "./base-repository";
import { TrainingExecutionExercise } from "../model/training-execution-exercise-model";
import { CreateTrainingExecutionExerciseSchema, FilterTrainingExecutionExerciseSchema, UpdateTrainingExecutionExerciseSchema } from "../schemas/training-execution-exercise-schemas";

export class TrainingExecutionExerciseRepository extends BaseRepository<TrainingExecutionExercise, CreateTrainingExecutionExerciseSchema, UpdateTrainingExecutionExerciseSchema, FilterTrainingExecutionExerciseSchema> {
    constructor(){
        super(
            (data) => new TrainingExecutionExercise(data),
            new PrismaClient().trainingExecutionExercise
        )
    }
}