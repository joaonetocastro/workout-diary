'use client'
import { ExerciseClient } from '@/utils/api/exercise-client'
import { Exercise } from '@/utils/api/models/exercise'
import { TrainingPlanExercise } from '@/utils/api/models/training-plan-exercise'
import { TrainingExecutionClient } from '@/utils/api/training-execution-client'
import { TrainingExecutionExerciseClient } from '@/utils/api/training-execution-exercise-client'
import { TrainingPlanExerciseClient } from '@/utils/api/training-plan-exercise-client'
import { Time } from '@/utils/time'
import { Button, Card, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Home({params}: {params: {id: string}}) {
  const [trainingPlanExercises, setTrainingPlanExercises] = useState<TrainingPlanExercise[]>([])
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [currentExercise, setCurrentExercise] = useState<TrainingPlanExercise>()
  const [finished, setFinished] = useState<string[]>([])
  const [counter, setCounter] = useState(0)
  const [exercising, setExercising] = useState(false)
  const [resting, setResting] = useState(false)
  const [trainingFinished, setTrainingFinished] = useState(false)
  const [currentReps, setCurrentReps] = useState(0)
  const [currentWeight, setCurrentWeight] = useState(0)

  useEffect(() => {
    async function fetchInformation () {
      const exerciseClient = new ExerciseClient()
      await exerciseClient.getAll().then(setExercises)
      const trainingPlanExecutionClient = new TrainingExecutionClient()
      const trainingPlanExecution = await trainingPlanExecutionClient.findById(params.id)
      
      const trainingPlanExerciseClient = new TrainingPlanExerciseClient()
      trainingPlanExerciseClient.getAll({filters: {
        trainingPlanId: trainingPlanExecution.trainingPlanId
      }}).then(response => {
        setTrainingPlanExercises(response)
        setCurrentExercise(response[0])
        setCurrentReps(response[0].repGoal)
        setCurrentWeight(response[0].weightGoal)
      })

    }

    fetchInformation()
  }, [])


  useEffect(() => {
    const id = setTimeout(() => setCounter(counter + 1), 1000)
    return () => clearTimeout(id)
  }, [counter])
  
  if(trainingFinished) {
    setTimeout(() => window.location.href = '/',3500)
    return (
     <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Card variant='outlined'>
         <Stack padding={2}>
           <Typography variant="h5" align="center">Treino finalizado!</Typography>
         </Stack>
       </Card>
     </main>
   )
 }
  if (!currentExercise) return null;

  const seriesFinished = finished.filter(f => f === currentExercise.id).length + 1
  const exerciseName = exercises.find(e => e.id === currentExercise.exerciseId)?.name
  
  if(seriesFinished >= currentExercise.series) {
    const newCurrentExercise = trainingPlanExercises.find(e => !finished.includes(e.id))
    setCurrentExercise(newCurrentExercise)
    if(!newCurrentExercise) {
      setTrainingFinished(true)
    }else {
      setCurrentReps(newCurrentExercise.repGoal)
      setCurrentWeight(newCurrentExercise.weightGoal)
    }
  }
  
  const proceed = () => {
    const trainingExecutionExerciseClient = new TrainingExecutionExerciseClient()
    trainingExecutionExerciseClient.create({
      trainingExecutionId: params.id,
      trainingPlanExerciseId: currentExercise.id,
      reps: currentReps,
      weight: currentWeight
    });

    setCounter(0)
    if (exercising) {
      setExercising(false)
      setResting(true)
      setFinished([...finished, currentExercise.id])
    } else {
      setExercising(true)
      setResting(false)
    }
  }

  const indexOfCurrentExercise = trainingPlanExercises.indexOf(currentExercise)

  const changeCurrentExercise = (index: number) => {
    setCurrentExercise(trainingPlanExercises[index])
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Card variant='outlined'>
          <Stack padding={2}>
          <Typography variant="h5" align="center">{exerciseName}</Typography>
          <Typography variant="h6" align="center">{seriesFinished}/{currentExercise.series}</Typography>
            <Stack direction={'row'}>
                <Stack gap={2}>
                    <Typography variant="h6">Repetições: {currentExercise.minRep} - {currentExercise.maxRep}</Typography>
                    <Typography variant="h5">Meta</Typography>
                    <Typography variant="h6">Repetições: {currentExercise.repGoal}</Typography>
                    <Typography variant="h6">Carga: {currentExercise.weightGoal}kg</Typography>
                </Stack>
            </Stack>

            {(exercising || resting) && <Typography variant="h5" align="center">{Time.secondsToString(counter)}</Typography>}
            <Stack direction='row' gap={2}>
              {indexOfCurrentExercise > 0 && !exercising && <Button variant="contained" onClick={() => changeCurrentExercise(indexOfCurrentExercise-1)}><ArrowBackIosNewIcon /></Button>}
              <Button variant='contained' color={exercising ? "success" : "primary"} onClick={proceed}>
                {!exercising && !resting && 'Começar'}
                {exercising && 'Finalizar'}
                {resting && 'Começar'}
                </Button>
              {(indexOfCurrentExercise < trainingPlanExercises.length - 1) && !exercising && <Button variant="contained" onClick={() => changeCurrentExercise(indexOfCurrentExercise + 1)}><ArrowForwardIosIcon /></Button>}
            </Stack>
          </Stack>
        </Card>
    </main>
  )
}
