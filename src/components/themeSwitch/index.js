import React from 'react'
import styled from 'styled-components'
import i18next from 'i18next'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import allTheAction from '../../redux/actions'

import { themeLight, themeDark } from '../../config/theme'

const ThemeSwitch = ({ actions }) => {
  return (
    <Switcher>
      <Light onClick={() => actions.theme.changeTheme(themeLight)}>
        Theme Light
      </Light>
      <Dark onClick={() => actions.theme.changeTheme(themeDark)}>
        Theme Dark
      </Dark>
    </Switcher>
  )
}

const Switcher = styled.button`
  background-color: ${props => props.theme.primary};
`

const Light = styled.button``

const Dark = styled.button``

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      theme: bindActionCreators(allTheAction.theme, dispatch)
    }
  }
}
export default withTranslation()(connect(null, mapDispatchToProps)(ThemeSwitch))
