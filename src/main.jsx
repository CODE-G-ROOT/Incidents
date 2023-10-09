//? React
import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'

//? NEXT UI
import { NextUIProvider } from "@nextui-org/system";


//? Router Dep
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// ? Routers Directions
import { Navbar_Admin, Navbar_User, Menu_Users, } from './components/Navbar';
import { Oficial_Login } from './components/Oficial_Login';
import { Admin_Page, User_Page } from './components/Pages';
import { Buttons_All, Ocult, Buttons_Equipment, Buttons_Location, Input_Search } from './components/Buttons';
import { Error_Page_404 as ErrorPage } from './components/Errors_';
import { Card_ } from './components/Card';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Oficial_Login />,
    errorElement: <ErrorPage />,
    children: [

    ]
  },
  {
    path: "/users",
    element: <User_Page />,
    children: [
      {
        path: "all",
        element: <Buttons_All />,
        children: [
          {
            path: "id",
            element: <Input_Search all_id={true} />,
          },
          {
            path: "status",
            element: <Input_Search all_status={true} />,
          },
          {
            path: "category",
            element: <Input_Search all_category={true} />,
          },
          {
            path: "type",
            element: <Input_Search all_type={true} />,
          },
        ]
      },
      {
        path: "equipment",
        element: <Buttons_Equipment />,
        children: [
          {
            path: "name",
            element: <Input_Search name={true} />,
          },
          {
            path: "marc",
            element: <Input_Search marc={true} />,
          },
          {
            path: "code",
            element: <Input_Search equipment_name={true} />,
          },
        ]
      },
      {
        path: "location",
        element: <Buttons_Location />,
        children: [
          {
            path: "area",
            element: <Input_Search area={true} />,
          },
          {
            path: "room",
            element: <Input_Search room={true} />,
          },
        ]
      },
      {
        path: "reports",
        element: <Input_Search report={true} />,
      },
    ]
  },
  {
    path: "/admin",
    element: <Admin_Page />,
    children: [
      {
        path: "all",
        element: <Buttons_All />,
        children: [
          {
            path: "id",
            element: <Input_Search all_id={true} />,
          },
          {
            path: "status",
            element: <Input_Search all_status={true} />,
          },
          {
            path: "category",
            element: <Input_Search all_category={true} />,
          },
          {
            path: "type",
            element: <Input_Search all_type={true} />,
          },
        ]
      },
      {
        path: "equipment",
        element: <Buttons_Equipment />,
        children: [
          {
            path: "name",
            element: <Input_Search name={true} />,
          },
          {
            path: "marc",
            element: <Input_Search marc={true} />,
          },
          {
            path: "code",
            element: <Input_Search equipment_name={true} />,
          },
        ]
      },
      {
        path: "location",
        element: <Buttons_Location />,
        children: [
          {
            path: "area",
            element: <Input_Search area={true} />,
          },
          {
            path: "room",
            element: <Input_Search room={true} />,
          },
        ]
      },
      {
        path: "reports",
        element: <Input_Search report={true} />,
        children: [
          {
            path: "?id=:id",
            element: <Card_ />,
          },
        ]
      },
      {
        path: "all_user",
        element: <Ocult />,
      },
      {
        path: "id_user",
        element: <Input_Search id={true} />,
      },
      {
        path: "rol_user",
        element: <Input_Search rol={true} />,
      },
      {
        path: "name_user",
        element: <Input_Search name={true} />,
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
