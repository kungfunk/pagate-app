import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import { App } from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="new-trip" element={<div>test</div>} />
        <Route path="trip">
          <Route path=":id" element={<div>test</div>}></Route>
        </Route>
        <Route
          path="*"
          element={
            <main>
              <code>Error 404</code>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
