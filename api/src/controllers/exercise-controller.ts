import {Controller} from './controller'

export class ExerciseController extends Controller{
  collectionName: string = 'exercise';

  serialize(input: any): Object {
    return {
      name: input.name
    }
  }
}