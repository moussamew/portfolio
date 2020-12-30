import { useStaticQuery, graphql } from 'gatsby'
import { FunctionComponent } from 'react'
import tw, { styled } from 'twin.macro'

import { Subtitle } from '../../components'
import { Repository } from '../../types/node'

const Section = styled.section`
  ${tw`flex flex-col`}
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50px 20% auto;
`

const Row = styled.a`
  ${tw`py-1 cursor-pointer`}

  display: contents;

  &:hover span {
    ${tw`bg-greyLight`}
  }
`

const Emoji = styled.span`
  ${tw`py-1 pl-1`}

  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
`

const ProjectName = styled.span`
  ${tw`py-1`}
`

const ProjectDescription = styled.span`
  ${tw`py-1 text-grey`}

  font-size: 1.7rem;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
`

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
`

const Projects: FunctionComponent = () => {
  const {
    githubRepos: { repos },
  }: { githubRepos: { repos: Repository[] } } = useStaticQuery(query)

  const repositories = repos.map((repository) => {
    const { description } = repository

    return {
      ...repository,
      description: description.slice(0, -3),
      emoji: description.slice(-3),
    }
  })

  return (
    <Section>
      <Subtitle>Quelques projets</Subtitle>
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
  )
}

export default Projects
