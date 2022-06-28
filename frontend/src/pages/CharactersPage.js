import React, { useEffect, useState } from 'react'
import { PageTitle } from '../styles/global'

const CharactersPage = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/characters')
      .then((res) => res.json())
      .then((data) => setCharacters(data))
  })

  return (
    <>
      <PageTitle>this is characters, yes?</PageTitle>
      {characters.map((character) => (
        <div key={character._id}>
          <h2>{character.name}</h2>
        </div>
      ))}
    </>
  )
}

export default CharactersPage
