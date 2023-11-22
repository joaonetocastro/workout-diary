import { PrismaClient } from "@prisma/client";
import { BaseRepository } from "./base-repository";
import { TrainingPlanExercise } from "../model/training-plan-exercise-model";
import { CreateTrainingPlanExerciseSchema, FilterTrainingPlanExerciseSchema, UpdateTrainingPlanExerciseSchema } from "../schemas/training-plan-exercise-schemas";

export class TrainingPlanExerciseRepository extends BaseRepository<TrainingPlanExercise, CreateTrainingPlanExerciseSchema, UpdateTrainingPlanExerciseSchema, FilterTrainingPlanExerciseSchema> {
    constructor(){
        super(
            (data) => new TrainingPlanExercise(data),
            new PrismaClient().trainingPlanExercise
        )
    }
}