import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import { userProvider } from './context/userContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <userProvider>

    <Toaster position='top-10 right-10'/>
    <App />
    </userProvider>
  </StrictMode>,
)
