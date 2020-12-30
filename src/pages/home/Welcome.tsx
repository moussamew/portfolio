import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import tw, { styled } from 'twin.macro'

import { Title, Text } from '../../components'

const Section = styled.section`
  ${tw`flex lg:flex-row flex-col-reverse`}
`

const Introduction = styled.div`
  ${tw`lg:w-1/2 w-full`}
`

const ImageWrapper = styled.div`
  ${tw`lg:flex lg:w-1/2 justify-center mt-2`}

  @media (min-width: 640px) {
    .gatsby-image-wrapper { {
      width: 350px;
    }
  }
`

const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "moussa.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Welcome: FunctionComponent = () => {
  const { placeholderImage } = useStaticQuery(query)
  const { t } = useTranslation()

  return (
    <Section>
      <Introduction>
        <Title>{t('home.welcome.title')}</Title>
        <Text>{t('home.welcome.description1')}</Text>
        <Text>{t('home.welcome.description2')}</Text>
      </Introduction>
      <ImageWrapper>
        <Img fluid={placeholderImage.childImageSharp.fluid} />
      </ImageWrapper>
    </Section>
  )
}

export default Welcome
