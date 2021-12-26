import { Link } from 'react-router-dom'

import classNames from './Button.module.css'

type Button = {
  children: React.ReactNode
  to: string
}

export function Button({ children, ...rest }: Button): JSX.Element {
  return (
    <Link className={classNames.button} {...rest}>
      {children}
    </Link>
  )
}
