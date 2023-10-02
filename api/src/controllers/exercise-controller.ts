import { Request, Response } from "express";
import { getMongoDBClient } from "../mongodb";

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
            console.log("Pinged your deployment. You successfully connected to MongoDB!");
            await client.close();
            response.json({id: result.insertedId})
          } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
          }
    }
}