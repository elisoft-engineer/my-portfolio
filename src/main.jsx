import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './context/ThemeContext.jsx'
import { DialogProvider } from "./context/DialogContext.jsx";
import Dialog from "./components/Dialog.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <DialogProvider>
        <App />
        <Dialog />
      </DialogProvider>
    </ThemeProvider>
  </StrictMode>,
)
