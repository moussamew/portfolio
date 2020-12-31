import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { Fragment, FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import tw, { styled } from 'twin.macro'

import { SectionTitle, Subtitle, Text, TextWithTags } from '../../components'

interface QueryImages {
  images: {
    nodes: {
      id: string
      name: string
      childImageSharp: {
        fluid: {
          aspectRatio: number
          base64: string
          sizes: string
          src: string
          srcSet: string
        }
      }
    }[]
  }
}

const Section = styled.section`
  ${tw`md:flex md:mb-5 mb-2`}
`

const ExperienceDescription = styled.div`
  ${tw`md:w-2/3 w-full mt-3 md:mt-0`}
`

const ImageWrapper = styled.div`
  ${tw`m-auto md:w-1/5 md:ml-0 md:mr-10 sm:w-2/3 w-full`}
`

const query = graphql`
  query {
    images: allFile(filter: { relativeDirectory: { eq: "experiences" } }) {
      nodes {
        id
        name
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Experiences: FunctionComponent = () => {
  const { images } = useStaticQuery<QueryImages>(query)
  const { t } = useTranslation()

  return (
    <Fragment>
      <SectionTitle>{t('home.experiences.sectionTitle')}</SectionTitle>
      {images.nodes.map(({ id, name, childImageSharp }) => (
        <Section key={id}>
          <ImageWrapper>
            <Img fluid={childImageSharp.fluid} />
          </ImageWrapper>
          <ExperienceDescription>
            <Subtitle>{t(`home.experiences.${name}.title`)}</Subtitle>
            <TextWithTags i18nKey={`home.experiences.${name}.date`}>
              <i>septembre 2019 - septembre 2020</i>
            </TextWithTags>
            <Text>{t(`home.experiences.${name}.description`)}</Text>
            <Text>{t(`home.experiences.${name}.stack`)}</Text>
          </ExperienceDescription>
        </Section>
      ))}
    </Fragment>
  )
}

export default Experiences
