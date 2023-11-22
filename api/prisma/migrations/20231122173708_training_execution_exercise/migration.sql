-- CreateTable
CREATE TABLE "TrainingExecutionExercise" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "trainingExecutionId" UUID NOT NULL,
    "reps" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrainingExecutionExercise_pkey" PRIMARY KEY ("id")
);
