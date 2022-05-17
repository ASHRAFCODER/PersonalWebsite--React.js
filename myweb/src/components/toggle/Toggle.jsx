import React, { useContext } from 'react'
import "./toggle.css"
import sun from "../../img/sun.png"
import moon from "../../img/moon.png"
import { ThemeContext } from '../context'
 
const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className='t'>
        <img src={sun} alt="" className='t-icon'/>
        <img src={moon} alt="" className='t-icon'/>
        <div className='t-button' onClick={handleClick} style={{left : theme.state.darkMode? 0 : 25 }} > </div>
    </div>
  )

}

export default Toggle