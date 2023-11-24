/*
  Warnings:

  - Added the required column `exerciseId` to the `TrainingPlanExercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TrainingPlanExercise" ADD COLUMN     "exerciseId" UUID NOT NULL;
