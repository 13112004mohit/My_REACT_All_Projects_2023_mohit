import React from 'react'
import '../style/Contact.css'

const paira={
   textAlign:'center',
   fontSize:'30px'
}
const Contact = () => {
  return (
<>
    <p style={paira}>contact pagfe</p>
    <iframe 
       src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25305.41138932753!2d126.99634076838387!3d37.55090701270075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1669054824084!5m2!1sen!2sin"
       width="100%" 
       height="450"
       style={{border : 0}} 
       allowfullscreen=""
       loading="lazy" 
       referrerpolicy="no-referrer-when-downgrade">
    </iframe>

            <div className="contactfmain">
               <div className="contactfcol">
                  <form encType='multipart/form-data' action="https://formspree.io/f/xwkzjoqw" method="post">
                     <input type="text" name="Username" required autoComplete='off' placeholder='Username'/>
                     <input type="email" name="Email" placeholder='Email' autoComplete='off'  />
                     <textarea name="Messege" autoComplete='off' placeholder='Enter your messege' cols="30" rows="10"></textarea>
                     <input className='btn' type="submit" value="SEND" /> 
                  </form>
               </div>
            </div>

    </>
  )
}

export default Contact;