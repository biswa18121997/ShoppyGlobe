import React,{lazy,Suspense} from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import LoadingScreen from './components/LoadingScreen.jsx'
//import Products from './components/Products.jsx'
let Products=lazy(()=>import('./components/Products.jsx') )
//import Cart from './components/Cart.jsx'
let Cart=lazy(()=>import('./components/Cart.jsx') )
//import Error from './components/Error.jsx'
let Error=lazy(()=>import('./components/Error.jsx') )
//import Home from './components/Home.jsx'
let Home=lazy(()=>import('./components/Home.jsx') )
//import ProductDetails from './components/ProductDetails.jsx'
let ProductDetails=lazy(()=>import('./components/ProductDetails.jsx') )
//import Categories from './components/Categories.jsx'
let Categories=lazy(()=>import('./components/Categories.jsx') )
let Checkout=lazy(()=>import('./components/Checkout.jsx') )
//import Checkout from './components/Checkout.jsx'


//implemented the lazy loading but can see the the names of files on the ilst of js items in network console
//but on the graph the lazy loading is visible..


const routes=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children :[
      {
        path:"/",
        element: <Suspense fallback={<LoadingScreen />}><Home /></Suspense>
      },
      {
        path:"/products",
        element:<Suspense fallback={<LoadingScreen />}><Products /></Suspense>
      },
      {
        path: "/products/:id",
        element: <Suspense fallback={<LoadingScreen />}> <ProductDetails /></Suspense>
      },
      {
        path:"/categories",
        element:<Suspense fallback={<LoadingScreen />}><Categories /></Suspense>
      },
      {
        path:"/cart",
        element: <Suspense fallback={<LoadingScreen />}> <Cart /></Suspense>
      },
      {
        path:'/checkout/:id',
        element:<Suspense fallback={<LoadingScreen />}><Checkout /></Suspense> 
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

