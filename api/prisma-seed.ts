import bcrypt from 'bcrypt'

import { ExerciseRepository } from "./src/repository/exercise-repository"
import { UserRepository } from "./src/repository/user-repository";
import { TrainingPlanRepository } from './src/repository/training-plan-repository';
import { TrainingPlanExerciseRepository } from './src/repository/training-plan-exercise-repository';

async function seed() {
    console.log('Starting Seed')
    
    const userRepository = new UserRepository();
    const user = await userRepository.create({
        email: 'j.neto111@gmail.com',
        password: bcrypt.hashSync('minhasenha', 10),
        fullName: 'João Neto C.'
    })

    const exerciseRepository = new ExerciseRepository();
    const trainingPlanRepository = new TrainingPlanRepository();
    const trainingPlanExerciseRepository = new TrainingPlanExerciseRepository();

    const trainingA = [
        {name: 'Supino inclinado', series: 4, minRep: 6, maxRep: 10, repGoal: 9, weightGoal: 6},
        {name: 'Supino Reto', series: 3, minRep: 6, maxRep: 10, repGoal: 8, weightGoal: 6},
        {name: 'Desenvolvimento militar', series: 4, minRep: 6, maxRep: 10, repGoal: 10, weightGoal: 15},
        {name: 'Elevação lateral', series: 3, minRep: 6, maxRep: 10, repGoal: 6, weightGoal: 4},
        {name: 'Triceps na polia com a barra', series: 4, minRep: 6, maxRep: 10, repGoal: 8, weightGoal: 45},
        {name: 'Triceps testa na polia', series: 3, minRep: 6, maxRep: 10, repGoal: 6, weightGoal: 25},
    ]
    const trainingPlanA = await trainingPlanRepository.create({
        name: 'Treino A',
        userId: user.id
    })
    await Promise.all(trainingA.map(async (exercise, index) => {
        const created = await exerciseRepository.create({
            name: exercise.name
        })
        trainingPlanExerciseRepository.create({
            trainingPlanId: trainingPlanA.id,
            exerciseId: created.id,
            minRep: exercise.minRep,
            maxRep: exercise.maxRep,
            series: exercise.series,
            repGoal: exercise.repGoal,
            weightGoal: exercise.weightGoal,
            sequence: index+1
        })
    }))

    const trainingB = [
        {name: 'Remada curvada na barra', series: 4, minRep: 6, maxRep: 10, repGoal: 8, weightGoal: 15},
        {name: 'Puxada alta na maquina', series: 3, minRep: 6, maxRep: 10, repGoal: 7, weightGoal: 50},
        {name: 'Rosca alternada', series: 4, minRep: 6, maxRep: 10, repGoal: 6, weightGoal: 6},
        {name: 'Rosca scott na maquina', series: 3, minRep: 6, maxRep: 10, repGoal: 8, weightGoal: 15},
        {name: 'Abdominal reto', series: 4, minRep: 6, maxRep: 10, repGoal: 15, weightGoal: 10},
        {name: 'Abdominal prancha', series: 3, minRep: 6, maxRep: 10, repGoal: 60, weightGoal: 10},
    ]
    const trainingPlanB = await trainingPlanRepository.create({
        name: 'Treino B',
        userId: user.id
    })
    await Promise.all(trainingB.map(async (exercise, index) => {
        const created = await exerciseRepository.create({
            name: exercise.name
        })
        trainingPlanExerciseRepository.create({
            trainingPlanId: trainingPlanB.id,
            exerciseId: created.id,
            minRep: exercise.minRep,
            maxRep: exercise.maxRep,
            series: exercise.series,
            repGoal: exercise.repGoal,
            weightGoal: exercise.weightGoal,
            sequence: index+1
        })
    }))

    const trainingC = [
        {name: 'Agachamento Smith', series: 4, minRep: 6, maxRep: 10, repGoal: 10, weightGoal: 10},
        {name: 'Cadeira extensora', series: 3, minRep: 6, maxRep: 10, repGoal: 10, weightGoal: 20},
        {name: 'Stiff', series: 4, minRep: 6, maxRep: 10, repGoal: 6, weightGoal: 10},
        {name: 'Flexora deitada', series: 3, minRep: 6, maxRep: 10, repGoal: 10, weightGoal: 15},
        {name: 'Gemeos sentado', series: 4, minRep: 6, maxRep: 10, repGoal: 10, weightGoal: 10},
        {name: 'Flexão plantar', series: 3, minRep: 6, maxRep: 10, repGoal: 10, weightGoal: 20},
    ]
    const trainingPlanC = await trainingPlanRepository.create({
        name: 'Treino B',
        userId: user.id
    })
    await Promise.all(trainingC.map(async (exercise, index) => {
        const created = await exerciseRepository.create({
            name: exercise.name
        })
        trainingPlanExerciseRepository.create({
            trainingPlanId: trainingPlanC.id,
            exerciseId: created.id,
            minRep: exercise.minRep,
            maxRep: exercise.maxRep,
            series: exercise.series,
            repGoal: exercise.repGoal,
            weightGoal: exercise.weightGoal,
            sequence: index+1
        })
    }))
};

seed();