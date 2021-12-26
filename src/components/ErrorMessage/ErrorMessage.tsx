type ErrorMessage = {
  text: string
}

export function ErrorMessage({ text }: ErrorMessage): JSX.Element {
  return <p>Ops, an error has ocurred: ${text}</p>
}
