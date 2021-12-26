import { Expense } from './Expense'

export type Trip = {
  id: string
  name: string
  description: string
  expenses: Expense[]
}
