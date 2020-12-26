import { FunctionComponent } from 'react'
import tw, { styled } from 'twin.macro'

interface Props {
  children: JSX.Element | string
}

const StyledTitle = styled.h1`
  ${tw`font-roboto text-black`}
  font-size: 5rem;
`

const StyledSubtitle = styled.h2`
  ${tw`font-roboto text-black`}
  font-size: 3rem;
`

const Title: FunctionComponent<Props> = ({ children }) => (
  <StyledTitle>{children}</StyledTitle>
)

const Subtitle: FunctionComponent<Props> = ({ children }) => (
  <StyledSubtitle>{children}</StyledSubtitle>
)

export { Title, Subtitle }
