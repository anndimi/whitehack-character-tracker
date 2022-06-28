import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './elements/Navbar'
import Home from './pages/Home'
import CharactersPage from './pages/CharactersPage'
import CharacterPage from './pages/CharacterPage'
import GraveyardPage from './pages/GraveyardPage'
import ErrorPage from './pages/ErrorPage'
// import './App.css'

function App() {
  return (
    <div>
      <header></header>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route
            path="/characters/character/:name"
            element={<CharacterPage />}
          />
          <Route path="/graveyard" element={<GraveyardPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
