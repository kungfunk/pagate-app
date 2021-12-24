import { Link } from 'react-router-dom'

import classNames from './NewTripButton.module.css'

export function NewTripButton() {
  return (
    <Link className={classNames.button} to="/new-trip">
      Add new Trip
    </Link>
  )
}
