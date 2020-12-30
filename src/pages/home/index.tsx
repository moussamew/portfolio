import { FunctionComponent } from 'react'

import { Layout } from '../../components'

import Experiences from './Experiences'
import Welcome from './Welcome'

const Home: FunctionComponent = () => (
  <Layout>
    <Welcome />
    <Experiences />
  </Layout>
)

export default Home
