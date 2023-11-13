import { useState } from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'

import './App.scss'
import { PlayListIndex } from './pages/PlayListIndex'

export function App() {

  return (
    <Router>
      <section className='main-layout'>

        <Routes>
          <Route>
            <Route element={<PlayListIndex />} path="/" />

          </Route>
        </Routes>
      </section>
    </Router>
  )
}