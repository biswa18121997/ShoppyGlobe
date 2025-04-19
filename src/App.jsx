import Header from './components/Header.jsx'

import Footer from './components/Footer.jsx';
import {Provider} from 'react-redux'
import {Outlet} from 'react-router-dom'
import Store  from './utils/Store.js'
function App() {
  

  return (
    <>
      <Provider store={Store}>
      <Header />
      <Outlet />
      
      <Footer/>
      </Provider>
    </>
  )
}

export default App
