import { useStaticQuery, graphql } from 'gatsby'

interface SiteMetadata {
  defaultTitle: string
  defaultDescription: string
  defaultImage: string
  siteUrl: string
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

const useSiteMetadata = (): SiteMetadata => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query)

  return siteMetadata
}

export { useSiteMetadata }
