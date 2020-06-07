import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { IMetaSEO } from '../../types/data';

interface IDefaultProps {
  meta: IMetaSEO[];
  lang: string;
}

interface IProps extends IDefaultProps {
  title: string;
  description?: string;
}

function Metadata({ description, lang, meta, title }: IProps): JSX.Element {
  const { site } = useStaticQuery(query);

  const metaDescription = description || site.siteMetadata.description;

  const customMeta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={customMeta.concat(meta)}
    />
  );
}

const query = graphql`
  query {
    site {
      siteMetadata {
        description
        author
      }
    }
  }
`;

const defaultProps: IDefaultProps = {
  lang: '',
  meta: [],
};

Metadata.defaultProps = defaultProps;

export default Metadata;
