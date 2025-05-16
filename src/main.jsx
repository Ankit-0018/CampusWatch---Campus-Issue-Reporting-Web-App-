import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import { UserProvider } from './context/UserContext.jsx'
import {IssueProvider} from './context/IssueContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
<IssueProvider>
  
    <Toaster position='top-10 right-10'/>
    <App />
</IssueProvider>
    </UserProvider>
  </StrictMode>,
)
