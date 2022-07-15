import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { PageContainer } from '../styles/global'
import gravestone1 from '../assets/images/gravestone1.png'
import gravestone2 from '../assets/images/gravestone2.png'
import gravestone3 from '../assets/images/gravestone3.png'
import gravestone4 from '../assets/images/gravestone4.png'
import gravestone5 from '../assets/images/gravestone5.png'
import divider from '../assets/images/divider.png'
import cross from '../assets/images/cross.png'
import { Divider } from '../styles/global'
import Navbar from '../elements/Navbar'

const gravestoneImgs = [
  gravestone1,
  gravestone2,
  gravestone3,
  gravestone4,
  gravestone5,
]

const GraveyardPage = () => {
  const [characters, setCharacters] = useState([])

  const { name } = useParams()

  useEffect(() => {
    fetch(`http://localhost:8080/campaigns/${name}/characters`)
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .then(() => console.log(characters))
  }, [name])

  const filteredCharacters = characters.filter(
    (character) => character.isDead === true
  )

  return (
    <PageContainer>
      <Navbar />
      <PageWrapper>
        <h1>Requiescat in pace, heroum..</h1>
        <CrossImg src={cross} />
        <h3>tua facta memorabuntur</h3>
        <Divider src={divider} alt="divider" />
        <GraveyardContainer>
          {filteredCharacters.map((character) => (
            <GravestoneContainer key={character.id}>
              <img
                src={
                  gravestoneImgs[
                    Math.floor(Math.random() * gravestoneImgs.length)
                  ]
                }
                alt="gravestone"
              />
              <h3>{character.name}</h3>
            </GravestoneContainer>
          ))}
        </GraveyardContainer>
        <Divider src={divider} alt="divider" />
      </PageWrapper>
    </PageContainer>
  )
}

export default GraveyardPage

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 100px;
  text-align: center;
  h3 {
    font-size: 20px;
    margin: 0;
  }
`

const CrossImg = styled.img`
  width: 100%;
  max-width: 60px;
`

const GraveyardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
  gap: 20px;
  margin: auto;
  padding: 30px 0;
  img {
    width: 250px;
  }
`

const GravestoneContainer = styled.div`
  display: flex;
  flex-direction: column;
`
