import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ExerciseRouter } from './routers/exercise-router';
import 'express-async-errors'
import { TrainingPlanRouter } from './routers/training-plan-router';
import { logger } from './utils/logger';
import { UserRouter } from './routers/user-router';
import { TrainingPlanExerciseRouter } from './routers/training-plan-exercise-router';

const app = express();
const port = 5000;

const exerciseRouter = new ExerciseRouter()
const trainingPlanRouter = new TrainingPlanRouter()
const userRouter = new UserRouter()
const trainingPlanExerciseRouter = new TrainingPlanExerciseRouter()

app.use(express.json())

app.use('/v1/exercise', exerciseRouter.getExpressRouter())
app.use('/v1/training-plan', trainingPlanRouter.getExpressRouter())
app.use('/v1/user', userRouter.getExpressRouter())
app.use('/v1/training-plan-exercise', trainingPlanExerciseRouter.getExpressRouter())

app.get('/v1/healthcheck', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.use((error: any, req: Request, res: Response, next: NextFunction) => { 
  let message = error.message
  let source = 'unknown'
  let treated = false

  if(error.name === 'PrismaClientKnownRequestError') {
    message = error.meta.message
    source = 'prisma'
  }

  logger.error({source, message, treated})
  res.status(400).json({message: 'Um erro ocorreu'})
} )

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});