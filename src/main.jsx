//? React
import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

//? NEXT UI
import { NextUIProvider } from "@nextui-org/system";


//? Router Dep
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// ? Routers Directions
import { Navbar_Admin, Navbar_User, Menu_Users,  } from './components/Navbar';
import { Oficial_Login } from './components/Oficial_Login';
import { Admin_Page, User_Page } from './components/Home';
import { Buttons_All, Ocult, Buttons_Equipment, Buttons_Location, Input_Search } from './components/Buttons';
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
        children: [
          {
            path: "id",
            element: <Input_Search all_id={true}/>,
            errorElement: <Error_Page_404 />,
          },
          {
            path: "status",
            element: <Input_Search all_status={true} />,
            errorElement: <Error_Page_404 />,
          },
          {
            path: "category",
            element: <Input_Search all_category={true} />,
            errorElement: <Error_Page_404 />,
          },
          {
            path: "type",
            element: <Input_Search all_type={true} />,
            errorElement: <Error_Page_404 />,
          },
        ]
      },
      {
        path: "equipment",
        element: <Buttons_Equipment />,
        errorElement: <Error_Page_404 />,
        children: [
          {
            path: "name",
            element: <Input_Search name={true}/>,
            errorElement: <Error_Page_404 />,
          },
          {
            path: "marc",
            element: <Input_Search marc={true} />,
            errorElement: <Error_Page_404 />,
          },
          {
            path: "code",
            element: <Input_Search equipment_name={true} />,
            errorElement: <Error_Page_404 />,
          },
        ]
      },
      {
        path: "location",
        element: <Buttons_Location />,
        errorElement: <Error_Page_404 />,
        children: [
          {
            path: "area",
            element: <Input_Search area={true}/>,
            errorElement: <Error_Page_404 />,
          },
          {
            path: "room",
            element: <Input_Search room={true} />,
            errorElement: <Error_Page_404 />,
          },
        ]
      },
      {
        path: "reports",
        element: <Input_Search report={true} />,
        errorElement: <Error_Page_404 />,
      },
      {
        path: "all_user",
        errorElement: <Ocult />,
      },
      {
        path: "id_user",
        element: <Input_Search id={true}/>,
        errorElement: <Error_Page_404 />,
      },
      {
        path: "rol_user",
        element: <Input_Search rol={true}/>,
        errorElement: <Error_Page_404 />,
      },
      {
        path: "name_user",
        element: <Input_Search name={true}/>,
        errorElement: <Error_Page_404 />,
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
