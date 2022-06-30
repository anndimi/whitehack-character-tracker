import React from 'react'
import styled from 'styled-components'
import { PageContainer } from '../styles/global'

const GraveyardPage = () => {
  return (
    <PageContainer>
      <PageWrapper>
        <h1>(List of deceased characters)</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
          blandit turpis cursus in hac habitasse. Malesuada nunc vel risus
          commodo. Id venenatis a condimentum vitae sapien pellentesque habitant
          morbi. Eget dolor morbi non arcu risus quis varius. Vestibulum lorem
          sed risus ultricies tristique nulla aliquet enim tortor. Suspendisse
          interdum consectetur libero id faucibus nisl. Sodales neque sodales ut
          etiam sit amet nisl purus. Commodo odio aenean sed adipiscing diam
          donec adipiscing tristique risus. Aenean euismod elementum nisi quis
          eleifend quam adipiscing. Id interdum velit laoreet id donec ultrices
          tincidunt arcu non. In pellentesque massa placerat duis ultricies
          lacus. Eget egestas purus viverra accumsan in nisl nisi scelerisque.
        </p>
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
