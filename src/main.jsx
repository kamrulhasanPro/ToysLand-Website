import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { MainRouter } from './Routes/MainRouter'
import AuthProvider from './Providers/AuthProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRouter}/>
    </AuthProvider>
  </StrictMode>,
)
