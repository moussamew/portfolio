import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import tw, { styled } from 'twin.macro'

import LanguageIcon from '../assets/images/language.svg'
import { Language } from '../i18n'

import { Text } from '.'

const SwitchLanguage = styled.button`
  ${tw`bg-transparent flex items-center
  hover:text-blueDark mt-2`}
`

const Header: FunctionComponent = () => {
  const { i18n, t } = useTranslation()

  const changeCurrentLanguage = () => {
    i18n.changeLanguage(
      i18n.language === Language.EN ? Language.FR : Language.EN,
    )
  }

  return (
    <header>
      <SwitchLanguage type="button" onClick={changeCurrentLanguage}>
        <LanguageIcon fill="currentColor" tw="mb-1 mr-1" />
        <Text>{t('header.language')}</Text>
      </SwitchLanguage>
    </header>
  )
}

export { Header }
