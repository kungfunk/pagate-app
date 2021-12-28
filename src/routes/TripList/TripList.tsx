import { Trip } from '../../types'
import classNames from './TripList.module.css'
import { useQuery } from 'react-query'
import { Loading } from '../../components/Loading'
import { ErrorMessage } from '../../components/ErrorMessage'
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { BottomContainer } from '../../components/BottomContent'
import { getAllTrips } from '../../services/repository'

interface TripList {
  trips: Trip[]
}

export function TripList(): JSX.Element {
  const {
    isLoading,
    error,
    data: trips,
  } = useQuery<Trip[], Error>('trips', getAllTrips)

  if (isLoading) {
    return <Loading />
  }

  if (error) {
    return <ErrorMessage text={error.message} />
  }

  return (
    <>
      <nav>
        <ul className={classNames.list}>
          {trips &&
            trips.map((trip: Trip) => (
              <li key={trip.id}>
                <Link className={classNames.item} to={`/trip/${trip.id}`}>
                  <h2 className={classNames.name}>{trip.name}</h2>
                  <span className={classNames.description}>
                    {trip.description}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      <BottomContainer>
        <Button to="/trip/new">Create new Trip!</Button>
      </BottomContainer>
    </>
  )
}
