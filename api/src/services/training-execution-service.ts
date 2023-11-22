import { TrainingExecution } from "../model/training-execution-model";
import { TrainingExecutionRepository } from "../repository/training-execution-repository";
import { CreateTrainingExecutionSchema, FilterTrainingExecutionSchema, UpdateTrainingExecutionSchema } from "../schemas/training-execution-schemas";
import { BaseService } from "./base-service";

export class TrainingExecutionService extends BaseService<TrainingExecution, CreateTrainingExecutionSchema, UpdateTrainingExecutionSchema, FilterTrainingExecutionSchema>{
    constructor() {
        super(new TrainingExecutionRepository())
    }    
}