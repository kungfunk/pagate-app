import { useParams } from 'react-router-dom'

export function Trip(): JSX.Element {
  const params = useParams()

  return (
    <main>
      <h1>Trip id: {params.id}</h1>
    </main>
  )
}
