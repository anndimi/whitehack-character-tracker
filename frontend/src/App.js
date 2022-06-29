import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import CampaignPage from './pages/CampaignPage'
import CharactersPage from './pages/CharactersPage'
import CharacterPage from './pages/CharacterPage'
import GraveyardPage from './pages/GraveyardPage'
import ErrorPage from './pages/ErrorPage'
// import './App.css'

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/characters')
      .then((res) => res.json())
      .then((data) => setCharacters(data))
  }, [])

  return (
    <div>
      <header></header>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="campaign" element={<CampaignPage />}>
            <Route index element={<CharactersPage />} />
            <Route
              path="characters"
              element={<CharactersPage characters={characters} />}
            >
              <Route path="character/:name" element={<CharacterPage />} />
            </Route>

            <Route path="graveyard" element={<GraveyardPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
