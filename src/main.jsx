<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';

//? styles

import './App.css'

//? Components

import { App } from './App';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <App value = {0} />
    </React.StrictMode>
);


















=======
import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './components/Bienvenidos.jsx'

import Login from './components/Log_In'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
)
>>>>>>> f3b048e (feat: :construction: Contrucción login)
