import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Register } from './components/pages/Register'
import { Resident } from './components/pages/Resident'
import { Administrator } from './components/pages/Administrator'
import { Page } from './App'
import Container from './components/common/Container'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Register regResidentBtnText={'Cadastro de morador'} regAdminBtnText={'Cadastro de administrador'} />
  },
  {
    path: '/morador',
    element: <Resident title={'Cadastro do Morador'} />
  },
  {
    path: '/administrador',
    element: <Administrator />
  }
])

function App() {

  return (
    <Page>
      <Container>
        <RouterProvider router={router} />
      </Container>
    </Page>
  )
}

export default App
