import React from 'react'
import Product from '../product/Product'
import "../productList/productList.css"
import { products } from '../../data'
import test from '../../img/test.png'
import first from '../../img/first.png'
import se from '../../img/se.jpg'
import th from '../../img/th.png'
const ProductList = () => {
  return (
    <div className='pl'>
       <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
        <p className="pl-desc">
          I provide a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      
        <div className="pl-list">
       

          <Product key={1} img={first}  />
          
          <Product key={1} img={se}  />
          
          <Product key={1} img={th}  />
          
 
       
        
           

        </div>
    </div>
  ) 
}

export default ProductList