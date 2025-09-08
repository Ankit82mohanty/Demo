import { useState } from "react"
export default function Greetings({name,children}) {
    // console.log("child component")
    console.log(children)

    const [clickCount,setclickCount]= useState(0)
    return(
        <div style = {{border: '1px solid gray',  marginTop: '10px', padding: '10px'}} >
        <h2>Hello,{name}</h2>
        <p>You click the button {clickCount} times</p>
        <button onClick={()=> setclickCount((prev)=>prev+1)}>click here....</button>

   <div style={{marginTop: '10px', padding: '10px',backgroundColor:"#801515ff"}}>
        {children}
   </div>
        </div>
    )
}