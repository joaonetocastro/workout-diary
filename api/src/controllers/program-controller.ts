import { Request, Response } from "express";
import { getMongoDBClient } from "../mongodb";
import { ObjectId } from "mongodb";
import { Controller } from "./controller";

export class ProgramController extends Controller {
  collectionName: string = 'program';
  
  serialize(input: any): Object {
    return {
      exercises: input.exercises,
      name: input.name,
      days: input.days
    }
  }
}