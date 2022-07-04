import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CampaignPage from './pages/CampaignPage'
import CharactersPage from './pages/CharactersPage'
import CharacterPage from './pages/CharacterPage'
import GraveyardPage from './pages/GraveyardPage'
import ErrorPage from './pages/ErrorPage'
import styled from 'styled-components'
import HeroImg from './elements/HeroImg'
import ScrollToTopButton from './elements/ScrollToTopBtn'

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/characters')
      .then((res) => res.json())
      .then((data) => setCharacters(data))
  }, [])

  return (
    <AppContainer>
      <BrowserRouter>
        <HeroImg />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="campaign" element={<CampaignPage />}>
            <Route
              path="characters"
              element={<CharactersPage characters={characters} />}
            >
              <Route path="character/:name" element={<CharacterPage />} />
            </Route>

            <Route path="graveyard" element={<GraveyardPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <ScrollToTopButton />
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  height: 100vh;
`
