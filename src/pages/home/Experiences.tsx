import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { Subtitle } from '../../components'

const Experiences: FunctionComponent = () => {
  const { t } = useTranslation()
  return (
    <section>
      <Subtitle>{t('home.experiences.subtitle')}</Subtitle>
    </section>
  )
}

export default Experiences
