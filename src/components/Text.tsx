import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

interface Props {
  children: ReactNode;
}

const StyledText = styled.p`
  ${tw`font-openSans mt-2`}
`;

const Text: FunctionComponent<Props> = ({ children }) => (
  <StyledText>{children}</StyledText>
);

export { Text };
