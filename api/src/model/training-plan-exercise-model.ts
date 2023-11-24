import { BaseModel, IBaseModel } from "./base-model";

export interface ITrainingPlanExercise extends IBaseModel{
    trainingPlanId: string
    exerciseId: string
    minRep: number
    maxRep: number
    series: number
    repGoal: number
    weightGoal: number
}

export class TrainingPlanExercise extends BaseModel implements ITrainingPlanExercise {
    trainingPlanId: string
    exerciseId: string
    minRep: number
    maxRep: number
    series: number
    repGoal: number
    weightGoal: number

    constructor(
        props: ITrainingPlanExercise
    ) {
        super(props);
        this.trainingPlanId = props.trainingPlanId
        this.exerciseId = props.exerciseId
        this.minRep = props.minRep
        this.maxRep = props.maxRep
        this.series = props.series
        this.repGoal = props.repGoal
        this.weightGoal = props.weightGoal
    }
}