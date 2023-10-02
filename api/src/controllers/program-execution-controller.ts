import { Controller } from "./controller";

export class ProgramExecutionController extends Controller {
  collectionName: string = 'programExecution';
  
  serialize(input: any): Object {
    return {
      exercises: input.exercises,
      program: input.program,
      datetime: input.datetime
    }
  }
}