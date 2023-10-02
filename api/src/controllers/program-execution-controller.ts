import { Request, Response } from "express";
import { getMongoDBClient } from "../mongodb";
import { ObjectId } from "mongodb";

export class ProgramExecutionController {
    async create(request: Request, response: Response) {
          const {client, db} = getMongoDBClient();
          try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            const result = await client.db(db).collection('program').insertOne({
              exercises: request.body.exercises,
              program: request.body.program,
              datetime: request.body.datetime
            });
            await client.close();
            response.json({_id: result.insertedId})
          } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
          }
    }

    async update(request: Request, response: Response) {
          const {client, db} = getMongoDBClient();
          const info = {
            exercises: request.body.exercises,
            program: request.body.program,
            datetime: request.body.datetime
          }

          try {
            // Connect the client to the server	(optional starting in v4.7)
            await client.connect();
            // Send a ping to confirm a successful connection
            const result = await client.db(db).collection('program').updateOne({
              _id: new ObjectId(request.params.id!)
            },{
              '$set': info
            });
            await client.close();
            response.json({_id: request.params.id})
          } catch(error: any) {
            console.log('Error: ' + error.message)
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
        const result = await client.db(db).collection('program').findOne({
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
        const result = await client.db(db).collection('program').find().limit(Infinity).toArray()
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
        await client.db(db).collection('program').deleteOne({
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