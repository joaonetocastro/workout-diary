import { Request } from "express";

export abstract class Model {
    constructor(input: any) {
        throw new Error('should be implemented on child class')
    }

    serialize(): Object {
        throw new Error('should be implemented on child class')
    }
}