import { FunctionComponent } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface Props {
  title: string
  lang?: string
  description?: string
  image?: string
}

interface SiteMetadata {
  site: {
    siteMetadata: {
      defaultTitle: string
      defaultDescription: string
      defaultImage: string
      siteUrl: string
    }
  }
}

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`

const SEO: FunctionComponent<Props> = ({
  title,
  lang = '',
  description,
  image,
}) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteMetadata>(query)

  const {
    defaultTitle,
    defaultDescription,
    defaultImage,
    siteUrl,
  } = siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
    >
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
