import { RegisterTypes } from './types'
import { Content, Title } from './styles'
import { Link } from 'react-router-dom'
import { Button } from '../../common/Button'
import Container from '../../common/Container'

export const Register = ({ regResidentBtnText, regAdminBtnText }: RegisterTypes) => {
  return (
    <Content>
      <Container>
        <Title>Cadastro</Title>
        <Link to={'/morador'}>
          <Button 
              buttonText={regResidentBtnText}
              bgButton={'#A259FF'} 
              textButtonColor={'#FFFFFF'} 
            />
        </Link>
        <Link to={'/administrador'}>
          <Button 
            buttonText={regAdminBtnText}
            bgButton={'#DFA800'} 
            textButtonColor={'#FFFFFF'}
          />
        </Link>
      </Container>
    </Content>
  )
}