import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

interface IProps {
  page: string;
  content: string;
}

const StyledLink = styled((props) => <GatsbyLink {...props} />)`
  color: black;
  text-decoration: none;
  padding-right: 2.5rem;
`;

const Link = ({ page, content }: IProps): JSX.Element => (
  <StyledLink to={page}>{content}</StyledLink>
);

export default Link;
