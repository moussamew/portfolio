import React from 'react';

import Layout from '../components/Layout';
import Metadata from '../components/Metadata';
import Image from '../components/Image';

function IndexPage(): JSX.Element {
  const title = 'Moussa Iskounene | Développeur Web';

  return (
    <Layout>
      <Metadata title={title} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px` }}>
        <Image />
      </div>
    </Layout>
  );
}

export default IndexPage;
