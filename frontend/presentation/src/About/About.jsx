import React from 'react'
import './About.css'
import kajaldiimg from './kajaldi.jpeg'

const siz1 = {
  '--i': '1'
}
const siz2 = {
  '--i': '2'
}
const siz3 = {
  '--i': '3'
}
const siz4 = {
  '--i': '4'
}
const arrowimg = 'https://cdn-icons-png.flaticon.com/128/556/556670.png';
const About = () => {
  return (
    <>
      <div className="Abmain">

        <div className="Abrow1">
          <h1 className='h2'>kajal Saini</h1>
          <div className="AboutContainer">
            <h1>OBJECTIVE</h1>
            <p>To work with an organization where can learn new skills and increase my ablites for the organizational goals as well as myself</p>
            <hr />
            
            <h1>EDUCATIONAL QUALIFICATION</h1>
              <img src={arrowimg} alt="img" className="Aicon"/><p>Pursuing Polytechnic 3rd year from Mirzapur</p>
              <img src={arrowimg} alt="img" className="Aicon"/><p>Passed out 12<sup>th</sup> from up in 2020</p>
              <img src={arrowimg} alt="img" className="Aicon"/><p>Passed out 10<sup>th</sup> from up in 2018</p>
              <img src={arrowimg} alt="img" className="Aicon"/><p>Graduation</p>
             <hr />

            <h1>OTHER ACADMIC DETAILS</h1>
            <img src={arrowimg} alt="img" className="Aicon"/><p>Got 1st CCC</p>
            <hr />

            <h1>Technical Skills</h1>
               <img src={arrowimg} alt="img" className="Aicon"/><p>Basic Knowledge of Computer</p>
               <img src={arrowimg} alt="img" className="Aicon"/><p>AutoCad(2D & 3D) </p>
            <hr />

            <h1>WORK EXPERINCE</h1>
            <img src={arrowimg} alt="img" className='Aicon' /> <p>Fresher</p>
            <hr />

            <h1>STRENGTH & HOBBIES</h1>
               <img src={arrowimg} alt="img" className="Aicon"/><p>Hard & Smart Work</p>
               <img src={arrowimg} alt="img" className="Aicon"/><p>Honest & Punctual</p>
               <img src={arrowimg} alt="img" className="Aicon"/><p>Good Communication Skill</p>
               <img src={arrowimg} alt="img" className="Aicon"/><p>Art ,Drawing,Badminton,Reading-Books</p>
            <hr />
          </div>
        </div>

        <div className="Abrow2">

          <div className='cube1'>
            <div className='top1'></div>
            <div>
              <img className='Aimg' src={kajaldiimg} alt="img" />
              <span style={siz1} ></span>
              <span style={siz2} ></span>
              <span style={siz3} ></span>
              <span style={siz4} ></span>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default About;
