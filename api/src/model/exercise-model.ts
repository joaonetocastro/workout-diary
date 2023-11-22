export interface IExercise {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export class Exercise implements IExercise {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(
        props: IExercise
    ) {
        this.id = props.id;
        this.name = props.name;
        this.createdAt = props.createdAt,
        this.updatedAt = props.updatedAt
    }
}