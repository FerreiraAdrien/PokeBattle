import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Header = () => {
  const [menu, setMenu] = useState('hidden')

  return (
    <section>
      <Menu animate={menu} variants={menuVariants}>
        <ContentMenuStyled>
          <br />
          <Link to={`/`}>Pokemon list</Link>
          <br />
          <Link to={`/`}>My team</Link>
          <br />
          <Link to={`/`}>My battle history</Link>
          <CloseMenuStyled>
            <FontAwesomeIcon
              icon={faTimes}
              size='2x'
              onClick={() => {
                setMenu(menu === 'visible' ? 'hidden' : 'visible')
              }}
            />
          </CloseMenuStyled>
        </ContentMenuStyled>
      </Menu>

      <HeaderStyled>
        Header
        <OpenMenuStyled>
          <FontAwesomeIcon
            icon={faBars}
            size='2x'
            onClick={() => {
              setMenu(menu === 'visible' ? 'hidden' : 'visible')
            }}
          />
        </OpenMenuStyled>
      </HeaderStyled>
    </section>
  )
}

const Menu = styled(motion.div)`
  text-align: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 2;
  background-color: aliceblue;
  display: flex;
  align-items: center;
  justify-content: center;
`

const menuVariants = {
  visible: {
    x: 0
  },
  hidden: { x: -document.body.clientWidth }
}

const ContentMenuStyled = styled.div`
  font-size: 120%;
`

const CloseMenuStyled = styled.div`
  cursor: pointer;
  margin-top: 20px;
`

const OpenMenuStyled = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`

const HeaderStyled = styled.div`
  background-color: burlywood;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default Header
