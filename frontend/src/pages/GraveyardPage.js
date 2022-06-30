import React from 'react'
import styled from 'styled-components'
import { PageContainer } from '../styles/global'
import gravestone from '../assets/images/gravestone.png'

const GraveyardPage = () => {
  return (
    <PageContainer>
      <PageWrapper>
        <h1>Requiescat in pace, heroum..</h1>
        <GraveyardContainer>
          <GravestoneContainer>
            <img src={gravestone} />
            <span>Morwen</span>
          </GravestoneContainer>
          <GravestoneContainer>
            <img src={gravestone} />
            <span>Eluwaer</span>
          </GravestoneContainer>
          <GravestoneContainer>
            <img src={gravestone} />
            <span>Sazarioth</span>
          </GravestoneContainer>
        </GraveyardContainer>
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
  width: 80%;
  max-width: 1000px;
  p {
    font-size: 20px;
  }
`

const GraveyardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  text-align: center;
  img {
    width: 250px;
  }
`

const GravestoneContainer = styled.div`
  display: flex;
  flex-direction: column;
`
