import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Metadata from '../components/Metadata';

const SecondPage = (): JSX.Element => (
  <Layout siteTitle="2">
    <Metadata title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
