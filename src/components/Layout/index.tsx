/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from 'react';
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
    </Fragment>
  );
}

export default Layout;
