import { PrismaClient } from "@prisma/client";
import { CreateExerciseSchema, FilterExerciseSchema, UpdateExerciseSchema } from "../schemas/exercise-schemas";
import { Exercise } from "../model/exercise-model";

export class ExerciseRepository {
    async create(exercise: CreateExerciseSchema): Promise<Exercise> {
        const prisma = new PrismaClient();
        const response = await prisma.exercise.create({
            data: {
                name: exercise.name
            }
        });
        return new Exercise(response)
    }

    async update(exercise: UpdateExerciseSchema): Promise<Exercise> {
        const prisma = new PrismaClient();
        const response = await prisma.exercise.update({
            where: {
                id: exercise.id
            },
            data: exercise
        });
        return new Exercise(response)
    }   

    async deleteById(id: string): Promise<Exercise> {
        const prisma = new PrismaClient();
        const response = await prisma.exercise.delete({
            where: {
                id
            }
        });
        return new Exercise(response)
    }

    async getAll(): Promise<Exercise[]> {
        const prisma = new PrismaClient();
        const response = await prisma.exercise.findMany();
        return response.map(exercise => new Exercise(exercise))
    }

    async getById(id: string): Promise<Exercise | null> {
        const prisma = new PrismaClient();
        const response = await prisma.exercise.findFirst({where: {id}});
        return response ? new Exercise(response) : null
    }

    async filter(filter: FilterExerciseSchema): Promise<Exercise[]> {
        const prisma = new PrismaClient();
        const response = await prisma.exercise.findMany({
            where: filter
        });
        return response.map(exercise => new Exercise(exercise))
    }
}