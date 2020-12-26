import { FunctionComponent } from 'react'
import tw, { styled } from 'twin.macro'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const WidthContent = styled.div`
  ${tw`m-auto`}
  max-width: 1180px;
`

const Wrapper: FunctionComponent<Props> = ({ children }) => (
  <WidthContent>{children}</WidthContent>
)

export { Wrapper }
