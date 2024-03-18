import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './components/pages/HomePage'
import AnotherPage from './components/pages/AnotherPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/outra',
    element: <AnotherPage />
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
