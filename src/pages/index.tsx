import React from 'react';
import Layout from '../components/Layout';
import Metadata from '../components/Metadata';
import Wrapper from '../atomic/Wrapper';
import Welcome from './index/Welcome';
import Projects from './index/Projects';

function IndexPage(): JSX.Element {
  const title = `Moussa Iskounene`;

  return (
    <Layout>
      <Metadata title={title} />
      <Wrapper>
        <Welcome />
        <Projects />
      </Wrapper>
    </Layout>
  );
}

export default IndexPage;
