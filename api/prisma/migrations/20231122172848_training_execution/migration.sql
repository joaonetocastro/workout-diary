-- CreateTable
CREATE TABLE "TrainingExecution" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "trainingPlanId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TrainingExecution_pkey" PRIMARY KEY ("id")
);
