import { ChangeEvent, FormEvent, useState } from 'react'
import { useMutation } from 'react-query'
import { v4 as uuidv4 } from 'uuid'
import { ErrorMessage } from '../../components/ErrorMessage'
import { createNewTrip } from '../../services/repository'

export function NewTrip(): JSX.Element {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const mutation = useMutation(createNewTrip)

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    if (!mutation.isLoading) {
      mutation.mutate({
        id: uuidv4(),
        name,
        description,
        expenses: [],
      })
    }
  }

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value)
  }

  const handleDescriptionChange = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setDescription(event.target.value)
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name your trip</label>
          <input
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div>
          <label htmlFor="description">Add a fancy description</label>
          <input
            name="description"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        {mutation.isError && mutation.error instanceof Error ? (
          <ErrorMessage text={mutation.error.message} />
        ) : null}
        <button type="submit" disabled={mutation.isLoading}>
          Add trip!
        </button>
      </form>
    </main>
  )
}
