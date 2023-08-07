import React from 'react'
import Craousel from '../components/Craousel'
import '../style/home.css'
import AboutComponent from '../components/About_component'
import GalleryComponent from '../components/Gallery_component'
import Carsole2 from '../components/crasole2';
import Facilitys from '../components/Facilitys'
import Notice from '../components/Notice'


const Home = () => {
  return (
    <>
    <Craousel/>
    <AboutComponent/>
    <Notice/>
    <Carsole2/>
    <Facilitys/>
    <GalleryComponent/>
    </>
  )
}

export default Home