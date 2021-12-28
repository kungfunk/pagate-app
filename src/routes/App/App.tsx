import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NewTrip } from '../NewTrip'
import { Trip } from '../Trip'
import { TripList } from '../TripList'

const queryClient = new QueryClient()

export function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TripList />} />
          <Route path="trip/:id" element={<Trip />}></Route>
          <Route path="trip/new" element={<NewTrip />} />
          <Route path="*" element={<code>Error 404</code>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
