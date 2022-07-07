import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../elements/Navbar'
import wiseIcon from '../assets/icons/wise-icon.png'
import strongIcon from '../assets/icons/strong-icon.png'
import deftIcon from '../assets/icons/deft-icon.png'

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
            <h1>Name: {character.name}</h1>
            <h1>XP: {character.experiencePoints}</h1>

            <div>
              {character.class === 'Deft' ? (
                <img src={deftIcon} alt="deft" />
              ) : character.class === 'Wise' ? (
                <img src={wiseIcon} alt="wise" />
              ) : character.class === 'Strong' ? (
                <img src={strongIcon} alt="strong" />
              ) : (
                {}
              )}
              <span>{character.class}</span>
            </div>

            <h1>Species: {character.species}</h1>
            <h1>Vocation: {character.vocation}</h1>
            <ul>
              Attributes
              <li>Strength: {character.attributes.str.score}</li>
              <li>Dexterity: {character.attributes.dex.score}</li>
              <li>Constitution: {character.attributes.con.score}</li>
              <li>Intelligence: {character.attributes.int.score}</li>
              <li>Wisdom: {character.attributes.wis.score}</li>
              <li>Charisma: {character.attributes.cha.score}</li>
            </ul>
          </PageWrapper>
        </PageContainer>
      )}
    </>
  )
}

export default CharacterPage

const PageContainer = styled.div``

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  width: 80%;
  max-width: 1000px;
  p {
    font-size: 20px;
  }
  img {
    width: 100%;
    max-width: 50px;
  }
`
