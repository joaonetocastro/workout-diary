import { MongoClient, ServerApiVersion } from 'mongodb';
import { environment } from '../environment';

export function getMongoDBClient() {
    const client = new MongoClient(environment.DATABASE_URL, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      })

    return {client, db: 'cluster0'};
}