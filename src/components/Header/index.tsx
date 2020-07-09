import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Link from '../../atomic/Link';
import { headerLinks } from '../../data/links';
import Wrapper from '../../atomic/Wrapper';
import { H2, H1 } from '../../atomic/Heading';
import Logo from '../../assets/images/favicon.png';
import Contact from './Contact';

const Container = styled.header`
  ${tw`flex justify-between`};
  margin-top: 80px;
`;

const Flex = styled.div`
  ${tw`flex`}
`;

const Image = styled.img`
  ${tw`h-4 m-auto mr-1`}
  margin-top: 1rem;
`;

const NavLinks = styled.div`
  ${tw`flex relative my-auto`}
`;

const Header = (): JSX.Element => (
  <Wrapper>
    <Container>
      <Flex>
        <Image src={Logo} />
        <H1>Moussa Iskounene</H1>
      </Flex>
      <NavLinks>
        {headerLinks.map((link) => (
          <H2 key={link.id}>
            <Link page={link.page} content={link.title} />
          </H2>
        ))}
        <Contact />
      </NavLinks>
    </Container>
  </Wrapper>
);

export default Header;
