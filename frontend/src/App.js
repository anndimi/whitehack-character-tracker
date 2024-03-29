import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CampaignPage from './pages/CampaignPage';
import CharactersPage from './pages/CharactersPage';
import CharacterPage from './pages/CharacterPage';
import GraveyardPage from './pages/GraveyardPage';
import ErrorPage from './pages/ErrorPage';
import styled from 'styled-components';
import ScrollToTopButton from './elements/ScrollToTopBtn';

function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/campaigns/:name' element={<CampaignPage />} />
          <Route
            path='/campaigns/:name/characters'
            element={<CharactersPage />}
          />
          <Route
            path='/campaigns/:name/characters/:id'
            element={<CharacterPage />}
          />
          <Route
            path='/campaigns/:name/graveyard'
            element={<GraveyardPage />}
          />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <ScrollToTopButton />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
`;
