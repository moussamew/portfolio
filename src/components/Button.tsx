import { FunctionComponent } from 'react'
import tw, { styled } from 'twin.macro'

const StyledButton = styled.button`
  ${tw`m-auto shadow-md px-2 bg-blue text-white`}

  transition: all 0.5s cubic-bezier(0.31, -0.105, 0.43, 1.4), height 0.25s ease;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-radius: 5px;

  &:hover {
    ${tw`bg-blueDark`}
  }
`

const Flex = styled.div`
  ${tw`flex flex-row`}
`

const Span = styled.span`
  ${tw`text-center w-full`}

  line-height: inherit;
  transition: all 0.25s cubic-bezier(0.31, -0.105, 0.43, 1.4);
`

const Image = styled.img`
  ${tw`ml-1`}

  height: 22px;
`

interface Props {
  action: () => void
  text: string
  icon?: string
}

const Button: FunctionComponent<Props> = ({ action, text, icon }) => (
  <StyledButton onClick={action}>
    <Flex>
      <Span>{text}</Span>
      {icon && <Image src={icon} />}
    </Flex>
  </StyledButton>
)

export { Button }
