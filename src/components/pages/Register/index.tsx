import { RegisterTypes } from './types'
import { Content, Title } from './styles'
import { Link } from 'react-router-dom'
import { Button } from '../../common/Button'

export const Register = ({ regResidentBtnText, regAdminBtnText }: RegisterTypes) => {
  return (
    <Content>
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
    </Content>
  )
}