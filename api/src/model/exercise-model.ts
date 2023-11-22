export interface IExercise {
    id: string;
    name: string;
}

export class Exercise implements IExercise {
    id: string;
    name: string;

    constructor(
        props: IExercise
    ) {
        this.id = props.id;
        this.name = props.name;
    }
}