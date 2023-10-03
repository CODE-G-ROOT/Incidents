//? React
import React from 'react'
import ReactDOM from 'react-dom/client'

//? NEXT UI
import {NextUIProvider} from "@nextui-org/system";


//? Router Dep
import { createBrowserRouter, RouterProvider} from "react-router-dom";


// ? Routers Directions
import { Navbar_Admin, Navbar_User } from './components/Navbar';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Navbar_User/>
    </NextUIProvider>
  </React.StrictMode>,
)
