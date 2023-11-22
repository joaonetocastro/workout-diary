import { TrainingExecution } from "../model/training-execution-model";
import { CreateTrainingExecutionSchema, FilterTrainingExecutionSchema, UpdateTrainingExecutionSchema } from "../schemas/training-execution-schemas";
import { TrainingExecutionService } from "../services/training-execution-service";
import { BaseRouter } from "./base-router";

export class TrainingExecutionRouter extends BaseRouter<TrainingExecution, CreateTrainingExecutionSchema, UpdateTrainingExecutionSchema, FilterTrainingExecutionSchema> {
    constructor() {
        super(new TrainingExecutionService())
    }
}