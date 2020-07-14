import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { H1 } from '../../atomic/Heading';
import Text from '../../atomic/Text';

const Section = styled.section`
  ${tw`mt-10 flex`}
`;

const Presentation = styled.div`
  ${tw`w-1/2`}
`;

const ImageWrapper = styled.div`
  ${tw`flex justify-center w-1/2`}
  display: flex;

  .gatsby-image-wrapper {
    width: 300px;
  }
`;

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
`;

const Welcome = (): JSX.Element => {
  const { placeholderImage } = useStaticQuery(query);

  return (
    <Section>
      <Presentation>
        <H1 noMargin>Moussa,</H1>
        <H1 noMargin>Software Developer.</H1>
        <Text>
          Salut moi c&apos;est Moussa, développeur d’applications web et mobile.
          Je travaille principalement sur <strong>React</strong> et{' '}
          <strong>React Native</strong>.
        </Text>
        <Text>
          Vous trouverez sur ce portfolio l&apos;ensemble de mes projets,
          quelques articles autour de l&apos;écosystème{' '}
          <strong>JavaScript</strong> ainsi que des bonnes pratiques de
          développement.
        </Text>
      </Presentation>
      <ImageWrapper>
        <Img fluid={placeholderImage.childImageSharp.fluid} />
      </ImageWrapper>
    </Section>
  );
};

export default Welcome;
