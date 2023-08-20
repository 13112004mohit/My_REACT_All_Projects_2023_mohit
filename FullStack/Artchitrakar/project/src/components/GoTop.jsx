import React,{useState,useEffect} from 'react'
import '../style/Gotop.css'



const GoTop = () => {

  const [scroll, setScroll] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const handleScroll = () => {
    const scrollThreshold = .3; // set the threshold to 40%
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition + clientHeight) / scrollHeight;
  
    if (scrollPercentage > scrollThreshold) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      };
    const gotoBtn =() =>{
        window.scrollTo({top:0 ,left:0 ,behavior:'smooth'})
    }


  return (
    <>
        <div onClick={gotoBtn} id={scroll ? 'top_img_AS':'top_img_BS' } className='top_btn'>
             <img className='top_img' src="https://cdn-icons-png.flaticon.com/128/3272/3272638.png" alt="^" />
        </div>
    </>
  )
}

export default GoTop