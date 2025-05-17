
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ConfirmPage from './pages/ConfirmPage'
import Dashboard from './pages/Dashboard'
import FormCard from './components/layout/FormCard'
import Issues from './pages/Issues'
import Profile from './pages/Profile'
import MyIssues from './pages/MyIssues'
import LostFound from './pages/LostFound'


const App = () => {

  const router = createBrowserRouter([
    {path: "/" , element : <FormCard/>},
    {path: "/confirm" , element : <ConfirmPage/>},
    {path: "/dashboard" , element : <Dashboard/>},
    {path: "/issues" , element : <Issues/>},
    {path: "/profile" , element : <Profile/>},
    {path: "/myissues" , element : <MyIssues/>},
    {path: "/lostfound" , element : <LostFound/>},
  ])
  return (
 <>
 <RouterProvider router={router}/>

 </>
  )
}

export default App
