import React from 'react'
import styled from 'styled-components'
import i18next from 'i18next'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import allTheAction from '../../redux/actions'

import { themeLight, themeDark } from '../../config/theme'

const ThemeSwitch = ({ actions, t }) => {
  return (
    <Switcher>
      <Light onClick={() => actions.theme.changeTheme(themeLight)}>
        {t('versionR')}
      </Light>
      <Dark onClick={() => actions.theme.changeTheme(themeDark)}>
        {t('versionB')}
      </Dark>
    </Switcher>
  )
}

const Switcher = styled.button``

const Light = styled.span`
  font-size: 90%;
  margin: 5% 2%;
  padding: 3px 20px 6px 20px;
  color: white;
  background-color: #ee5253;
  border-radius: 20px;
  border: 1px solid black;
`

const Dark = styled.button`
  font-size: 90%;
  margin: 5% 2%;
  padding: 3px 20px 6px 20px;
  color: white;
  background-color: #3498db;
  border-radius: 20px;
  border: 1px solid black;
`

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      theme: bindActionCreators(allTheAction.theme, dispatch)
    }
  }
}
export default withTranslation()(connect(null, mapDispatchToProps)(ThemeSwitch))
