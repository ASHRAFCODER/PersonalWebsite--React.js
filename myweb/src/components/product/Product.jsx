import React from 'react'
import "./Product.css"

const Product = ({img}) => {
  return (
    <div className="p">
        <div className="p-browser">
         
           <div className="p-circle"></div>
           <div className="p-circle"></div>
           <div className="p-circle"></div>
           
       
        </div>
        <a  target="_blank" rel="noreferrer">
       <div className='p-img'>
       
           <img src={img} alt="" className="a-this-img" />
            
       </div>

        </a>
    </div>
  )
}

export default Product