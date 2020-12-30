import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'

import { Subtitle } from '../../components'

const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "canalplus.png" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Experiences: FunctionComponent = () => {
  const { placeholderImage } = useStaticQuery(query)
  const { t } = useTranslation()

  return (
    <section>
      <Subtitle>{t('home.experiences.subtitle')}</Subtitle>
      <div>
        <Img fluid={placeholderImage.childImageSharp.fluid} />
      </div>
    </section>
  )
}

export default Experiences
