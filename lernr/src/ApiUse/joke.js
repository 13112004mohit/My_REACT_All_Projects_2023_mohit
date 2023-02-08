import axios from 'axios';
import React,{useState} from 'react'
import './h.css'

const Joke=()=> {


 const[jokeshow,setJokeshow] = useState('😁click button & get next joke😀');

 let  getJoke= async()=>{
   const res = await axios.get(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`);
   setJokeshow(res.data.joke)
  }

  //  const getJoke=()=>{
  //         fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single')
  //         .then((Response)=>{
  //           return Response.json();
  //         })
  //         .then((item)=>{
  //           // console.log(item.joke);
  //              setJokeshow(item.joke)
  //         })
  //  }
 const btn=()=>{
    getJoke();
  
  }
  return (
      <>
         <div className="main">
             <h1>😈</h1>
                <div class="wrapper">
                     <button onClick={btn} id="button">next joke</button>
                     <span id='span'>
                         <p  id="joke">{jokeshow}</p>
                     </span>
                 </div>
          </div>
      </>
  )
}

export default Joke;