import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import tw, { styled } from 'twin.macro'

import { PageTitle, TextWithTags } from '../../components'

const Section = styled.section`
  ${tw`flex lg:flex-row flex-col-reverse`}
`

const Introduction = styled.div`
  ${tw`lg:w-1/2 w-full`}
`

const ImageWrapper = styled.div`
  ${tw`md:w-30 w-full m-auto mt-1`}
  }
`

const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "moussa.png" }) {
      childImageSharp {
        fluid(quality: 100) {
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
        <PageTitle>{t('home.welcome.pageTitle')}</PageTitle>
        <TextWithTags i18nKey="home.welcome.description1">
          Hello, my name is Moussa, I am 24 years old and I live in Paris. I am
          currently working at <strong>CANAL+</strong> in the Front TV team as a
          <strong>Front-end Developer.</strong>
        </TextWithTags>
        <TextWithTags i18nKey="home.welcome.description2">
          In my free time, I design web and mobile applications. I mainly work
          around the <strong>JavaScript</strong> ecosystem and make most of my
          applications in <strong>TypeScript.</strong>
        </TextWithTags>
      </Introduction>
      <ImageWrapper>
        <Img fluid={placeholderImage.childImageSharp.fluid} />
      </ImageWrapper>
    </Section>
  )
}

export default Welcome
