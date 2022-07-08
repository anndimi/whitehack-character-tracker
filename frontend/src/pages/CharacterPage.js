import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../elements/Navbar'
import wiseIcon from '../assets/icons/wise-icon.png'
import strongIcon from '../assets/icons/strong-icon.png'
import deftIcon from '../assets/icons/deft-icon.png'
import { Divider } from '../styles/global'
import divider from '../assets/images/divider.png'

const CharacterPage = () => {
  const [character, setCharacter] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:8080/characters/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
      .finally(() => setLoading(false))
  }, [])

  console.log(character)

  return (
    <>
      {JSON.stringify(character) === JSON.stringify({}) ? (
        <div>yo</div>
      ) : (
        <PageContainer>
          <Navbar />
          <PageWrapper>
            <h1 style={{ textAlign: 'center' }}>
              {character.name}, {character.experiencePoints} XP
            </h1>

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
