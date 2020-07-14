import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { H1 } from '../../atomic/Heading';

const Section = styled.section`
  ${tw`flex`};
`;

const Projects = (): JSX.Element => (
  <Section>
    <H1>Mes projets</H1>
  </Section>
);

export default Projects;
