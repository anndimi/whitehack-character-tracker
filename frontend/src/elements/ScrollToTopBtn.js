import React, { useState } from 'react'
import styled from 'styled-components'
import upArrow from '../assets/icons/uparrow.png'

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop

    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <>
      <Button
        onClick={scrollToTop}
        style={{ display: visible ? 'initial' : 'none' }}
      >
        <img src={upArrow} alt="to page top" />
      </Button>
    </>
  )
}

export default ScrollToTopBtn

const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 90%;
  bottom: 90px;
  height: 20px;
  cursor: pointer;
  img {
    wisth: 100%;
    max-width: 60px;
    opacity: 0.55;
    :hover {
      transform: scale(1.05);
    }
    :active {
      transform: scale(1);
    }
  }
`
