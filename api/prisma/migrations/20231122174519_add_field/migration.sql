/*
  Warnings:

  - Added the required column `trainingPlanExerciseId` to the `TrainingExecutionExercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TrainingExecutionExercise" ADD COLUMN     "trainingPlanExerciseId" UUID NOT NULL;
