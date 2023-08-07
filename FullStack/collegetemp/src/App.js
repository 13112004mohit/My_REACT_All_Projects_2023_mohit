import React from 'react';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import HomePage from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact';
import Notices from './pages/Notices';
import Errorpg from './pages/Error';
import Footer from './components/Footer'
import Faculties from './pages/Faculties';
// import GoTop from './components/GoTop';

function App() {
  return (
    <>
       <Navbar />

        <Routes>
           <Route path='/collegetemplete' element={<HomePage/>} />
           <Route path='/about' element={<About/>} />
           <Route path='/courses' element={<Courses/>} /> 
           <Route path='/faculties' element={<Faculties/>} /> 
           <Route path='/gallery' element={<Gallery/>} />
           <Route path='/contact' element={<Contact/>} />
           <Route path='/notices' element={<Notices/>} />
           <Route path='*' element={<Errorpg/>} />
        </Routes>
        
        <Footer/>
        {/* <GoTop/> */}
    </>
  );
}

export default App;