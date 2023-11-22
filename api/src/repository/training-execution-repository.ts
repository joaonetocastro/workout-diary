import { PrismaClient } from "@prisma/client";
import { BaseRepository } from "./base-repository";
import { TrainingExecution } from "../model/training-execution-model";
import { CreateTrainingExecutionSchema, FilterTrainingExecutionSchema, UpdateTrainingExecutionSchema } from "../schemas/training-execution-schemas";

export class TrainingExecutionRepository extends BaseRepository<TrainingExecution, CreateTrainingExecutionSchema, UpdateTrainingExecutionSchema, FilterTrainingExecutionSchema> {
    constructor(){
        super(
            (data) => new TrainingExecution(data),
            new PrismaClient().trainingExecution
        )
    }
}