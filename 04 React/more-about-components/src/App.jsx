import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Product from './Product'
import products from './products.js'
import './App.css'

function App() {
  
console.log(products)
  return (

    <>
    
    {/* <Product abc='xyz' brand ="Adidas" price = "3999.99" description="very good shoes"/>
    <Product brand="shree leather" price ="1999.99"/>
    <Product brand="Nike" price="2999.99" /> */}

    {
    /* {
      // for (let i = 0; i < products.length; i++) {
       
        
      } */
    //  console.log(
    //  products.forEach((p,idx)=>{
    //  return<Product brand ={p.brand} price={p.price} description={p.description} />
    //  })
    // )
      products.map((p,idx)=> <Product key={idx} brand ={p.brand} price={p.price} description={p.description} />)
   
      
  }
     </>
     
  )
}

export default App
