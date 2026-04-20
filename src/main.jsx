import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiservice } from './services/api.js';

createRoot(document.getElementById('root')).render(
  // <StrictMode>=======
  <ApiProvider api={apiservice}>
     <App />
  </ApiProvider>
  //  {/* </StrictMode> */}
)
