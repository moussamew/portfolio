import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

interface IProps {
  children: JSX.Element | JSX.Element[];
}

const WidthContent = styled.div`
  ${tw`m-auto`};
  max-width: 1180px;
`;

const Wrapper = ({ children }: IProps): JSX.Element => (
  <WidthContent>{children}</WidthContent>
);

export default Wrapper;
