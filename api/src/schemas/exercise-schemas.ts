import { Exercise } from "../model/exercise-model";

export class CreateExerciseSchema {
    name: string

    constructor(
        props: { name: string}    
    ) {
        this.name = props.name;
    }
} 

export class UpdateExerciseSchema {
    id: string;
    name?: string
    
    constructor(
        props: { id: string, name?: string}    
    ) {
        this.id = props.id;
        if(props.name !== undefined) this.name = props.name;
    }
}

export type FilterExerciseSchema = Partial<Exercise>;
