import { Trip } from '../../types'
import { TripListItem } from './TripListItem'
import './TripList.css'

interface TripList {
  trips: Trip[]
}

export function TripList({ trips }: TripList) {
  return (
    <nav>
      <ul className="TripList">
        {trips.map((trip: Trip) => (
          <TripListItem key={trip.id} {...trip} />
        ))}
      </ul>
    </nav>
  )
}
