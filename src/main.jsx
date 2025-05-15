import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>

    <Toaster position='top-10 right-10'/>
    <App />
    </UserProvider>
  </StrictMode>,
)
