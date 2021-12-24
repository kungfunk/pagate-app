import { Trip } from '../../types'
import { TripListItem } from './TripListItem'
import classNames from './TripList.module.css'

interface TripList {
  trips: Trip[]
}

export function TripList({ trips }: TripList) {
  return (
    <nav>
      <ul className={classNames.list}>
        {trips.map((trip: Trip) => (
          <TripListItem key={trip.id} {...trip} />
        ))}
      </ul>
    </nav>
  )
}
