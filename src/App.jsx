
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'

function App() {
 
 
  return (
    <div>
      <BrowserRouter >
          <Navbar/>
          <Routes>
              <Route path = "/" element = {<Home />}></Route>
              <Route path = "/products" element = {<Products />}></Route>
          </Routes>
          <Footer />
      </BrowserRouter>
     
     
    </div>
  )
}

export default App
