import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import CharacterModal from '../elements/CharacterModal';
import crossIcon from '../assets/icons/cross-icon.png';
import wiseIcon from '../assets/icons/wise-icon.png';
import strongIcon from '../assets/icons/strong-icon.png';
import deftIcon from '../assets/icons/deft-icon.png';
import divider from '../assets/images/divider.png';
import { Divider } from '../styles/global';
import StandardPageTemplate from '../template/StandardPage';

const CharactersPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [characters, setCharacters] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/campaigns/${name}/characters`)
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, [name]);

  const filteredCharacters = characters.filter(
    (character) => character.isDead === false
  );

  return (
    <StandardPageTemplate>
      <PageWrapper>
        <h1>Summon new hero</h1>
        <button type='submit' onClick={() => setShowModal(true)}>
          <AddHeroButtonImg src={crossIcon} alt='add penis' />
        </button>
        <CharacterModal
          onClose={() => setShowModal(false)}
          showModal={showModal}
          campaignName={name}
        />
        <CharactersWrapper>
          <Divider src={divider} alt='divider' />
          {filteredCharacters.map((character) => (
            <SingleCharacterContainer key={character.id}>
              <Link
                to={`/campaigns/${name}/characters/${character.id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                {character.class === 'Deft' ? (
                  <img src={deftIcon} alt='deft' />
                ) : character.class === 'Wise' ? (
                  <img src={wiseIcon} alt='wise' />
                ) : character.class === 'Strong' ? (
                  <img src={strongIcon} alt='strong' />
                ) : (
                  {}
                )}{' '}
                {character.name}
              </Link>
            </SingleCharacterContainer>
          ))}

          <Divider src={divider} alt='divider' />
        </CharactersWrapper>
      </PageWrapper>
    </StandardPageTemplate>
  );
};

export default CharactersPage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 100%;
  max-width: 1000px;
  h1 {
    text-align: center;
  }
  p {
    font-size: 20px;
  }
  button {
    width: 70%;
    max-width: 180px;
    margin: auto;
    margin-top: 15px;
    border: 1px solid transparent;
    background-color: rgb(221, 208, 193);
    cursor: pointer;
  }
`;

const AddHeroButtonImg = styled.img`
  :hover {
    transform: scale(1.09);
  }
  :active {
    transform: scale(1);
  }
`;

const CharactersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  font-size: 18px;
`;

const SingleCharacterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  padding: 5px 0;
  border-top: 3px double transparent;
  border-bottom: 3px double transparent;
  a {
    text-decoration: none;
    color: #393939;
    cursor: pointer;
  }
  img {
    width: 100%;
    max-width: 40px;
    vertical-align: middle;
  }
  :hover {
    border-top: 3px double #393939;
    border-bottom: 3px double #393939;
  }
  span {
    line-height: 40px;
  }
`;
