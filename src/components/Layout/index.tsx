/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from 'react';
import Header from '../Header';

interface IProps {
  siteTitle: string;
  children: JSX.Element[];
}

function Layout({ siteTitle, children }: IProps): JSX.Element {
  return (
    <Fragment>
      <Header siteTitle={siteTitle} />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </Fragment>
  );
}

export default Layout;
