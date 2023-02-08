import './App.css';
import Navbar from './Navbar'
import {Route,Routes} from 'react-router-dom';
import Home from './cotterJ/Home'
import Knuckle from './KnuckleJ/Knuckle';
import About from './About/About';
import Error from './Error';
import GoTop from './Component/GoTop';

function App() {
  return (
    <>
       <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='knuckle' element={<Knuckle/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='*' element={<Error/>}/>
       </Routes>
    
         <GoTop/>    
    </>
  );
}

export default App;
