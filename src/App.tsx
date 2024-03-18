import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
/* import Home from './components/pages/HomePage'
import AnotherPage from './components/pages/AnotherPage'
import ThirdPage from './components/pages/ThirdPage' */
import { Register } from './components/pages/Register'
import { Resident } from './components/pages/Resident'
import { Administrator } from './components/pages/Administrator'

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
    <>
      <div>
        <h1>Hello World!</h1>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
