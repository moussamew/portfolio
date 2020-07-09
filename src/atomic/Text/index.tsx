import React, { ReactNode } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

interface IProps {
  children: ReactNode;
}

const StyledText = styled.p`
  ${tw`font-openSans mt-2`}
`;

const Text = ({ children }: IProps): JSX.Element => (
  <StyledText>{children}</StyledText>
);

export default Text;
