import { Fragment, FunctionComponent } from 'react'

import GlobalStyle from '../assets/styles/globalStyle'

import { SEO, Wrapper, Header } from '.'

interface Props {
  children: JSX.Element | JSX.Element[]
  title?: string
  description?: string
  image?: string
}

const Layout: FunctionComponent<Props> = ({
  children,
  title,
  description,
  image,
}) => (
  <Fragment>
    <SEO title={title} description={description} image={image} />
    <Wrapper>
      <Header />
      <main>{children}</main>
    </Wrapper>
    <GlobalStyle />
  </Fragment>
)

export { Layout }
