
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ConfirmPage from './pages/ConfirmPage'
import Dashboard from './pages/Dashboard'
import FormCard from './components/FormCard'


const App = () => {

  const router = createBrowserRouter([
    {path: "/" , element : <FormCard/>},
   
    {path: "/Confirm" , element : <ConfirmPage/>},
    {path: "/dashboard" , element : <Dashboard/>},
  ])
  return (
 <>
 <RouterProvider router={router}/>

 </>
  )
}

export default App
