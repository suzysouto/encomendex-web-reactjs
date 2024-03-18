import { ButtonTypes } from './types'
import { Content, Text } from './styles'

export const Button = ({ buttonText, bgButton, textButtonColor }: ButtonTypes) => {
  return (
    <Content 
      bgColor={bgButton} 
      textColor={textButtonColor}
    >
      <Text>{buttonText}</Text>
    </Content>
  )
}