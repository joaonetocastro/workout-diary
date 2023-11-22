import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ExerciseRouter } from './routers/exercise-router';
import 'express-async-errors'

const app = express();
const port = 5000;

const exerciseRouter = new ExerciseRouter()

app.use(express.json())

app.use('/v1/exercise', exerciseRouter.getExpressRouter())

app.get('/v1/healthcheck', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => { 
  res.status(400).json({message: 'Um erro ocorreu'})
} )

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});