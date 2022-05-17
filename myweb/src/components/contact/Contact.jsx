import React, { useState } from 'react'
import "./Contact.css"
import phone from "../../img/phone.png"
import email from "../../img/email.png"
import address from "../../img/address.png"
import { useRef ,useContext } from 'react'
import emailjs from 'emailjs-com';
import { ThemeContext } from '../context'
const Contact = () => {
  const formRef = useRef()
  const [done , setDone] = useState(false)
  
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
 
   const handleSubmit = (e)=>{
     e.preventDefault();
     emailjs
     .sendForm(
       'service_wyiit7c', 
      'template_sn8oz3v', 
       formRef.current,
       'YWlHiRfh--lVoNe1O'
       )
     .then((result) => {
         console.log(result.text);
         setDone(true)
     }, (error) => {
         console.log(error.text);
     });
     
   }

  return (
    <div className="c">
    <div className="c-bg"></div>
    <div className="c-wrapper">
      <div className="c-left">
        <h1 className="c-title">Let's discuss your project</h1>
        <div className="c-info">
          <div className="c-info-item">
            <img src={phone} alt="" className="c-icon" />
            +1 5144 765 461
          </div>
          <div className="c-info-item">
            <img className="c-icon" src={email} alt="" />
            ashusanew@gmail.com
          </div>
          <div className="c-info-item">
            <img className="c-icon" src={address} alt="" />
            Avenue Linton 3845 montreal QC H3Z1T5
          </div>
        </div>
      </div>
      <div className="c-right">
        <p className="c-desc">
          <b>What’s your story?</b> Get in touch. Always available for
          freelancing if the right project comes along. 
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
           
          <input  style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder="Subject" name="user_subject"/> 
          <input  style={{backgroundColor: darkMode && "#333"}}  type="text" placeholder="Email" name="user_email"/> 
          <input  style={{backgroundColor: darkMode && "#333"}}   type="text" placeholder="Name" name="user_name"/> 
          <br/>
          <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder='Message' name='message'/>
          <button> Submit </button>
          {done && "Thank you..."}
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact