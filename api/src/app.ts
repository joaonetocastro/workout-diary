import express from 'express';
import dotenv from 'dotenv';
import { ExerciseController } from './controllers/exercise-controller';
import bodyParser from 'body-parser'
import { ProgramController } from './controllers/program-controller';
import { ProgramExecutionController } from './controllers/program-execution-controller';

dotenv.config();

const app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({status: 'ok'})
});

const exerciseController = new ExerciseController()
app.get('/exercise/', exerciseController.getAll.bind(exerciseController))
app.post('/exercise', exerciseController.create.bind(exerciseController))
app.get('/exercise/:id', exerciseController.getById.bind(exerciseController))
app.put('/exercise/:id', exerciseController.update.bind(exerciseController))
app.delete('/exercise/:id', exerciseController.delete.bind(exerciseController))

const programController = new ProgramController()
app.get('/program/', programController.getAll.bind(programController))
app.post('/program', programController.create.bind(programController))
app.get('/program/:id', programController.getById.bind(programController))
app.put('/program/:id', programController.update.bind(programController))
app.delete('/program/:id', programController.delete.bind(programController))

const programExecutionController = new ProgramExecutionController()
app.get('/program-execution/', programExecutionController.getAll.bind(programExecutionController))
app.post('/program-execution', programExecutionController.create.bind(programExecutionController))
app.get('/program-execution/:id', programExecutionController.getById.bind(programExecutionController))
app.put('/program-execution/:id', programExecutionController.update.bind(programExecutionController))
app.delete('/program-execution/:id', programExecutionController.delete.bind(programExecutionController))

export {app}