import React, { FunctionComponent } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { H1 } from '../../atomic/Heading';
import { Repository } from '../../types/node';

const { colors } = require('../../../tailwind');

const Section = styled.section`
  ${tw`flex flex-col`};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50px 20% auto;
`;

const Row = styled.a`
  ${tw`py-1 cursor-pointer`}
  display: contents;

  &:hover span {
    background: ${colors.greyLight};
  }
`;

const Emoji = styled.span`
  ${tw`py-1 pl-1`}
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`;

const ProjectName = styled.span`
  ${tw`py-1`}
`;

const ProjectDescription = styled.span`
  ${tw`py-1`}
  font-size: 1.7rem;
  color: ${colors.grey};
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`;

const query = graphql`
  query {
    githubRepos {
      repos {
        name
        description
        htmlUrl: html_url
      }
    }
  }
`;

const Projects: FunctionComponent = () => {
  const {
    githubRepos: { repos },
  }: { githubRepos: { repos: Repository[] } } = useStaticQuery(query);

  const repositories = repos.map((repository) => {
    const { description } = repository;

    return {
      ...repository,
      description: description.slice(0, -3),
      emoji: description.slice(-3),
    };
  });

  return (
    <Section>
      <H1>Quelques projets</H1>
      <Grid>
        {repositories.map(
          ({ id, name, description, htmlUrl, emoji }: Repository) => (
            <Row
              key={`${id}${name}`}
              href={htmlUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <Emoji>{emoji}</Emoji>

              <ProjectName>
                <strong>{name} </strong>
              </ProjectName>

              <ProjectDescription>{description}</ProjectDescription>
            </Row>
          ),
        )}
      </Grid>
    </Section>
  );
};

export default Projects;
