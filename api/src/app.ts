import express from 'express';
import dotenv from 'dotenv';
import { ExerciseController } from './controllers/exercise-controller';
import bodyParser from 'body-parser'
import { ProgramController } from './controllers/program-controller';

dotenv.config();

const app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({status: 'ok'})
});

const exerciseController = new ExerciseController()
app.get('/exercise/', exerciseController.getAll)
app.post('/exercise', exerciseController.create)
app.get('/exercise/:id', exerciseController.getById)
app.put('/exercise/:id', exerciseController.update)
app.delete('/exercise/:id', exerciseController.delete)

const programController = new ProgramController()
app.get('/program/', programController.getAll)
app.post('/program', programController.create)
app.get('/program/:id', programController.getById)
app.put('/program/:id', programController.update)
app.delete('/program/:id', programController.delete)

export {app}