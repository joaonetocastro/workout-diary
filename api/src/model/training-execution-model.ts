import { BaseModel, IBaseModel } from "./base-model";

export interface ITrainingExecution extends IBaseModel{
    trainingPlanId: string;
}

export class TrainingExecution extends BaseModel implements ITrainingExecution {
    trainingPlanId: string;

    constructor(
        props: ITrainingExecution
    ) {
        super(props);
        this.trainingPlanId = props.trainingPlanId;
    }
}