import { TrainingPlanExercise } from "../model/training-plan-exercise-model";
import { TrainingPlanExerciseRepository } from "../repository/training-plan-exercise-repository";
import { CreateTrainingPlanExerciseSchema, FilterTrainingPlanExerciseSchema, UpdateTrainingPlanExerciseSchema } from "../schemas/training-plan-exercise-schemas";
import { BaseService } from "./base-service";

export class TrainingPlanExerciseService extends BaseService<TrainingPlanExercise, CreateTrainingPlanExerciseSchema, UpdateTrainingPlanExerciseSchema, FilterTrainingPlanExerciseSchema>{
    constructor() {
        super(new TrainingPlanExerciseRepository())
    }    
}