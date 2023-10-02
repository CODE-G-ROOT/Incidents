import React from 'react'
import ReactDOM from 'react-dom/client'

//? NEXT UI
import {NextUIProvider} from "@nextui-org/system";

// import { Oficial_Login } from './components/Oficial_Login';
import { Menu_Incidences } from './components/List';
// import { Menu_Complete } from './components/List';
import { Background_panel } from './components/Background_panel';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Background_panel/>
    </NextUIProvider>
  </React.StrictMode>,
)
