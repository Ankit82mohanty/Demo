import { useState } from 'react'
import './App.css'
import Greetings from './greetings.jsx'

function App() {
  console.log("parent component")

  const [name,setName]= useState("Ankit")

  return (
    <>
     <div style={{padding: '20px'}}>
    <h1>React props and state</h1>


    {/* <Greetings name={name} /> */}
    <Greetings name ={name}>
      <p>this is extra element passed as <strong>children</strong></p>
      we can pass more elements,texts,components etc.
    </Greetings>

    <button onClick={()=>{setName((prev)=>prev+1)}}>click me!!
    </button>
     </div>
    
    </>
  )
}

export default App
