import React, { Fragment } from 'react';
import GlobalStyle from '../../assets/styles/globalStyle';
import '../../assets/styles/fonts.css';
import Header from '../Header';
import Footer from '../Footer';

interface IProps {
  children: JSX.Element[];
}

function Layout({ children }: IProps): JSX.Element {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
      <Footer />
      <GlobalStyle />
    </Fragment>
  );
}

export default Layout;
