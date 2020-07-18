import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { H1 } from '../../atomic/Heading';
import { IRepository } from '../../types/node';

const Section = styled.section`
  ${tw`flex flex-col`};
`;

const Row = styled.a`
  ${tw`py-1 cursor-pointer flex`}
  border-bottom: 1px solid rgb(236, 236, 236);
  &:hover {
    background: rgb(236, 236, 236);
  }
`;

const Emoji = styled.span`
  ${tw`mx-1`}
`;

const ProjectName = styled.span`
  ${tw`mx-1`}
`;

const ProjectDescription = styled.span`
  ${tw`mx-1`}
  font-size: 1.7rem;
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

const Projects = (): JSX.Element => {
  const {
    githubRepos: { repos },
  }: { githubRepos: { repos: IRepository[] } } = useStaticQuery(query);

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
      {repositories.map(
        ({ id, name, description, htmlUrl, emoji }: IRepository) => (
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
    </Section>
  );
};

export default Projects;
