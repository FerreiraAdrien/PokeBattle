import React from 'react'
import styled from 'styled-components'
import i18next from 'i18next'
import { withTranslation } from 'react-i18next'

const Footer = ({ t }) => {
  return (
    <section>
      <FooterStyled>
        <FooterMentions>{t('footer')}</FooterMentions>
        <FooterLanguage>
          <FooterLanguageText onClick={() => i18next.changeLanguage('fr')}>
            FR
          </FooterLanguageText>
          <FooterLanguageText onClick={() => i18next.changeLanguage('en')}>
            EN
          </FooterLanguageText>
        </FooterLanguage>
      </FooterStyled>
    </section>
  )
}

const FooterStyled = styled.div`
  background-color: ${props => props.theme.main};
  color: white;
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`

const FooterMentions = styled.div`
  margin-bottom: 12px;
  font-size: 13px;
  width: 80%;
  text-align: center;
`

const FooterLanguage = styled.div``

const FooterLanguageText = styled.span`
  padding: 0 5px;
  text-decoration: underline;
  font-weight: bold;
`

export default withTranslation()(Footer)
