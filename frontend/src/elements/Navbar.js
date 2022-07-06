import React from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import logo from '../assets/images/logo.png'

const Navbar = () => {
  let location = useLocation()
  const { name } = useParams()

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Link to="/">
          <LogoContainer>
            <img src={logo} />
          </LogoContainer>
        </Link>

        <Link
          to={`/campaigns/${name}`}
          style={
            location.pathname === `/campaigns/${name}`
              ? { textDecoration: 'line-through' }
              : {}
          }
        >
          Campaign
        </Link>

        <Link
          to={`/campaigns/${name}/characters`}
          style={
            location.pathname === `/campaigns/${name}/characters`
              ? { textDecoration: 'line-through' }
              : {}
          }
        >
          Characters
        </Link>
        <Link
          to={`/campaigns/${name}/graveyard`}
          style={
            location.pathname === `/campaigns/${name}/graveyard`
              ? { textDecoration: 'line-through' }
              : {}
          }
        >
          Graveyard
        </Link>
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
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 70%;
  max-width: 1000px;
  padding: 20px 0;
  z-index: 9999;
  a {
    color: rgb(221, 208, 193);
    text-decoration: none;
    font-size: 24px;
    letter-spacing: 1px;
    padding: 0 10px;
    :hover {
      text-decoration: line-through;
    }
  }
`
const rotate = keyframes`
 from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const LogoContainer = styled.div`
  img {
    width: 100%;
    max-width: 110px;
    :hover {
      animation-name: ${rotate};
      animation-duration: 35s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
  }
`
