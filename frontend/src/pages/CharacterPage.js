import React from 'react'
import styled from 'styled-components'
import { PageContainer } from '../styles/global'

const CharacterPage = () => {
  return (
    <PageContainer>
      <PageWrapper>
        <h1>(this is your character)</h1>
        <p>they are really cool!</p>
      </PageWrapper>
    </PageContainer>
  )
}

export default CharacterPage

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 80%;
  max-width: 1000px;
  p {
    font-size: 20px;
  }
`
