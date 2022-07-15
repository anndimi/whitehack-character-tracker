import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../elements/Navbar'
import wiseIcon from '../assets/icons/wise-icon.png'
import strongIcon from '../assets/icons/strong-icon.png'
import deftIcon from '../assets/icons/deft-icon.png'
import { Divider } from '../styles/global'
import EditCharacterModal from '../elements/EditCharacterModal'
import divider from '../assets/images/divider.png'
import quilIcon from '../assets/icons/quil-icon.png'
import skullIcon from '../assets/icons/skull-icon.png'
import { PageContainer } from '../styles/global'

const CharacterPage = () => {
  const [character, setCharacter] = useState({})
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [characterIsDead, setCharacterIsDead] = useState(false)
  const { id, name } = useParams()
  const navigate = useNavigate()

  const handleCharDeath = () => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isDead: true }),
    }

    fetch(`http://localhost:8080/characters/${id}`, options)
      .then((res) => res.json())
      .then((data) => setCharacterIsDead(data.isDead))
      .then(() => console.log(characterIsDead))
  }

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
            <h1 style={{ textAlign: 'center' }}>
              {character.name}, {character.experiencePoints} XP
            </h1>

            <CharacterBtn type="submit" onClick={() => setShowModal(true)}>
              <img src={quilIcon} alt="edit hero" />
            </CharacterBtn>

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
                  <h1>Attributes</h1>
                  <ul>
                    <li>Strength: {character.attributes.str.score}</li>
                    <li>Dexterity: {character.attributes.dex.score}</li>
                    <li>Constitution: {character.attributes.con.score}</li>
                    <li>Intelligence: {character.attributes.int.score}</li>
                    <li>Wisdom: {character.attributes.wis.score}</li>
                    <li>Charisma: {character.attributes.cha.score}</li>
                  </ul>
                </AttributesContainer>
                <AttributesContainer>
                  <h1>Groups</h1>
                  <ul>
                    <li>Strength: {character.attributes.str.groups}</li>
                    <li>Dexterity: {character.attributes.dex.groups}</li>
                    <li>Constitution: {character.attributes.con.groups}</li>
                    <li>Intelligence: {character.attributes.int.groups}</li>
                    <li>Wisdom: {character.attributes.wis.groups}</li>
                    <li>Charisma: {character.attributes.cha.groups}</li>
                  </ul>
                </AttributesContainer>
              </CharacterContainer>
            </CharacterWrapper>
            <Divider src={divider} alt="divider" />
            <BackgroundContainer>
              <h1>Background</h1>
              <p>{character.background}</p>
            </BackgroundContainer>
            <Divider src={divider} alt="divider" />
            <CharacterBtn
              onClick={() => {
                handleCharDeath()
                navigate(`/campaigns/${name}/graveyard`)
                alert('Are you sure?')
              }}
              type="submit"
            >
              <img src={skullIcon} alt="kill hero" />
            </CharacterBtn>
          </PageWrapper>
        </PageContainer>
      )}
    </>
  )
}

export default CharacterPage

const BackgroundContainer = styled.div`
  width: 80%;
  margin: auto;
  h1 {
    text-align: center;
  }
  p {
    font-size: 20px;
  }
`

const CharacterBtn = styled.button`
background: transparent;
border: 1px solid transparent;
cursor: pointer;
  }
  img {
    :hover {
      transform: scale(1.09);
    }
    :active {
      transform: scale(1);
    }
  }
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
