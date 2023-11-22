import { PrismaClient } from "@prisma/client";
import { BaseRepository } from "./base-repository";
import { TrainingPlan } from "../model/training-plan-model";
import { CreateTrainingPlanSchema, FilterTrainingPlanSchema, UpdateTrainingPlanSchema } from "../schemas/training-plan-schemas";

export class TrainingPlanRepository extends BaseRepository<TrainingPlan, CreateTrainingPlanSchema, UpdateTrainingPlanSchema, FilterTrainingPlanSchema> {
    constructor(){
        super(
            (data) => new TrainingPlan(data),
            new PrismaClient().trainingPlan
        )
    }
}