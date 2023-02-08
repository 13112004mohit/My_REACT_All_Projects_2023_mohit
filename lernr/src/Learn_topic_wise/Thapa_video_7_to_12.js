import React from 'react';


// ❤❤❤THIS IS VIDEO OF THAPA TECHNICAL start from #7 num video
// /*
const name = {
     nam: "mohit" ,
     work:"software Developer" 
    };
let { nam: mai ,work} = name;  //  this is object method
const movie1 = "Gangunm Beauty";  //simple method
const movie2 = "My love from the Star⭐"; 
const movie3 = ["mr.robot","Black Days"] ; //this is arrray method



//DATE & TIME START here we have two method for show date and time 
// first method

// /*
let today = new Date();
let date =  today.getDate() + '-'
           +today.toLocaleString('default',{month:'long'}) +'-'
           +today.getFullYear();   

 let hours =  today.getHours();
 let ampm = hours >= 12 ? 'pm' : 'am';   // here use ternary operator short of if-else 
     hours = hours % 12;
     hours = hours ? hours : 12;
let time =  hours +":"+
          + today.getMinutes()+":"+
          + today.getSeconds()+":";   
// */
// second method to show date and time  THAPA TECHNICAL video num #12
/*
let date = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString(); 
// DATE & TIME END
// */


export default function Thapa_video_7_to_12() {
  return (
  <>
  
    <h1>Netflex Movie list Best Web serise</h1>
    <p>List of 5 name ⭐⭐⭐⭐⭐</p>
    <p>my name is {mai +" and my work is "+work}   --without Templet Literals</p> 
    <p>my name is {`${mai} and my work is ${work}`}  --using Template Literals </p>
    <ol>
      <li>{movie1}</li>
      <li>{movie2}</li> 
      <li>{movie3[0]}</li>
      <li>{movie3[1]}</li>
      <li>Money hiest</li>
      <li>Entrepreneurial age</li>
      <li>Our GlamoursTime</li>
      <li>Dark</li>
      <li>My first-2 love</li> 
    </ol>


<p>---------------------------------------</p>
      <h5>today's date is &rarr; {date}</h5>
      <h5>Current Time is &rarr; {time} {ampm} </h5>  { /* when use first  method */}
      {/* <h5>Current Time is &rarr; {time}  </h5>        when use second method   */}
  
  </>
  );
}
