import { Trip } from '../types/Trip'

const ALL_TRIPS: Trip[] = [
  {
    id: '1',
    name: 'trip to france',
    description: 'oh lala',
    expenses: [],
  },
  {
    id: '2',
    name: 'weekend in disneyland',
    description: '🐭 mickey mouse',
    expenses: [],
  },
  {
    id: '3',
    name: 'night club drinks',
    description: 'what a night, uh',
    expenses: [],
  },
]

const DEFAULT_TIMEOUT = 500

export function getAllTrips(): Promise<Trip[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ALL_TRIPS)
    }, DEFAULT_TIMEOUT)
  })
}

export function createNewTrip(trip: Trip): Promise<string> {
  ALL_TRIPS.push(trip)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('ok')
    }, DEFAULT_TIMEOUT)
  })
}
