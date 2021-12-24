import { Trip } from '../../types'
import './TripListItem.css'

export function TripListItem({ id, name, description }: Trip) {
  return (
    <li key={id}>
      <a className="TripListItem" href="">
        <h2 className="TripListItem__name">{name}</h2>
        <span className="TripListItem__description">{description}</span>
      </a>
    </li>
  )
}
