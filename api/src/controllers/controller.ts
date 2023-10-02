import { Request, Response } from "express";
import { getMongoDBClient } from "../mongodb";
import { ObjectId } from "mongodb";

export abstract class Controller {
    abstract collectionName: string

    abstract serialize(input: any): Object;
    
    async create(request: Request, response: Response) {
          const {client, db} = getMongoDBClient();
          try {
            await client.connect();
            const result = await client.db(db).collection(this.collectionName).insertOne(this.serialize(request.body));
            await client.close();
            response.json({_id: result.insertedId})
          } finally {
            await client.close();
          }
    }

    async update(request: Request, response: Response) {
          const {client, db} = getMongoDBClient();
          try {
            await client.connect();
            await client.db(db).collection(this.collectionName).updateOne({
              _id: new ObjectId(request.params.id!)
            },{
              '$set': this.serialize(request.body)
            });
            await client.close();
            response.json({_id: request.params.id})
          } finally {
            await client.close();
          }
    }

    async getById(request: Request, response: Response) {
      const {client, db} = getMongoDBClient();
      try {
        await client.connect();
        const result = await client.db(db).collection(this.collectionName).findOne({
          _id: new ObjectId(request.params.id)
        })
        await client.close();
        if(!result) {
          response.status(404).send()
        } else {
          response.json(result)
        }
      } finally {
        await client.close();
      }
    }

    async getAll(request: Request, response: Response) {
      const {client, db} = getMongoDBClient();
      try {
        await client.connect();
        const result = await client.db(db).collection(this.collectionName).find().limit(Infinity).toArray()
        await client.close();
        if(!result) {
          response.status(404).send()
        } else {
          response.json(result)
        }
      } finally {
        await client.close();
      }
    }

    async delete(request: Request, response: Response) {
      const {client, db} = getMongoDBClient();
      try {
        await client.connect();
        await client.db(db).collection(this.collectionName).deleteOne({
          _id: new ObjectId(request.params.id)
        })
        await client.close();
        response.json({})
      } finally {
        await client.close();
      }
    }
}
