import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const { colors } = require('../../../tailwind');

interface IProps {
  children: JSX.Element | string;
  noMargin?: boolean;
}

const Heading = styled.h1<{ fontSize: number; noMargin?: boolean }>`
  ${tw`font-roboto`}
  color: ${colors.black};
  font-size: ${(props) => `${props.fontSize}rem`};
  margin: ${(props) => props.noMargin && `0`};
`;

const H1 = ({ children, noMargin }: IProps) => (
  <Heading fontSize={3} noMargin={noMargin}>
    {children}
  </Heading>
);

const H2 = ({ children, noMargin }: IProps) => (
  <Heading fontSize={2.4} noMargin={noMargin}>
    {children}
  </Heading>
);

const H3 = ({ children, noMargin }: IProps) => (
  <Heading fontSize={1.8} noMargin={noMargin}>
    {children}
  </Heading>
);

export { H1, H2, H3 };
