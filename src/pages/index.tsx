import React from 'react';
import Layout from '../components/Layout';
import Metadata from '../components/Metadata';
import Wrapper from '../atomic/Wrapper';
import Welcome from './index/Welcome';

function IndexPage(): JSX.Element {
  const title = `Moussa Iskounene`;

  return (
    <Layout>
      <Metadata title={title} />
      <Wrapper>
        <Welcome />
      </Wrapper>
    </Layout>
  );
}

export default IndexPage;
