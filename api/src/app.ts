import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { ExerciseRouter } from './routers/exercise-router';
import 'express-async-errors'
import { TrainingPlanRouter } from './routers/training-plan-router';
import { UserRouter } from './routers/user-router';
import { TrainingPlanExerciseRouter } from './routers/training-plan-exercise-router';
import { TrainingExecutionRouter } from './routers/training-execution-router';
import { TrainingExecutionExerciseRouter } from './routers/training-execution-exercise-router';
import { ErrorHandlerMiddleware } from './middlewares/error-handler-middleware';
import { AuthMiddleware } from './middlewares/auth-middleware';
const app = express();
const port = process.env.PORT || 5001;

const exerciseRouter = new ExerciseRouter()
const trainingPlanRouter = new TrainingPlanRouter()
const userRouter = new UserRouter()
const trainingPlanExerciseRouter = new TrainingPlanExerciseRouter()
const trainingExecutionRouter = new TrainingExecutionRouter()
const trainingExecutionExerciseRouter = new TrainingExecutionExerciseRouter()
console.log('Creating Express App...')
app.use(cors())
app.use(express.json())

app.use('/v1/user', userRouter.getExpressRouter())
app.use(AuthMiddleware)
app.use('/v1/exercise', exerciseRouter.getExpressRouter())
app.use('/v1/training-plan', trainingPlanRouter.getExpressRouter())
app.use('/v1/training-plan-exercise', trainingPlanExerciseRouter.getExpressRouter())
app.use('/v1/training-execution', trainingExecutionRouter.getExpressRouter())
app.use('/v1/training-execution-exercise', trainingExecutionExerciseRouter.getExpressRouter())

app.get('/v1/healthcheck', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.use(ErrorHandlerMiddleware)


export {app}