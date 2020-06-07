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
      <div>
        <main>{children}</main>
        <Footer />
      </div>
      <GlobalStyle />
    </Fragment>
  );
}

export default Layout;
