import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { Language } from '../i18n'

const Header: FunctionComponent = () => {
  const { i18n, t } = useTranslation()

  const changeCurrentLanguage = () => {
    i18n.changeLanguage(
      i18n.language === Language.EN ? Language.FR : Language.EN,
    )
  }

  return (
    <header>
      <button type="button" onClick={changeCurrentLanguage}>
        {t('header.language')}
      </button>
    </header>
  )
}

export { Header }
