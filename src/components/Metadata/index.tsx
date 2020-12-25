import React, { FunctionComponent } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { Meta } from '../../types/data';

interface Props {
  title: string;
  meta?: Meta[];
  lang?: string;
  description?: string;
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

const Metadata: FunctionComponent<Props> = ({
  title,
  lang = '',
  meta = [],
  description,
}) => {
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
};

export default Metadata;
