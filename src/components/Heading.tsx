import { FunctionComponent } from 'react'
import tw, { styled } from 'twin.macro'

interface Props {
  children: JSX.Element | string
}

const StyledTitle = styled.h1`
  ${tw`font-roboto text-black 
  lg:text-8xl text-6xl`}
`

const StyledSubtitle = styled.h2`
  ${tw`font-roboto text-black
  lg:text-6xl text-5xl`}
`

const Title: FunctionComponent<Props> = ({ children }) => (
  <StyledTitle>{children}</StyledTitle>
)

const Subtitle: FunctionComponent<Props> = ({ children }) => (
  <StyledSubtitle>{children}</StyledSubtitle>
)

export { Title, Subtitle }
