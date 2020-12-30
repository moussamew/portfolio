import { FunctionComponent } from 'react'
import { Trans } from 'react-i18next'
import tw, { styled } from 'twin.macro'

interface Props {
  value: string
}

const StyledText = styled.p`
  ${tw`mb-1 text-justify whitespace-pre-line`}
`

const Text: FunctionComponent<Props> = ({ value }) => (
  <StyledText>
    <Trans i18nKey={value} />
  </StyledText>
)

export { Text }
