import React from 'react'
import { useParams , useLocation ,useNavigate} from 'react-router-dom';

const Paramh =()=>{

    const {fname,lname} = useParams();
    const   location    = useLocation();
     
    // kisi other page pr direct jane keliye 
    // hmm "/params/defaultName/2nddefname" me place pr -1 bhi likh skte hai previous and +1 next but ussse page reload hoga jo ki bad user experince hoga
    const   navigate    = useNavigate();
    const gotoback=()=>{
        navigate("/params/defaultName/2nddefname")
        // navigate(-1)
    }
  
    return(
        <>
        {/* name should be same in class name or where import if name not same then pareamater not be pass */}
        {/*first you need eares ->> defaultName/2nddefname <<- and type something/something
            when we need if a student info then --> student class name or roll then show student info etc you can use a lot of exampoles like that */}
       <h2>this is -- {fname} {lname} -- parameter hook when user want parameter in parameter</h2>

       {/* jbb hmm kisi webside me jate hai aur ek page ke ander /phir dusre artical pr click krte hai to usme 
        aapko google or kisi bhi browser ke link(url) box me https://wesidename/home/page1/page2/moveiname
        aise dekhne ko milta hai aur jbb hmm page1 pr bina kisi return button click kre jana chaahre hai to 
        hmm only /page2/moveinae ko link(url) pr se delet krte hi direct page1 pr clejate hai to aise me hmm wha bhi 
        params hook ka use krdkte hai
        abb aap chiche hi example ka use kr skte hai jiske pass primium hai wo awesom movei dekhega aur jiske paa
        nhihai wo nhi dekh payega agar aap ismeka ka 2nddefname likte hai to aapke pass subscription hai
         aur agar 2nddefname ke place pr other password likte hai to aapkepass 
         subscription nhi hai-->/params/defaultName/2nddefname */}


       {/* if you create a webside app and want if who have PRIMIUM SUBSCRIPTION then show something advanced
       if not then not so advanced feature */}
        <p>my Current location is {location.pathname}</p>

      

        {location.pathname === `/params/defaultName/2nddefname`
                             ? ( <button onClick={()=>alert('you have Primium watch awesom movies')}>PRIMMIUM </button> )
                             : (<button onClick={gotoback}>😀😀😀😀 you not have primium subscription first purches primium 🔙 </button>)
        }

        </>
    )
}


export default Paramh;