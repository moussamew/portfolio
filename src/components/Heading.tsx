import { FunctionComponent } from 'react'
import tw, { styled } from 'twin.macro'

interface Props {
  children: JSX.Element | string
}

const StyledPageTitle = styled.h1`
  ${tw`font-roboto text-black 
  lg:text-8xl text-6xl`}
`

const StyledSectionTitle = styled.h2`
  ${tw`font-roboto text-black
  lg:text-7xl text-5xl`}
`

const StyledSubtitle = styled.h3`
  ${tw`font-roboto text-black m-0 mb-1
  lg:text-4xl text-3xl`}
`

const PageTitle: FunctionComponent<Props> = ({ children }) => (
  <StyledPageTitle>{children}</StyledPageTitle>
)

const SectionTitle: FunctionComponent<Props> = ({ children }) => (
  <StyledSectionTitle>{children}</StyledSectionTitle>
)

const Subtitle: FunctionComponent<Props> = ({ children }) => (
  <StyledSubtitle>{children}</StyledSubtitle>
)

export { PageTitle, SectionTitle, Subtitle }
