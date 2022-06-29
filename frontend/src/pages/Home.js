import React from 'react'
import { Link } from 'react-router-dom'
import { PageTitle } from '../styles/global'

const Home = () => {
  return (
    <>
      <PageTitle>Whitehack Character Tracker</PageTitle>
      <Link to="/campaign">Go to campaign</Link>
    </>
  )
}

export default Home
