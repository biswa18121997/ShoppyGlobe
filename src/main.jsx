import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Products from './components/Products.jsx'
import Cart from './components/Cart.jsx'
import Error from './components/Error.jsx'
import Home from './components/Home.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import Categories from './components/Categories.jsx'
import Checkout from './components/Checkout.jsx'



const routes=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children :[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/products",
        element:<Products />
      },
      {
        path: "/products/:id",
        element: <ProductDetails />
      },
      {
        path:"/categories",
        element:<Categories />
      },
      {
        path:"/cart",
        element: <Cart />
      },
      {
        path:'/checkout/:id',
        element: <Checkout />
      }


    ]
  },
  
  
]);
ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes}/>
  </React.StrictMode>
)

