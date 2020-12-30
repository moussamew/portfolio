import { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'

import { useSiteMetadata } from '../hooks'

interface Props {
  title?: string
  description?: string
  image?: string
}

const SEO: FunctionComponent<Props> = ({ title, description, image }) => {
  const {
    defaultTitle,
    defaultDescription,
    defaultImage,
    siteUrl,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
  }

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}

export { SEO }
