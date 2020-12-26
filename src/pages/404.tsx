import { FunctionComponent } from 'react'

import { Layout, SEO, Title, Text } from '../components'

const NotFoundPage: FunctionComponent = () => (
  <Layout>
    <SEO title="404 | Not found" />
    <Title>Not found</Title>
    <Text>Sorry bro!</Text>
  </Layout>
)

export default NotFoundPage
