import { TrainingPlan } from "../model/training-plan-model";
import { TrainingPlanRepository } from "../repository/training-plan-repository";
import { CreateTrainingPlanSchema, FilterTrainingPlanSchema, UpdateTrainingPlanSchema } from "../schemas/training-plan-schemas";
import { BaseService } from "./base-service";

export class TrainingPlanService extends BaseService<TrainingPlan, CreateTrainingPlanSchema, UpdateTrainingPlanSchema, FilterTrainingPlanSchema>{
    constructor() {
        super(new TrainingPlanRepository())
    }    
}