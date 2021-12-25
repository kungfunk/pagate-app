import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import { App } from './components/App'
import { Trip } from './routes/Trip'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="new-trip" element={<div>test</div>} />
        <Route path="trip">
          <Route path=":id" element={<Trip />}></Route>
        </Route>
        <Route path="*" element={<code>Error 404</code>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
