import { FunctionComponent } from 'react'
import { Trans } from 'react-i18next'
import tw, { styled } from 'twin.macro'

interface TextProps {
  children: string
}

interface TextWithTagsProps {
  children: (string | JSX.Element)[] | JSX.Element
  i18nKey: string
}

const StyledText = styled.p`
  ${tw`mb-1 text-justify whitespace-pre-line`}
`

const Text: FunctionComponent<TextProps> = ({ children }) => (
  <StyledText>{children}</StyledText>
)

const TextWithTags: FunctionComponent<TextWithTagsProps> = ({
  i18nKey,
  children,
}) => (
  <StyledText>
    <Trans i18nKey={i18nKey}>{children}</Trans>
  </StyledText>
)

export { Text, TextWithTags }
