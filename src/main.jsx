import React from 'react'
import ReactDOM from 'react-dom/client'

//? NEXT UI
import {NextUIProvider} from "@nextui-org/system";


//? Router Dep
import { createBrowserRouter, RouterProvider, } from "react-router-dom";


// ? Routers Directions
// import { Menu_Incidences } from './components/List';
// import { Menu_Complete } from './components/List';
// import { Search_Button } from './components/Background_panel';
// import Error_404 from './components/Error_404';
import { Oficial_Login } from './components/Oficial_Login';
import { Error_401 } from './components/Error_404';

//? Routers Management
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: rootLoader,
//     action: rootAction,
//     children: [
//       {
//         errorElement: <ErrorPage />,
//         children: [
//           {
//             index: true, element: <Index />
//           },
//           {
//             path: "contacts/:contactId",
//             element: <Contact />,
//             loader: contactLoader,
//             action: contactAction
//           },
//           {
//             path: "contacts/:contactId/edit",
//             element: <EditContact />,
//             loader: contactLoader,
//             action: editAction,
//           },
//           {
//             path: "contacts/:contactId/destroy",
//             action: destroyAction,
//             errorElement: <div> Oops! There was an error. </div>
//           }
//         ]
//       }
//     ],
//   }
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <Oficial_Login/>
    </NextUIProvider>
  </React.StrictMode>,
)
