import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';

interface IProps {
  page: string;
  content: string;
}

const StyledLink = styled((props) => <GatsbyLink {...props} />)`
  ${tw`font-roboto text-black pr-2`};
  text-decoration: none;
`;

const Link = ({ page, content }: IProps): JSX.Element => (
  <StyledLink to={page}>{content}</StyledLink>
);

export default Link;
