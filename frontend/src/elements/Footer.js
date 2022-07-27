import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <span>
        Illustrations by{' '}
        <a
          href="https://www.johanegerkrans.com/"
          target="_blank"
          rel="noreferrer"
        >
          Johan Egerkrans
        </a>
        ©
      </span>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  margin-top: 50px;
  a {
    color: rgb(221, 208, 193);
    text-decoration: none;
    letter-spacing: 0.5px;
    :hover {
      text-decoration: line-through;
    }
  }
`
