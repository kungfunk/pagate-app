import { Trip } from '../../types'
import classNames from './TripListItem.module.css'

export function TripListItem({ id, name, description }: Trip) {
  return (
    <li key={id}>
      <a className={classNames.item} href="">
        <h2 className={classNames.name}>{name}</h2>
        <span className={classNames.description}>{description}</span>
      </a>
    </li>
  )
}
