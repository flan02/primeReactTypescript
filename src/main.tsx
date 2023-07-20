//import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { axiosInterceptor } from './interceptors/axiosInterceptor.tsx'

axiosInterceptor()
//<React.StrictMode>
//</React.StrictMode>
ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
