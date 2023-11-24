import { BaseClient } from "./base-client";
import { CreateExerciseSchema, Exercise } from "./models/exercise";

export class ExerciseClient extends BaseClient<
    Exercise,
    CreateExerciseSchema
> {
    resource: string = 'v1/exercise'
}