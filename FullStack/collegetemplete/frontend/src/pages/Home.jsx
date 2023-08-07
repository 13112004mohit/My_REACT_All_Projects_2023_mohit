import React from 'react'
import Craousel from '../components/Craousel'
import '../style/home.css'
import Home1 from '../components/home_1'
import Habout from '../components/home_aboutus'
import Courses from '../components/home_courses'
import GalleryComponent from '../components/Gallery'
import HomeAdvanced from '../components/Home_Advanced'
import HomeBlog from '../components/HomeBlog'


const Home = () => {
  return (
    <>
    <Craousel/>
    <Home1/>
    <Habout/>
    <Courses/>
    <HomeAdvanced/>
    <HomeBlog/>
    <GalleryComponent/>
    </>
  )
}

export default Home