import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CardContextProvider from './contextStore/context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardContextProvider>
    <App />

    </CardContextProvider>
  </StrictMode>,
)
