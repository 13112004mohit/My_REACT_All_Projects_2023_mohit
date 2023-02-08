import React from 'react';
import "./Cards.css"
import Netflexcard from './Cards'
import Flexdata from './CardData'


// function NCard(val){
//     return(

//         <Netflexcard 
//         img={val.image}
//         netflex={val.netflex}
//         title={val.title} 
//         rating={val.rating}
//         />

//     );
// }



export default function Card_Netflex_Movei() {
  return (
    <>
     <div className="Netheading">NETFLEX Top-Listed Movies </div>

    {/* MorE MorE Short IN in-line function */}
    <div className='body'>
        {Flexdata.map((val,index)=>{
            return(
                <Netflexcard 
                key={val.id} 
                img={val.image}
                netflex={val.netflex}
                title={val.title} 
                rating={val.rating}
                link={val.link}
                />
               
            );
        })}
    </div> 

    {/*using map method es6<<<  Short method jisme ki automatic CardData me jitna data hoga utna hi card bnega mean jinta api me data hoga utna hi display hota hai nnn waise hiii same */}
{/*                
          <div className='body'>
          {Flexdata.map(NCard)}
          </div> */}

{/* 
      <div className='body'>
      <Netflexcard 
         img={Flexdata[0].image}
         netflex={Flexdata[0].netflex}
         title={Flexdata[0].title} 
         rating={Flexdata[0].rating}/>
      <Netflexcard 
         img={Flexdata[1].image}
         netflex={Flexdata[1].netflex}
         title={Flexdata[1].title} 
         rating={Flexdata[1].rating}/>
      <Netflexcard 
         img={Flexdata[2].image}
         netflex={Flexdata[2].netflex}
         title={Flexdata[2].title} 
         rating={Flexdata[2].rating}/>
      <Netflexcard 
         img={Flexdata[3].image}
         netflex={Flexdata[3].netflex}
         title={Flexdata[3].title} 
         rating={Flexdata[3].rating}/>
      <Netflexcard 
         img={Flexdata[4].image}
         netflex={Flexdata[4].netflex}
         title={Flexdata[4].title} 
         rating={Flexdata[4].rating}/>
      <Netflexcard 
         img={Flexdata[5].image}
         netflex={Flexdata[5].netflex}
         title={Flexdata[5].title} 
         rating={Flexdata[5].rating}/>
     <Netflexcard 
         img={Flexdata[5].image}
         netflex={Flexdata[5].netflex}
         title={Flexdata[5].title} 
         rating={Flexdata[5].rating}/>
    <Netflexcard 
         img={Flexdata[0].image}
         netflex={Flexdata[5].netflex}
         title={Flexdata[5].title} 
         rating={Flexdata[5].rating}/>
      </div>
    */} 
    </>
  );
}
