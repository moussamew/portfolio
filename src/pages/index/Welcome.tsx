import React, { FunctionComponent } from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Title, Text } from '../../components';

const Section = styled.section`
  ${tw`mt-10 flex`};
`;

const Presentation = styled.div`
  ${tw`w-1/2`};
`;

const ImageWrapper = styled.div`
  ${tw`flex justify-center w-1/2`};
  display: flex;

  .gatsby-image-wrapper {
    width: 275px;
  }
`;

const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "moussa.png" }) {
      childImageSharp {
        fluid(maxWidth: 275) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Welcome: FunctionComponent = () => {
  const { placeholderImage } = useStaticQuery(query);

  return (
    <Section>
      <Presentation>
        <Title>Hey you! Welcome! 👋 </Title>
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
