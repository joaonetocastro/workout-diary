'use client';
import { TrainingPlan } from '@/utils/api/models/training-plan';
import { TrainingExecutionClient } from '@/utils/api/training-execution-client';
import { TrainingPlanClient } from '@/utils/api/training-plan-client';
import { Button, Card, Paper, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'

export function HomePage() {
  const [trainingPlans, setTrainingPlans] = useState<TrainingPlan[]>([])

  useEffect(() => {
    const client = new TrainingPlanClient()
    client.getAll().then(setTrainingPlans)
  }, []);
  
  const startTraining = (trainingPlan: TrainingPlan) => () => {
    const client = new TrainingExecutionClient()
    client.create({trainingPlanId: trainingPlan.id}).then((trainingExecution) => {
      window.location.href = `/training-execution/${trainingExecution.id}`
    })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Stack gap={2}>
        {trainingPlans.map((trainingPlan) => (
          <Card variant='outlined' key={trainingPlan.id}>
            <Stack padding={2}>
              <Typography variant="h5" align="center">{trainingPlan.name}</Typography>
              <Button variant='contained' onClick={startTraining(trainingPlan)}>Começar</Button>
            </Stack>
          </Card>
        ))}
      </Stack>
    </main>
  )
}
