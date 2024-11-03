import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/ContactUs/Contact.jsx'
const router = createBrowserRouter([
  {
  path:'/',
  element: <Layout/>,
  children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"contact",
      element:<Contact/>
    },
    {
      path:"*",
      element:<h1>Page Not Found</h1>
    }
  ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
