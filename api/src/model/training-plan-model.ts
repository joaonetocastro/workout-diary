import { BaseModel, IBaseModel } from "./base-model";

export interface ITrainingPlan extends IBaseModel{
    name: string;
    userId: string;
}

export class TrainingPlan extends BaseModel implements ITrainingPlan {
    name: string;
    userId: string;

    constructor(
        props: ITrainingPlan
    ) {
        super(props);
        this.name = props.name;
        this.userId = props.userId;
    }
}