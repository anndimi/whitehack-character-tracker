import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PageContainer } from '../styles/global'
import CharacterModal from '../elements/CharacterModal'
import crossIcon from '../assets/icons/cross-icon.png'
import wiseIcon from '../assets/icons/wise-icon.png'
import strongIcon from '../assets/icons/strong-icon.png'
import deftIcon from '../assets/icons/deft-icon.png'
import divider from '../assets/images/divider.png'
import { Divider } from '../styles/global'

const CharactersPage = ({ characters }) => {
  const [showModal, setShowModal] = useState(false)

  return (
    <PageContainer>
      <PageWrapper>
        <h1>Summon new hero</h1>
        <button type="submit" onClick={() => setShowModal(true)}>
          <AddHeroButtonImg src={crossIcon} alt="add hero" />
        </button>
        <CharacterModal
          onClose={() => setShowModal(false)}
          showModal={showModal}
        />
        <CharactersWrapper>
          <Divider src={divider} alt="divider" />
          <SingleCharacterContainer>
            <div>
              <img src={deftIcon} />
              Idris Kushul
            </div>
            <span>Level 1</span>
          </SingleCharacterContainer>
          <SingleCharacterContainer>
            <div>
              <img src={wiseIcon} /> Nicholas Black Elk
            </div>
            <span>Level 1</span>
          </SingleCharacterContainer>
          <SingleCharacterContainer>
            <div>
              <img src={wiseIcon} /> Baksha Greenleaf
            </div>
            <span>Level 1</span>
          </SingleCharacterContainer>
          <SingleCharacterContainer>
            <div>
              <img src={strongIcon} /> Bromir
            </div>
            <span>Level 4</span>
          </SingleCharacterContainer>
          {/* {characters.map((character) => (
            <CharacterListContainer key={character._id}>
              <Link
                to={`/characters/character/${character._id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                {character.name}
              </Link>
            </CharacterListContainer>
          ))} */}
          <Divider src={divider} alt="divider" />
        </CharactersWrapper>
      </PageWrapper>
    </PageContainer>
  )
}

export default CharactersPage

// const CharacterListContainer = styled.div`
//   width: 50%;
//   max-width: 400px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   a {
//     text-decoration: none;
//     color: black;
//     font-size: 20px;
//   }
// `

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
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
`

const AddHeroButtonImg = styled.img`
  :hover {
    transform: scale(1.09);
  }
  :active {
    transform: scale(1);
  }
`

const CharactersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  font-size: 18px;
`

const SingleCharacterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 80%;
  padding: 5px 0;
  border-top: 3px double transparent;
  border-bottom: 3px double transparent;
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
`
