import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../elements/Navbar'
import styled from 'styled-components'

const CampaignPage = () => {
  let location = useLocation()
  return (
    <>
      <Navbar />
      {location.pathname === '/campaign' ? (
        <PageContainer>
          <h1>(Campaign name)</h1>
          <CampaignWrapper>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              blandit turpis cursus in hac habitasse. Malesuada nunc vel risus
              commodo. Id venenatis a condimentum vitae sapien pellentesque
              habitant morbi. Eget dolor morbi non arcu risus quis varius.
              Vestibulum lorem sed risus ultricies tristique nulla aliquet enim
              tortor. Suspendisse interdum consectetur libero id faucibus nisl.
              Sodales neque sodales ut etiam sit amet nisl purus. Commodo odio
              aenean sed adipiscing diam donec adipiscing tristique risus.
              Aenean euismod elementum nisi quis eleifend quam adipiscing. Id
              interdum velit laoreet id donec ultrices tincidunt arcu non. In
              pellentesque massa placerat duis ultricies lacus. Eget egestas
              purus viverra accumsan in nisl nisi scelerisque.
            </p>
          </CampaignWrapper>
        </PageContainer>
      ) : null}
    </>
  )
}

export default CampaignPage

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 80%;
  max-width: 1000px;
`
const CampaignWrapper = styled.div`
  border-bottom: 4px double #393939;
  border-top: 4px double #393939;
  padding: 30px 0;
  p {
    font-size: 20px;
  }
`
