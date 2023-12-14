/*
  Warnings:

  - Added the required column `sequence` to the `TrainingPlanExercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TrainingPlanExercise" ADD COLUMN     "sequence" INTEGER NOT NULL;
