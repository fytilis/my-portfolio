import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './ThemeContext.jsx'; // <-- IMPORT ΕΔΩ

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider> {/* <-- ΤΥΛΙΓΟΥΜΕ ΤΟ APP */}
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)