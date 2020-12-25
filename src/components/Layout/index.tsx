import React, { Fragment, FunctionComponent } from 'react';
import GlobalStyle from '../../assets/styles/globalStyle';
import '../../assets/styles/fonts.css';

interface Props {
  children: JSX.Element[];
}

const Layout: FunctionComponent<Props> = ({ children }) => (
  <Fragment>
    <main>{children}</main>
    <GlobalStyle />
  </Fragment>
);

export default Layout;
