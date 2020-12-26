import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';

const { colors } = require('../../tailwind');

const StyledButton = styled.button`
  ${tw`m-auto shadow-md pointer px-2`};

  transition: all 0.5s cubic-bezier(0.31, -0.105, 0.43, 1.4), height 0.25s ease;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background-color: ${colors.blue};
  color: ${colors.white};
  border-radius: 5px;

  &:hover {
    background-color: ${colors.blueDark};
  }
`;

const Flex = styled.div`
  ${tw`flex flex-row`};
`;

const Span = styled.span`
  ${tw`font-roboto text-center w-full`};

  line-height: inherit;
  transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
`;

const Image = styled.img`
  ${tw`ml-1`}

  height: 22px;
`;

interface Props {
  action: () => void;
  text: string;
  icon?: string;
}

const Button: FunctionComponent<Props> = ({ action, text, icon }) => (
  <StyledButton onClick={action}>
    <Flex>
      <Span>{text}</Span>
      {icon && <Image src={icon} />}
    </Flex>
  </StyledButton>
);

export { Button };
