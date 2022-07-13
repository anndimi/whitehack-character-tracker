import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../elements/Navbar'
import wiseIcon from '../assets/icons/wise-icon.png'
import strongIcon from '../assets/icons/strong-icon.png'
import deftIcon from '../assets/icons/deft-icon.png'
import { Divider } from '../styles/global'
import EditCharacterModal from '../elements/EditCharacterModal'
import divider from '../assets/images/divider.png'
import quilIcon from '../assets/icons/quil-icon.png'

const CharacterPage = () => {
  const [character, setCharacter] = useState({})
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:8080/characters/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <>
      {JSON.stringify(character) === JSON.stringify({}) ? (
        <div>yo</div>
      ) : (
        <PageContainer>
          <Navbar />
          <PageWrapper>
            <h1 style={{ textAlign: 'center' }}>{character.name}</h1>
            <h1>{character.experiencePoints} XP</h1>
            <button type="submit" onClick={() => setShowModal(true)}>
              <img src={quilIcon} alt="add hero" />
            </button>
            <EditCharacterModal
              onClose={() => setShowModal(false)}
              showModal={showModal}
              name={character.name}
              species={character.species}
              class={character.class}
              vocation={character.vocation}
              str={character.attributes.str.score}
              dex={character.attributes.dex.score}
              con={character.attributes.con.score}
              int={character.attributes.int.score}
              wis={character.attributes.wis.score}
              cha={character.attributes.cha.score}
              background={character.background}
            />
            <Divider src={divider} alt="divider" />
            <CharacterWrapper>
              <CharacterContainer>
                <ClassWrapper>
                  <h1>
                    {character.species}, {character.vocation}
                  </h1>

                  {character.class === 'Deft' ? (
                    <img src={deftIcon} alt="deft" />
                  ) : character.class === 'Wise' ? (
                    <img src={wiseIcon} alt="wise" />
                  ) : character.class === 'Strong' ? (
                    <img src={strongIcon} alt="strong" />
                  ) : (
                    {}
                  )}
                </ClassWrapper>

                <AttributesContainer>
                  <h1> Attributes</h1>
                  <ul>
                    <li>Strength: {character.attributes.str.score}</li>
                    <li>Dexterity: {character.attributes.dex.score}</li>
                    <li>Constitution: {character.attributes.con.score}</li>
                    <li>Intelligence: {character.attributes.int.score}</li>
                    <li>Wisdom: {character.attributes.wis.score}</li>
                    <li>Charisma: {character.attributes.cha.score}</li>
                  </ul>
                </AttributesContainer>
              </CharacterContainer>
            </CharacterWrapper>
            <Divider src={divider} alt="divider" />
            <h1>Background</h1>
            <p>{character.background}</p>
          </PageWrapper>
        </PageContainer>
      )}
    </>
  )
}

export default CharacterPage

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 80%;
  max-width: 1000px;
`

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const CharacterWrapper = styled.div`
  width: 80%;
  max-width: 1000px;
`

const CharacterContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const AttributesContainer = styled.div`
  ul {
    list-style: none;
    padding: 0;
    font-size: 20px;
  }
`

const ClassWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    width: 100%;
    max-width: 50px;
    align-self: center;
  }
`
