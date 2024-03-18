import { Link } from 'react-router-dom'
import { ButtonAdministrator, ButtonAdministratorText, Buttons, Content, Form, Input, Title } from './styles'
import { Button } from '../../common/Button'

export const Administrator = () => {
  return (
    <Content>
      <Title>Cadastro do Administrador</Title>
      <Form>
        <Input placeholder='Nome ...' type='text' />
        <Input placeholder='Email ...' type='text' />
        <Input placeholder='Condomínio ...' type='text' />
        <Input placeholder='Senha ...' type='password' />
        <ButtonAdministrator>
          <ButtonAdministratorText>Cadastrar</ButtonAdministratorText>
        </ButtonAdministrator>
      </Form>
      <Buttons>
        <Link to={'/'}>
          <Button buttonText={'Home'} bgButton={'#2D0C57'} textButtonColor={'#FFF'} />
        </Link>
        <Link to={'/morador'}>
          <Button buttonText={'Cadastro do Morador'} bgButton={'#A259FF'} textButtonColor={'#FFF'} />
        </Link>
      </Buttons>
    </Content>

  )
}