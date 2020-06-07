import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Link from '../../atomic/Link';
import { headerLinks } from '../../data/links';
import Wrapper from '../../atomic/Wrapper';
import { H2 } from '../../atomic/Heading';

const Container = styled.header`
  ${tw`flex`};
  margin-top: 30px;
`;

function Header(): JSX.Element {
  return (
    <Wrapper>
      <Container>
        {headerLinks.map((link) => (
          <H2 key={link.id}>
            <Link page={link.page} content={link.title} />
          </H2>
        ))}
      </Container>
    </Wrapper>
  );
}

export default Header;
