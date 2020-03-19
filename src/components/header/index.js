import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Header = () => {
  const [menu, setMenu] = useState('hidden')

  return (
    <section>
      <Menu animate={menu} variants={menuVariants}>
        <ContentMenuStyled>
          <br />
          <LinkStyled>
            <Link to={`/`}>Pokédex</Link>
          </LinkStyled>
          <br />
          <LinkStyled>
            <Link to={`/team`}>My team</Link>
          </LinkStyled>
          <br />
          <LinkStyled>
            <Link to={`/history`}>My battle history</Link>
          </LinkStyled>
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
        <UserIconStyled>
          <Link to={`/login`}>
            <FontAwesomeIcon icon={faUser} size='2x' />
          </Link>
        </UserIconStyled>
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
  min-height: 100%;
  position: absolute;
  top: 0;
  z-index: 2;
  background-color: #ee5253;
  display: flex;
  flex: 1;
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

const LinkStyled = styled.div`
  margin: 1% 0;
`

const CloseMenuStyled = styled.div`
  cursor: pointer;
  font-size: 70%;
  margin-top: 40%;
`

const OpenMenuStyled = styled.div`
  cursor: pointer;
  position: absolute;
  right: 10px;
  font-size: 70%;
`

const UserIconStyled = styled.div`
  cursor: pointer;
  position: absolute;
  left: 10px;
  font-size: 70%;
`

const HeaderStyled = styled.div`
  background-color: #ee5253;
  color: white;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
`

export default Header
