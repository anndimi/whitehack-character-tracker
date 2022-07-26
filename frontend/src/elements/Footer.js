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
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 0;
  a {
    color: #393939;
    text-decoration: none;
    letter-spacing: 0.5px;
    :hover {
      text-decoration: line-through;
    }
  }
`
