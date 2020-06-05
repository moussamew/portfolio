import React from 'react';
import styled from 'styled-components';

interface IProps {
  children: JSX.Element;
}

const Heading = styled.h1<{ fontSize: number }>`
  font-size: ${(props) => `${props.fontSize}rem`};
`;

const H1 = ({ children }: IProps) => <Heading fontSize={3}>{children}</Heading>;

const H2 = ({ children }: IProps) => (
  <Heading fontSize={2.4}>{children}</Heading>
);

const H3 = ({ children }: IProps) => (
  <Heading fontSize={1.8}>{children}</Heading>
);

export { H1, H2, H3 };
