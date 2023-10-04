//? React
import React from 'react'
import ReactDOM from 'react-dom/client'

//? NEXT UI
import {NextUIProvider} from "@nextui-org/system";


//? Router Dep
import { createBrowserRouter, RouterProvider} from "react-router-dom";


// ? Routers Directions
import { Navbar_Admin, Navbar_User, Menu_Users } from './components/Navbar';
import { Oficial_Login } from './components/Oficial_Login';
import { Admin_Page, User_Page } from './components/Home';
import { Button_Agregate, Prueba, Card_Example, Card } from './components/Agregates';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Card/>
    </NextUIProvider>
  </React.StrictMode>,
)
