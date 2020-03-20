import React from 'react'
import styled from 'styled-components'
import i18n from 'i18n'
import { withTranslation } from 'react-i18next'

import Wrapper from '../wrapper'

const History = ({ t }) => {
  return (
    <Wrapper>
      <TitlePage>{t('battlehistory')}</TitlePage>
    </Wrapper>
  )
}

const TitlePage = styled.h2`
  text-align: center;
  text-transform: uppercase;
`

export default withTranslation()(History)
