import { BaseModel, IBaseModel } from "./base-model";

export interface IExercise extends IBaseModel{
    name: string;
}

export class Exercise extends BaseModel implements IExercise {
    name: string;

    constructor(
        props: IExercise
    ) {
        super(props);
        this.name = props.name;
    }
}