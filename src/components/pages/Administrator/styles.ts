import styled from '@emotion/styled'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  a {
      text-decoration: none;
    }
`

export const Title = styled.p`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: #2D0C57;
  padding-bottom: 2rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Input = styled.input`
  display: flex;
  margin-bottom: 0.5rem;
  width: 25rem;
  border-radius: 1rem;
  border: 1px solid #000;
  padding: 0.5rem 1rem;
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
`

export const ButtonAdministrator = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0BCE83;
  padding: 0.3rem 0.5rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 25rem;
  height: 3rem;
  border: none;
  margin-top: 2rem;
`

export const ButtonAdministratorText = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: white;
`
