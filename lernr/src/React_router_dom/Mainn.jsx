import React from 'react';
import {Route, Routes ,Navigate} from 'react-router-dom';
import About from './About'
import {Name} from './About'
import Home from './Home'
import Paramh from './params'
import Navbar from './Navbar'
import Error from './Error'
import RedirectPg from './RedirectPage'

const Routing =()=>{
    return(
        <>
      <Navbar/>

      {/* Routes ko hi use krne pr page reload nhi hota hai kuki routes me hmm phele hi path dedete hai to wo 
       Path search nhi krta aur jbb <a herf=""> anchor tag page ko search krne ke bad data deta hai iski wjh se hi 
       anchor tag pr page reload ho ta hai aur ROUTES  pr page nhi reload hota hai  TBHI HMM YHA PR NAVBAR ME HMM
       NAVLINK OR LINK KA USE KR PA RHE HAI aur hmmm PROPS ko nhi hmm ROUTES me hi pass krenge*/}
        <Routes> 
          {/* ye agar koi browser ke URL se type krta hai to direct page pr chlajata hai */}
          <Route path="/home"  element={<Home passprop="i am props pass in routeing"/>} />  
          <Route path="/about" element={<About/>} />
          <Route path="/name"  element={<Name/>} />

          {/* for paramsHook : is important  | after class name/:paramsHook name | & params name /:fname is same in params class name
          we can use lot of parameter in params hook  */}
          <Route path="/params/:fname/:lname"  element={<Paramh/>} />
          {/* jbbb agar user URL pr aisa kuchh likhe jo ki software me hohi nnn tb wo aisa page dikhaye jo 
              app chahte hai ya 404 error page dikhaye */}
          <Route path='*' element={<Error/>} />
          {/* Redirect  mean app 404 error ke place pr app ko usi page pr ya home ya jo page denge uspr lejayega*/}
          <Route path="*" element={<RedirectPg/>} />
          
        </Routes>
         

        </>
    );
}
export default Routing;