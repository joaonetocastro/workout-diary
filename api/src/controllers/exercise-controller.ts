import { Request, Response } from "express";
import { getMongoDBClient } from "../mongodb";
import { ObjectId } from "mongodb";

export class ExerciseController {
    async create(request: Request, response: Response) {
          const {client, db} = getMongoDBClient();
          try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            const result = await client.db(db).collection('exercise').insertOne({
              name: request.body.name
            });
            await client.close();
            response.json({id: result.insertedId})
          } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
          }
    }

    async update(request: Request, response: Response) {
          const {client, db} = getMongoDBClient();
          try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            const result = await client.db(db).collection('exercise').updateOne({
              _id: new ObjectId(request.params.id!)
            },{
              '$set': {
                name: request.body.name
              }
            });
            await client.close();
            response.json(result)
          } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
          }
    }

    async getById(request: Request, response: Response) {
      const {client, db} = getMongoDBClient();
      try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const result = await client.db(db).collection('exercise').findOne({
          _id: new ObjectId(request.params.id)
        })
        await client.close();
        if(!result) {
          response.status(404).send()
        } else {
          response.json(result)
        }
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }

    async getAll(request: Request, response: Response) {
      const {client, db} = getMongoDBClient();
      try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const result = await client.db(db).collection('exercise').find().limit(Infinity).toArray()
        await client.close();
        if(!result) {
          response.status(404).send()
        } else {
          response.json(result)
        }
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }

    async delete(request: Request, response: Response) {
      const {client, db} = getMongoDBClient();
      try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db(db).collection('exercise').deleteOne({
          _id: new ObjectId(request.params.id)
        })
        await client.close();
        response.json({})
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
}