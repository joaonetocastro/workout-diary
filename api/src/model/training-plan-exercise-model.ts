import { BaseModel, IBaseModel } from "./base-model";

export interface ITrainingPlanExercise extends IBaseModel{
    trainingPlanId: string
    minRep: number
    maxRep: number
    series: number
    repGoal: number
    weightGoal: number
}

export class TrainingPlanExercise extends BaseModel implements ITrainingPlanExercise {
    trainingPlanId: string
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
        this.minRep = props.minRep
        this.maxRep = props.maxRep
        this.series = props.series
        this.repGoal = props.repGoal
        this.weightGoal = props.weightGoal
    }
}