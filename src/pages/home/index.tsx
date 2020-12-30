import { FunctionComponent } from 'react'

import { Layout } from '../../components'

import Welcome from './Welcome'
import Experiences from './Experiences'

const Home: FunctionComponent = () => (
  <Layout>
    <Welcome />
    <Experiences />
  </Layout>
)

export default Home
