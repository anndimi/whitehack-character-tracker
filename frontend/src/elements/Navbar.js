import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Link to="/">Home</Link>
        <Link to="/campaign">Campaign</Link>
        <Link to="characters">Characters</Link>
        <Link to="graveyard">Graveyard</Link>
      </NavbarWrapper>
      <Outlet />
    </NavbarContainer>
  )
}

export default Navbar

const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`

const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 60%;
  max-width: 1000px;
  padding: 40px 0;
  z-index: 9999;
  a {
    color: rgb(221, 208, 193);
    text-decoration: none;
    font-size: 24px;
    letter-spacing: 1px;
    padding: 0 15px;
    :hover {
      text-decoration: line-through;
    }
  }
`
