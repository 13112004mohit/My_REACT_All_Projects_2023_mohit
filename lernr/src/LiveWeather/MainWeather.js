// https://api.openweathermap.org/data/2.5/weather?q=mirzapur&appid=d7a032b90ec54d678f47f057321408f3
// when  not work then change api key 


import React,{useEffect,useState} from 'react';
import axios from 'axios';

const main ={
     textAlign:'center',
     border:'2px solid #ccc',
     display:'flex',
     flexDirection:'column',
     alignItems:'center'
    }


const Weather=()=>{

    const [temp,setTemp] = useState();
    const [mintemp,setMintemp] = useState();
    const [maxtemp,setMaxtemp] = useState();
    const [state,setState] = useState();
    const [country,setCountry] = useState();
    const [cloude,setCloude] = useState();

    const [cstate,setCstate] = useState('mirzapur');
    const [bcstate,setBCstate] = useState('mirzapur');
    const Cstate=(event)=>{
         setCstate(event.target.value)
    }
    const BtnCstate=()=>{
        setBCstate(cstate)
    }


        async function getData(){
            const res = await axios.get(` https://api.openweathermap.org/data/2.5/weather?q=${bcstate}&appid=dd24799a3fedb7338eca34f061694dc3`);
            console.log(res.data);
            setState(res.data.name);
            setCountry(res.data.sys.country);
            setTemp(res.data.main.temp)
            setMaxtemp(res.data.main.temp_max)
            setMintemp(res.data.main.temp_min)
            setCloude(res.data.weather[0].main)
        }
        getData();



    let weather = "";
       if(cloude === 'Clouds'){
        // weather = <i className="fa-solid fa-cloud" style={{color:'#5c85d6',fontSize:'40px',margin:'30px'}}></i>
        weather = <img src="https://cdn-icons-png.flaticon.com/128/414/414927.png" alt="" />
      }
      else if(cloude === 'Smoke'){
        weather = <img src="https://cdn-icons-png.flaticon.com/128/4234/4234243.png" alt="" />
       }
      else if (cloude === 'Rain'){
        weather = <img src="https://cdn-icons-png.flaticon.com/128/2948/2948216.png" alt="" />
      }   
      else{                   
        //    weather =  <i className="fa fa-cloud-sun" style={{color:'yellow',fontSize:'40px',margin:'30px'}}></i>;
           weather = <img src="https://cdn-icons-png.flaticon.com/128/6581/6581533.png" alt="" />
       }
     
const curDate = document.getElementById('date');
const getCurrentDay = ()=>{
    setInterval(()=>{
    let currentTime = new Date();
    let week  = currentTime.toLocaleString('default',{weekday: 'long'});
    var month = currentTime.toLocaleString('default',{ month :'short'})
    var date = currentTime.getDate();
    let Time = currentTime.toLocaleTimeString();
    
        curDate.innerHTML = week +' | ' + month  +' | '+ date + ' | '+ Time;
    },1000)
};
getCurrentDay();

    return(
        <>
              <div style={main}>
            <input onChange={Cstate} style={{outline:'none', padding:'5px 28px',margin:'20px'}} type="search" placeholder='country state name ..' name="" id="" />
             <button onClick={BtnCstate} style={{width:'15em',border:'none',padding:'5px 10px',marginTop:'-20px'}}>search</button>
                      <div id="weathercon">
                      {cloude}
                      {weather}
                     </div>

                      <div className="info">
                          <h2 className="location"><i className="fas fa-street-view"></i> {state}, {country}</h2>
                          <p id="date">Week | month date | Time</p>
                          <h1 className="temp">🌡️{ Math.ceil(temp-273.15)}°C</h1>
                          <h3 className="tempmain_max"> <span style={{color:'#ff3300'}}>max {(maxtemp-273.15).toFixed(2)}°C </span> | <span style={{color:'#00ffff'}}>min {(mintemp-273.15).toFixed(2)}°C </span></h3>
                      </div>

              </div>
        </>
    )
}

export default Weather;