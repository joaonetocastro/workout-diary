import { BaseClient } from "./base-client";
import { CreateTrainingExecutionSchema, TrainingExecution } from "./models/training-execution";

export class TrainingExecutionClient extends BaseClient<
    TrainingExecution,
    CreateTrainingExecutionSchema
> {
    resource: string = 'v1/training-execution'
}