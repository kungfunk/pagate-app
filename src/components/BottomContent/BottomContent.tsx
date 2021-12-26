import classNames from './BottomContent.module.css'

type BottomContainer = {
  children: React.ReactNode
}

export function BottomContainer({ children }: BottomContainer): JSX.Element {
  return <div className={classNames.bottom}>{children}</div>
}
