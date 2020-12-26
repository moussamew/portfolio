import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const WidthContent = styled.div`
  ${tw`m-auto`};
  max-width: 1180px;
`;

const Wrapper: FunctionComponent = ({ children }) => (
  <WidthContent>{children}</WidthContent>
);

export { Wrapper };
