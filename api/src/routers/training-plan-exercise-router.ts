import { TrainingPlanExercise } from "../model/training-plan-exercise-model";
import { CreateTrainingPlanExerciseSchema, FilterTrainingPlanExerciseSchema, UpdateTrainingPlanExerciseSchema } from "../schemas/training-plan-exercise-schemas";
import { TrainingPlanExerciseService } from "../services/training-plan-exercise-service";
import { BaseRouter } from "./base-router";

export class TrainingPlanExerciseRouter extends BaseRouter<TrainingPlanExercise, CreateTrainingPlanExerciseSchema, UpdateTrainingPlanExerciseSchema, FilterTrainingPlanExerciseSchema> {
    constructor() {
        super(new TrainingPlanExerciseService())
    }
}
