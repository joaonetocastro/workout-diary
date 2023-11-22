import { TrainingPlan } from "../model/training-plan-model";
import { CreateTrainingPlanSchema, FilterTrainingPlanSchema, UpdateTrainingPlanSchema } from "../schemas/training-plan-schemas";
import { TrainingPlanService } from "../services/training-plan-service";
import { BaseRouter } from "./base-router";

export class TrainingPlanRouter extends BaseRouter<TrainingPlan, CreateTrainingPlanSchema, UpdateTrainingPlanSchema, FilterTrainingPlanSchema> {
    constructor() {
        super(new TrainingPlanService())
    }
}