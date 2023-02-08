import './style/App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'
import SingleProduct from './components/SingleProduct'
import Login from './Login';
import Cart from './components/Cart'
import Footer from './components/Footer'
import Error from './components/Error'

function App() {
  return (
 <>
       <Navbar/>

       <Routes>
           <Route path='/'  element={<Home/>}/>
           <Route path='/about'  element={<About/>}/>
           <Route path='/contact'  element={<Contact/>}/>
           <Route path='/product'  element={<Product/>}/>
           <Route path='/singleproduct'  element={<SingleProduct/>}/>
           <Route path='/login' element={<Login/>} />
           <Route path='/cart'  element={<Cart/>}/>
           <Route path='*' element={<Error/>} />
       </Routes>

       <Footer/>
       
 </>
  );
}

export default App;
