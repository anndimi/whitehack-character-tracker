import React from 'react'
import styled from 'styled-components'
import { PageContainer } from '../styles/global'
import gravestone1 from '../assets/images/gravestone1.png'
import gravestone2 from '../assets/images/gravestone2.png'
import gravestone3 from '../assets/images/gravestone3.png'
import gravestone4 from '../assets/images/gravestone4.png'
import gravestone5 from '../assets/images/gravestone5.png'

const GraveyardPage = () => {
  return (
    <PageContainer>
      <PageWrapper>
        <h1>Requiescat in pace, heroum..</h1>
        <GraveyardContainer>
          <GravestoneContainer>
            <img src={gravestone1} />
            <h3>Morwen</h3>
          </GravestoneContainer>
          <GravestoneContainer>
            <img src={gravestone2} />
            <h3>Eluwaer</h3>
          </GravestoneContainer>
          <GravestoneContainer>
            <img src={gravestone3} />
            <h3>Sazarioth</h3>
          </GravestoneContainer>
          <GravestoneContainer>
            <img src={gravestone4} />
            <h3>Macha</h3>
          </GravestoneContainer>
          <GravestoneContainer>
            <img src={gravestone5} />
            <h3>Doge Tinyshoe</h3>
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
  h3 {
    font-size: 20px;
    margin: 0;
  }
`

const GraveyardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
  gap: 20px;
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
