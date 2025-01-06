import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Error from './Components/Error/Error'

function App() {
  const router = createBrowserRouter([
    {path: '', element: <Layout/>, children: [  
      {path: '', element: <Home/>},
      {path: 'home', element: <Home/>},
      {path: 'about', element: <About/>},
      {path: 'portfolio', element: <Portfolio/>},
      {path: 'contact', element: <Contact/>},
      {path: '*', element: <Error/>}

    ]}
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </> 
  )
}

export default App
