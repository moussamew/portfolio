import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { H1 } from '../../atomic/Heading';
import Text from '../../atomic/Text';

const Container = styled.div`
  ${tw`mt-10`}
`;

const TextContent = styled.div`
  ${tw`w-1/2`}
`;

const Welcome = (): JSX.Element => (
  <Container>
    <H1 noMargin>Moussa,</H1>
    <H1 noMargin>Software Developer.</H1>
    <TextContent>
      <Text>
        Salut moi c&apos;est Moussa, développeur d’applications web et mobile.
        Je travaille principalement sur <strong>React</strong> et{' '}
        <strong>React Native</strong>.
      </Text>
      <Text>
        Vous trouverez sur ce portfolio l&apos;ensemble de mes projets, quelques
        articles autour de l&apos;écosystème <strong>JavaScript</strong> ainsi
        que des bonnes pratiques de développement.
      </Text>
    </TextContent>
  </Container>
);

export default Welcome;
