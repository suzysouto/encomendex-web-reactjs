import { Link } from 'react-router-dom'
import { Buttons, Content, Form, Input, Title, ButtonResident, ButtonResidentText } from './styles'
import { ResidentTypes } from './types'
import { Button } from '../../common/Button'
import Container from '../../common/Container'

export const Resident = ({ title }: ResidentTypes) => {
  return (
    <Content>
      <Container>
        <Title>{title}</Title>
        <Form>
          <Input placeholder='Nome ...' type='text' />
          <Input placeholder='Email ...' type='text' />
          <Input placeholder='Condomínio ...' type='text' />
          <Input placeholder='Bloco ...' type='text' />
          <Input placeholder='Apartamento ...' type='text' />
          <ButtonResident>
            <ButtonResidentText>Cadastrar</ButtonResidentText>
          </ButtonResident>
        </Form>
        <Buttons>
          <Link to={'/'}>
            <Button buttonText={'Home'} bgButton={'#2D0C57'} textButtonColor={'#FFF'} />
          </Link>
          <Link to={'/administrador'}>
            <Button buttonText={'Cadastro do Administrador'} bgButton={'#DFA800'} textButtonColor={'#FFF'} />
          </Link>
        </Buttons>
      </Container>
    </Content>

  )
}