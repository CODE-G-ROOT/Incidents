//? React
import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

//? NEXT UI
import { NextUIProvider } from "@nextui-org/system";


//? Router Dep
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// ? Routers Directions
import { Navbar_Admin, Navbar_User, Menu_Users } from './components/Navbar';
import { Oficial_Login } from './components/Oficial_Login';
import { Admin_Page, User_Page } from './components/Home';
import { Buttons_All, Ocult, Buttons_Equipment, Buttons_Location, Input_Reports, Inputs_Users } from './components/Agregates';
import { Error_Page_404 } from './components/Errors_';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Oficial_Login />,
    errorElement: <Error_Page_404 />,
  },
  {
    path: "incidences",
    element: <Admin_Page />,
    errorElement: <Error_Page_404 />,
    children: [
      {
        path: "all",
        element: <Buttons_All />,
        errorElement: <Error_Page_404 />,
      },
      {
        path: "equipment",
        element: <Buttons_Equipment />,
        errorElement: <Error_Page_404 />,
      },
      {
        path: "location",
        element: <Buttons_Location />,
        errorElement: <Error_Page_404 />,
      },
      {
        path: "reports",
        element: <Input_Reports />,
        errorElement: <Error_Page_404 />,
      },
      {
        path: "all_user",
        errorElement: <Ocult />,
      },
      {
        path: "id_user",
        element: <Inputs_Users />,
        errorElement: <Inputs_Users />,
      },
      {
        path: "rol_user",
        element: <Inputs_Users />,
        errorElement: <Inputs_Users />,
      },
      {
        path: "name_user",
        element: <Input_Reports />,
        errorElement: <Inputs_Users />,
      },
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
