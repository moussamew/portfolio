import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import Metadata from '../components/Metadata';
import Wrapper from '../atomic/Wrapper';
import Welcome from './index/Welcome';
import Projects from './index/Projects';

const title = 'Moussa Iskounene | Software Engineer 👋';

const IndexPage: FunctionComponent = () => (
  <Layout>
    <Metadata title={title} />
    <Wrapper>
      <Welcome />
      <Projects />
    </Wrapper>
  </Layout>
);

export default IndexPage;
