import { useState } from 'react';
import './App.css'

let count = 0;
//const data= useState(0)           // useState(initialValue)


function App({root}) {
  // const data = useState(0)
  // console.log('data:-',data)

  const [data,setData]= useState(0)

  
  const IncreaseValue =(e)=>{
     console.log("increase buttton clicked")
    // count++
    // console.log("count:-",count)
    // root.render(<App root={root}/>)

    // data[0]++
  

    // const setData = data[1]
    // console.log(setData)
    // setData(data[0]++)
    // console.log(data[0])

    setData(data+1)

  }
  const DecreaseValue =(e)=>{
    console.log("decrease button clicked")
    setData(data-1)
    

  }

  

  return (
    <>
      <h1>Counter App</h1>
      <button onClick={IncreaseValue}>Increase</button>
      <br /> <br />
      <button>{data}</button>
      <br /> <br />
      <button onClick={DecreaseValue}>Decrease</button>
     </>
  )
}

export default App
