import express from 'express';
import dotenv from 'dotenv';
import { ExerciseController } from './controllers/exercise-controller';
import bodyParser from 'body-parser'

dotenv.config();

const app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({status: 'ok'})
});

const exerciseController = new ExerciseController()
app.post('/exercise', exerciseController.create)

export {app}