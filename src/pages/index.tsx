import React, { FunctionComponent } from 'react';

import { Layout, SEO, Wrapper } from '../components';

import Welcome from './index/Welcome';
import Projects from './index/Projects';

const title = 'Moussa Iskounene | Software Engineer 👋';

const IndexPage: FunctionComponent = () => (
  <Layout>
    <SEO title={title} />
    <Wrapper>
      <Welcome />
      <Projects />
    </Wrapper>
  </Layout>
);

export default IndexPage;
