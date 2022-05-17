import React from 'react'
import "./intro.css"
import personal from "../../img/personal.jpg"
function intro() {
  return (
    <div className='i'> 
     <div className="i-left">
         <div className="i-left-wrapper">
             <h2 className='i-intro'> Hello,my name is </h2>
             <h2 className='i-name'> Ashraf </h2>
             <div className="i-title">

                 <div className="i-title-wrapper">
                   
                     <div className="i-title-item"> Web Developer  </div>
                     <div className="i-title-item"> UI/UX Designer </div>
                     <div className="i-title-item"> Photographer   </div>
                     <div className="i-title-item"> Writer </div>
                     <div className="i-title-item"> Content Creator </div>
              
                 </div>
             </div>
            
             <p className="i-desc">
            I design and develop services for customers of all sizes , specializing
            in creating stylish ,modern websites , web services.
             </p>
         </div>
         <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke='black'

          xmlns='http://www.w3.org/2000/svg'
         />
         
     </div>
     <div className="i-right">
       <div className="i-bg"></div>
         <img src={personal} alt="" className="i-img" />
     </div>
     </div>
  )
}

export default intro