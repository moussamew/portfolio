import React, { FunctionComponent } from 'react'

import { Layout, SEO, Wrapper } from '../../components'

import Welcome from './Welcome'
import Projects from './Projects'

const title = 'Moussa Iskounene | Software Engineer 👋'

const Home: FunctionComponent = () => (
  <Layout>
    <SEO title={title} />
    <Wrapper>
      <Welcome />
      <Projects />
    </Wrapper>
  </Layout>
)

export default Home
