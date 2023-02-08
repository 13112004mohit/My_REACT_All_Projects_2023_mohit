import React,{useState} from 'react';
import axios from 'axios';
import { useEffect } from 'react';


// The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, 
// directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.

const btnn={
  position:'absolute',
  left:'22em',
  top:'-.4em',
  margin:'1em',
  border:'none',
  borderRadius:'30%',
  fontWeight:'bold',
  color:'purple'
}
const btnn2={
  position:'absolute',
  left:'26em',
  top:'-.4em',
  margin:'1em',
  border:'none',
  borderRadius:'30%',
  fontWeight:'bold',
  color:'purple'
}

const Pokemon=()=>{

    const [num,setNum] = useState(1);
    const [name,setName] = useState();
    const [moves,setMoves] = useState();
    const [img,setImg] = useState();

     useEffect(()=>{
        // alert('get pokemon');
        async function getData(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            
            setName(res.data.name);
            setMoves(res.data.moves.length);
            setImg(res.data.sprites.other.dream_world.front_default)
            // console.log(res);
        }
        getData();
     });

    return(
        <>
        <h3>you choose <span style={{color:'red'}}> {num} </span> no of pokemon</h3>
        <h2> I am <span style={{color:'red'}}> {name} </span>  </h2>
        <h2> I have <span style={{color:'red'}}> {moves} </span>  Moves</h2>

        <button style={btnn}  onClick={()=>{setNum(num+1)}} name="pkmn" >NEXT</button>
        <button style={btnn2} onClick={()=>{ if(num>1){setNum(num-1)}}} name="pkmn" >PREVIOUS</button>

        <img src={img} alt="" />
        
          <select value={num} onChange={(event)=>{setNum(event.target.value)}}  name="pkmn" >

             
            <option value="1">first</option>
            <option value="25">25</option>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
            <option value="649">last</option>
          </select>
        </>
    )
}

export default Pokemon;