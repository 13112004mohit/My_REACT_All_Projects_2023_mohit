import React from 'react';
import '../style/Footer.css'

const Footer = () => {
  return (
    <>
      
      <section>
      <div className="foostarat">
        <p>Ready to Get Started? <br /> Talk to us follow </p>
        <button>GET STARTED</button>
        </div>
      </section>

      <section>
         <div className="foomain">
            <div className="foobox">
                <p>My Own webside App</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quasi quae aliquid magni tempore numquam.</p>        
            </div>

            <div className="foobox">
                <p>Get Shippeing At Time</p>
                <input type="email" placeholder='email@' name="email" />
                <button>Info Shipping</button>
            </div>

            <div className="foobox">
                <p>follow us</p>
                 <div className="foobox-icon">
                     <i class="fa-brands fa-facebook"></i>
                     <i class="fa-brands fa-instagram"></i>
                     <i class="fa-brands fa-youtube"></i>
                 </div>
            </div>

            <div className="foobox">
                <p>Call us</p>
                <a id='call' href="tel:+91 7007187764">91+ 7007187764</a>
            </div>
         </div>
      </section>
      <hr />
      <section>
        <div className="fooRev">
        <p>@2023 socalmedia All rights Reneweds </p>
        <p>PRIVECY POLICY <br/> TERMS & CONDATIONS </p>
        </div>
      </section>
    </>
  )
}

export default Footer;