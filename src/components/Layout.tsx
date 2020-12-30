import { FunctionComponent } from 'react'
import { I18nextProvider } from 'react-i18next'
import GlobalStyle from '../assets/styles/globalStyle'
import { SEO, Wrapper, Header } from '.'
import i18n from '../i18n'

interface Props {
  children: JSX.Element[]
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
  <I18nextProvider i18n={i18n}>
    <SEO title={title} description={description} image={image} />
    <Wrapper>
      <Header />
      <main>{children}</main>
    </Wrapper>
    <GlobalStyle />
  </I18nextProvider>
)

export { Layout }
