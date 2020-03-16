import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Header = () => {
  const [menu, setMenu] = useState('hidden')

  return (
    <section>
      <Menu animate={menu} variants={menuVariants}>
        <ContentMenuStyled>
          <br />
          Link
          <br />
          Link
          <br />
          Link
        </ContentMenuStyled>
        <CloseMenuStyled>
          <FontAwesomeIcon
            icon={faTimes}
            size='2x'
            onClick={() => {
              setMenu(menu === 'visible' ? 'hidden' : 'visible')
            }}
          />
        </CloseMenuStyled>
      </Menu>
      <FontAwesomeIcon
        icon={faBars}
        size='2x'
        onClick={() => {
          setMenu(menu === 'visible' ? 'hidden' : 'visible')
        }}
      />
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
`

const menuVariants = {
  visible: {
    x: 0
  },
  hidden: { x: -document.body.clientWidth }
}

const ContentMenuStyled = styled.div`
  background-color: aliceblue;
`

const CloseMenuStyled = styled.div``

export default Header
