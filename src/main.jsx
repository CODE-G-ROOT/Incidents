import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './components/Bienvenidos.jsx'

//? NEXT UI
import {NextUIProvider} from "@nextui-org/system";

// import { Oficial_Login } from './components/Oficial_Login';
import { Menu_Incidences } from './components/List';
// import { Menu_Complete } from './components/List';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Menu_Incidences />
    </NextUIProvider>
  </React.StrictMode>,
)
