import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/graveyard">Graveyard</Link>
      </NavbarContainer>
    </>
  )
}

export default Navbar

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 50%;
  max-width: 1000px;
  padding: 40px;
  a {
    color: black;
    text-decoration: none;
    font-size: 24px;
    :hover {
      text-decoration: underline;
    }
  }
`
