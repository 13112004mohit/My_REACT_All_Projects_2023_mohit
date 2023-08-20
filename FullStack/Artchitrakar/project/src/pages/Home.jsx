import React from 'react'
import Craousel from '../components/Craousel'
import '../style/home.css'
import Home1 from '../components/home_1'
import Habout from '../components/home_aboutus'
import HomeServices from '../components/home_Services'
import GalleryComponent from '../components/Gallery'
import HomeAdvanced from '../components/Home_Advanced'
import HomeLatest from '../components/Home_Latest'
import HomeBlog from '../components/HomeBlog'
import MetaData from '../components/layout/MetaData'


const Home = () => {
  return (
    <>
      <MetaData title="Chitrakar-Home" />
    <Craousel/>
    <Home1/>
    <Habout/>
    <HomeLatest/>
    <HomeServices/>
    <HomeAdvanced/>
    <GalleryComponent/>
    <HomeBlog/>
    </>
  )
}

export default Home