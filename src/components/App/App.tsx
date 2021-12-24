import { Trip } from '../../types'
import { TripList } from '../TripList/TripList'
import './App.css'
import { NewTripButton } from './NewTripButton/NewTripButton'

const mockTrips: Trip[] = [
  {
    id: '1',
    name: 'trip to france',
    description: 'oh lala',
  },
  {
    id: '2',
    name: 'weekend in disneyland',
    description: '🐭 mickey mouse',
  },
  {
    id: '3',
    name: 'night club drinks',
    description: 'what a night, uh',
  },
]

export function App() {
  return (
    <>
      <TripList trips={mockTrips} />
      <NewTripButton />
    </>
  )
}
