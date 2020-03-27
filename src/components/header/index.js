import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faTimes,
  faUser,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import i18next from 'i18next'
import { withTranslation } from 'react-i18next'
import ThemeSwitch from '../themeSwitch'

const Header = ({ t }) => {
  const [menu, setMenu] = useState('hidden')

  const LogOut = () => {
    localStorage.removeItem('x-access-token')
    localStorage.removeItem('username')
  }

  const LoginOrLogoutButton = () => {
    if (localStorage.getItem('username')) {
      return (
        <Link onClick={() => LogOut()} to={`/`}>
          <FontAwesomeIcon icon={faSignOutAlt} size='2x' />
        </Link>
      )
    } else {
      return (
        <Link to={`/login`}>
          <FontAwesomeIcon icon={faUser} size='2x' />
        </Link>
      )
    }
  }

  return (
    <section>
      <Menu animate={menu} variants={menuVariants}>
        <ContentMenuStyled>
          <br />
          <LinkStyled>
            <Link to={`/`}>{t('pokedex')}</Link>
          </LinkStyled>
          <br />
          <LinkStyled>
            <Link to={`/team`}>{t('myteam')}</Link>
          </LinkStyled>
          <br />
          <LinkStyled>
            <Link to={`/history`}>{t('battlehistory')}</Link>
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
          <ThemeSwitch></ThemeSwitch>
        </ContentMenuStyled>
      </Menu>

      <HeaderStyled>
        <UserIconStyled>
          <LoginOrLogoutButton></LoginOrLogoutButton>
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
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: ${props => props.theme.main};
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
  background-color: ${props => props.theme.main};
  color: white;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
`

export default withTranslation()(Header)
