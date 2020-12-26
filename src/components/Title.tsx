import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const { colors } = require('../../tailwind');

interface Props {
  children: JSX.Element | string;
}

const H1 = styled.h1`
  ${tw`font-roboto`}
  color: ${colors.black};
  font-size: 2.5rem;
`;

const Title: FunctionComponent<Props> = ({ children }) => <H1>{children}</H1>;

export { Title };
