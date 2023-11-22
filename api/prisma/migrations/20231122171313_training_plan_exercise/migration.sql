-- CreateTable
CREATE TABLE "TrainingPlanExercise" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "trainingPlanId" UUID NOT NULL,
    "minRep" INTEGER NOT NULL,
    "maxRep" INTEGER NOT NULL,
    "series" INTEGER NOT NULL,
    "repGoal" INTEGER NOT NULL,
    "weightGoal" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrainingPlanExercise_pkey" PRIMARY KEY ("id")
);
