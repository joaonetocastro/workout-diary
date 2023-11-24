import bcrypt from 'bcrypt'

import { ExerciseRepository } from "./src/repository/exercise-repository"
import { UserRepository } from "./src/repository/user-repository";
import { TrainingPlanRepository } from './src/repository/training-plan-repository';
import { TrainingPlanExerciseRepository } from './src/repository/training-plan-exercise-repository';

const exercises = [
    'Supino Reto',
    'Supino Inclinado',
    'Tríceps Frances',
    'Tríceps Polia',
    'Desenvolvimento Militar',
    'Elevação Lateral',
    'Agachamento',
    'Cadeira Extensora',
    'Elevação de Panturrilha em pé',
    'Elevação de Panturrilha sentado',
    'Levantamento Terra',
    'Remada Curvada',
    'Remada Altla',
    'Rosca Alternada com Halteres',
    'Rosca Scott na Barra',
    'Stiff',
    'Cadeira Flexora'
]

async function seed() {
    console.log('Starting Seed')
    const exerciseRepository = new ExerciseRepository();
    
    const createdExercises = await Promise.all(exercises.map(name => exerciseRepository.create({name})))
    
    const userRepository = new UserRepository();
    const user = await userRepository.create({
        email: 'j.neto111@gmail.com',
        password: bcrypt.hashSync('minhasenha', 10),
        fullName: 'João Neto C.'
    })

    const trainingPlanRepository = new TrainingPlanRepository();
    const trainingPlanExerciseRepository = new TrainingPlanExerciseRepository();

    const minRep = 6;
    const maxRep = 10;
    const repGoal = 10;
    const series = 3;
    const weightGoal = 5;
    
    const registerExercise = (trainingPlanId: string, exerciseId: string) => trainingPlanExerciseRepository.create({minRep, maxRep, repGoal, series, weightGoal, trainingPlanId, exerciseId})

    const trainingPlanA = await trainingPlanRepository.create({
        name: 'Treino A (Peito, Tríceps e Ombro)',
        userId: user.id
    })
    const trainingPlanAExercises = await Promise.all([0,1,2,4,5].map(n => createdExercises[n]).map(exercise => registerExercise(trainingPlanA.id, exercise.id)))

    const trainingPlanB = await trainingPlanRepository.create({
        name: 'Treino B (Bíceps, Costas)',
        userId: user.id
    })
    const trainingPlanBExercises = await Promise.all([11,12,13,14].map(n => createdExercises[n]).map(exercise => registerExercise(trainingPlanB.id, exercise.id)))

    const trainingPlanC = await trainingPlanRepository.create({
        name: 'Treino C (Costas)',
        userId: user.id
    })
    const trainingPlanCExercises = await Promise.all([15,16,6,7,8,9].map(n => createdExercises[n]).map(exercise => registerExercise(trainingPlanC.id, exercise.id)))
    console.log('Seed Completed')
};

seed();