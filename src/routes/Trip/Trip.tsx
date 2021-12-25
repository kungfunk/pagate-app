import { useParams } from 'react-router-dom'

export function Trip() {
  const params = useParams()

  return <p>Trip id: {params.id}</p>
}
