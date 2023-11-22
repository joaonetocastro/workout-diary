import { BaseModel, IBaseModel } from "./base-model";

export interface ITrainingExecutionExercise extends IBaseModel{
    trainingExecutionId: string
    trainingPlanExerciseId: string
    reps: number
    weight: number
}

export class TrainingExecutionExercise extends BaseModel implements ITrainingExecutionExercise {
    trainingExecutionId: string
    trainingPlanExerciseId: string
    reps: number
    weight: number

    constructor(
        props: ITrainingExecutionExercise
    ) {
        super(props);
        this.trainingExecutionId = props.trainingExecutionId
        this.trainingPlanExerciseId = props.trainingPlanExerciseId
        this.reps = props.reps
        this.weight = props.weight
    }
}
