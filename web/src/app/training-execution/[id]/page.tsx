'use client'
import { ExerciseClient } from '@/utils/api/exercise-client'
import { Exercise } from '@/utils/api/models/exercise'
import { TrainingPlanExercise } from '@/utils/api/models/training-plan-exercise'
import { TrainingExecutionClient } from '@/utils/api/training-execution-client'
import { TrainingExecutionExerciseClient } from '@/utils/api/training-execution-exercise-client'
import { TrainingPlanExerciseClient } from '@/utils/api/training-plan-exercise-client'
import { Time } from '@/utils/time'
import { Button, Card, Input, Stack, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ExerciseFinished {
  exerciseId: string;
  reps: number;
  weight: number
}

export default function Home({params}: {params: {id: string}}) {
  const [trainingPlanExercises, setTrainingPlanExercises] = useState<TrainingPlanExercise[]>([])
  const [exercises, setExercises] = useState<Exercise[]>([])
  const [currentExercise, setCurrentExercise] = useState<TrainingPlanExercise>()
  const [finished, setFinished] = useState<ExerciseFinished[]>([])
  const [counter, setCounter] = useState(0)
  const [exercising, setExercising] = useState(false)
  const [resting, setResting] = useState(false)
  const [trainingFinished, setTrainingFinished] = useState(false)
  const [currentReps, setCurrentReps] = useState('0')
  const [currentWeight, setCurrentWeight] = useState('0')
  const [updatedGoals, setUpdatedGoals] = useState<string[]>([])

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
        setCurrentReps(`${response[0].repGoal}`)
        setCurrentWeight(`${response[0].weightGoal}`)
      })

    }

    fetchInformation()
  }, [])

  useEffect(() => {
    for (const exercise of trainingPlanExercises) {
      const total =  exercise.series
      const counted = finished.filter(item => item.exerciseId === exercise.exerciseId).length
      if(updatedGoals.find(item => item === exercise.exerciseId) || total !== counted) continue
      const series = finished.filter(item => item.exerciseId === exercise.exerciseId)
      const averageReps = (series.reduce((acc, item) => item.reps + acc,0)) / series.length
      const averageWeight = (series.reduce((acc, item) => item.weight + acc,0)) / series.length
      let repGoal = exercise.repGoal
      let weightGoal = exercise.weightGoal

      if(averageReps > exercise.repGoal) {
        repGoal += 2
      }

      if(averageReps > exercise.maxRep + 1) {
        repGoal = (exercise.minRep + exercise.maxRep) / 2
        weightGoal = averageWeight + 1
      }

      if(averageWeight > exercise.weightGoal) {
        weightGoal += 1
      }
      const trainingPlanExerciseClient = new TrainingPlanExerciseClient()
      trainingPlanExerciseClient.update(exercise.id, {
        repGoal,
        weightGoal
      })
      setUpdatedGoals(state => ([...state, exercise.exerciseId]))
    }
  }, [finished])
  

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

  const seriesFinished = finished.filter(f => f.exerciseId === currentExercise.exerciseId).length
  const exerciseName = exercises.find(e => e.id === currentExercise.exerciseId)?.name
  
  if(seriesFinished >= currentExercise.series) {
    const newCurrentExercise = trainingPlanExercises.find(e => !finished.find(item => item.exerciseId === e.exerciseId))
    setCurrentExercise(newCurrentExercise)
    if(!newCurrentExercise) {
      setTrainingFinished(true)
    }else {
      setCurrentReps(`${newCurrentExercise.repGoal}`)
      setCurrentWeight(`${newCurrentExercise.weightGoal}`)
    }
  }
  
  const proceed = () => {
    const trainingExecutionExerciseClient = new TrainingExecutionExerciseClient()
    trainingExecutionExerciseClient.create({
      trainingExecutionId: params.id,
      trainingPlanExerciseId: currentExercise.id,
      reps: Number(currentReps),
      weight: Number(currentWeight)
    });

    setCounter(0)
    if (exercising) {
      setExercising(false)
      setResting(true)
      setFinished([...finished, {
        exerciseId: currentExercise.exerciseId,
        weight: Number(currentWeight),
        reps: Number(currentReps)
      }])
    } else {
      setExercising(true)
      setResting(false)
    }
  }

  const indexOfCurrentExercise = trainingPlanExercises.indexOf(currentExercise)
  // TODO: listar exercicios por data de criação (ordenação inicial, depois pode melhorar)
  const changeCurrentExercise = (index: number) => {
    const newExercise = trainingPlanExercises[index]
    setCurrentExercise(newExercise)
    setCurrentReps(`${newExercise.repGoal}`)
    setCurrentWeight(`${newExercise.weightGoal}`)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Card variant='outlined'>
          <Stack padding={2}>
          <Typography variant="h5" align="center">{exerciseName}</Typography>
          <Typography variant="h6" align="center">{seriesFinished+1}/{currentExercise.series}</Typography>
            <Stack direction={'row'}>
                <Stack gap={2}>
                    <Typography variant="h6">Repetições: {currentExercise.minRep} - {currentExercise.maxRep}</Typography>
                    <Stack direction={'row'}>
                      <Stack>
                        <TextField variant="outlined" size='small' value={currentReps} onChange={event => setCurrentReps(event.target.value)}/>
                        <Typography variant='body1'>Meta: {currentExercise.repGoal}</Typography>
                      </Stack>
                    </Stack>
                    <Stack direction={'row'} mb={2}>
                      <Stack>
                        <TextField variant="outlined" size='small' value={currentWeight} onChange={event => setCurrentWeight(event.target.value)}/>
                        <Typography variant='body1'>Carga: {currentExercise.weightGoal}kg</Typography>
                      </Stack>
                    </Stack>
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
