import classNames from './NewTripButton.module.css'

export function NewTripButton() {
  return (
    <a className={classNames.button} href="">
      Add new Trip
    </a>
  )
}
