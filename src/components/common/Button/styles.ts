import styled from '@emotion/styled'
import { ContentTypes } from './types'

export const bgButton = (p: { bgColor: string }) => `${p.bgColor}`
export const textColorButton = (p: { textColor: string }) => `${p.textColor}`

export const Content = styled.div<ContentTypes>`
  background-color: ${bgButton};
  color: ${textColorButton};
  padding: 1rem;
  border-radius: 0.5rem;
  width: 15rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  cursor: pointer;
  text-decoration: none;
`

export const Text = styled.span`
  font-size: 1.3rem;
`
