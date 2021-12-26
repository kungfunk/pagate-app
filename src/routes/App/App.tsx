import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Trip } from '../Trip'
import { TripList } from '../TripList'

const queryClient = new QueryClient()

export function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TripList />} />
          <Route path="new-trip" element={<div>test</div>} />
          <Route path="trip">
            <Route path=":id" element={<Trip />}></Route>
          </Route>
          <Route path="*" element={<code>Error 404</code>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}
