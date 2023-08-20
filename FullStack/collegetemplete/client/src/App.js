import React from 'react';
import {Route,Routes,Navigate} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/Home'
import About from './pages/Aboutus'
import Courses from './pages/Courses'
import Faculity from './pages/Faculity'
import Gallery from './pages/Gallery'
import Notice from './pages/Notice'
import Contact from './pages/Contact';
import Footer from './components/Footer'
// import GoTop from './components/GoTop';
import Table from './pages/Table'

function App() {
  return (
    <>
       <Navbar />

        <Routes>
           <Route path='/' element={<HomePage/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/courses' element={<Courses/>} /> 
           <Route path='/faculity' element={<Faculity/>} /> 
           <Route path='/gallery' element={<Gallery/>} />
           <Route path='/notice' element={<Notice/>} />
           <Route path='/contact' element={<Contact/>} />
           <Route path='/table' element={<Table/>} />
           <Route path="*" element={ <Navigate to="/" />} />
        </Routes>
        
        <Footer/>
        {/* <GoTop/> */}
    </>
  );
}

export default App;