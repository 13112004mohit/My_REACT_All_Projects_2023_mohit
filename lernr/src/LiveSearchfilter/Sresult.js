import React from 'react'

const Sresult=(props)=>{
   
    const centern={
        display:'flex',
        justifyContent:'center'

    }

    let img = `https://source.unsplash.com/user/erondu/600x400?${props.name}`;

    return(
        <>
        <div style={centern}>
            <img src={img} alt="search" />
        </div>
        </>
    )
}

export default Sresult;