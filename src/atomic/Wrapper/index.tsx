import React from 'react';
import styled from 'styled-components';

interface IProps {
  children: JSX.Element;
}

const WidthContent = styled.div`
  margin: 0 auto;
  max-width: 1220px;
`;

const Wrapper = ({ children }: IProps): JSX.Element => (
  <WidthContent>{children}</WidthContent>
);

export default Wrapper;
