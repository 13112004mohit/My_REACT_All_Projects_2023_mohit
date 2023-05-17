import './style/App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import SingleProduct from './pages/SingleProduct'
import Login from './pages/Login';
import Cart from './pages/Cart'
import Checkout from './components/checkoutpg'
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
           <Route path='/singleproduct/:id'  element={<SingleProduct/>}/>
           <Route path='/login' element={<Login/>} />
           <Route path='/cart'  element={<Cart/>}/>
           <Route path='cart/:checkout'  element={<Checkout/>}/>
           <Route path='*' element={<Error/>} />
       </Routes>

       <Footer/>
       
 </>
  );
}

export default App;
