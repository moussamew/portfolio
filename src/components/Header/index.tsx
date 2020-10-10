import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Link from '../../atomic/Link';
import { headerLinks } from '../../data/links';
import Wrapper from '../../atomic/Wrapper';
import { H2, H1 } from '../../atomic/Heading';
import Button from '../../atomic/Button';

const Container = styled.nav`
  ${tw`flex justify-between`};
  margin-top: 80px;
`;

const Flex = styled.div`
  ${tw`flex`}
`;

const Emoji = styled.div`
  ${tw`m-auto`};
  margin-bottom: 1.8rem;

  span {
    margin: auto;
    font-size: 4rem;
    padding-right: 1rem;
  }
`;

const NavLinks = styled.div`
  ${tw`flex relative my-auto`}
`;

const Header = (): JSX.Element => {
  /**
   * @description Contact Moussa's mail address
   */
  const onContact = () => {
    window.location.href = 'mailto:moussa.iskounene@gmail.com';
  };

  return (
    <Wrapper>
      <Container>
        <Flex>
          <Emoji>
            <span role="img" aria-label="popcorn">
              🍿
            </span>
          </Emoji>
          <H1>Moussa Iskounene</H1>
        </Flex>
        <NavLinks>
          {headerLinks.map((link) => (
            <H2 key={link.title}>
              <Link page={link.page} content={link.title} />
            </H2>
          ))}
          <Button action={onContact} />
        </NavLinks>
      </Container>
    </Wrapper>
  );
};

export default Header;
