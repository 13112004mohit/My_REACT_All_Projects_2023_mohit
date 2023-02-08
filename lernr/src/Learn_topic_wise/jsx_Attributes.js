import React from 'react'

export default function jsx_Attributes() {

    const img1 = "https://source.unsplash.com/random/200x200";
    const directtooweb = "https://source.unsplash.com/random/201x200";
    const thapalink = "https://www.thapatechnical.com";

    // Inline Css in jsx 
    const body={
        display:"flex",
        flexDirection:"column",
        alignItem:"center",
        justifyContent:"center"
    }
    const heading ={
        color:"blue",
        fontFamily:"'Splash',cursive" ,
        textAlign:"center",
        fontWeight:"bold"
    }
    const stylimg = {
        border:"3px solid green",
        borderRadius:"10px",
        padding:"10px",
    }   


  return (
      <>
      <div style={body}>
     <h1 style={heading} contentEditable="false">here use in line css for styling</h1>
     <h1 className='heading' contentEditable="true"> this is editable because of jsx_Attributes if true</h1>
     <a href={thapalink} target="blank"> 
     <img style={stylimg} src={directtooweb} alt="thapa Thechnical webside" />
     </a>
     </div>
     <img style={stylimg} src={img1} alt="in react you must write alt " /> 
       </>
  );
}
