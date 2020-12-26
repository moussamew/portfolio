import { FunctionComponent, ReactNode } from 'react'
import tw, { styled } from 'twin.macro'

interface Props {
  children: ReactNode
}

const StyledText = styled.p`
  ${tw`mt-2`}
`

const Text: FunctionComponent<Props> = ({ children }) => (
  <StyledText>{children}</StyledText>
)

export { Text }
