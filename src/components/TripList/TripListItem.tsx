import { Link } from 'react-router-dom'

import { Trip } from '../../types'
import classNames from './TripListItem.module.css'

export function TripListItem({ id, name, description }: Trip) {
  return (
    <li key={id}>
      <Link className={classNames.item} to={`/trip/${id}`}>
        <h2 className={classNames.name}>{name}</h2>
        <span className={classNames.description}>{description}</span>
      </Link>
    </li>
  )
}
