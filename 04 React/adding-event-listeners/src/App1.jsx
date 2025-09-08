import CustomButton from "./customButton";

export default function App1() {
    // function handleClick(e)  {
    //     console.log("button clicked");
    //     console.log('e',e);}

    const sayHii = (e) => {
        console.log(2)
        console.log('e',e);
    }

    function sayHello() {
        console.log("helloooo")
    }

    return(
        <>
        {/* <button onClick={handleClick}>click me!!</button> */}

        {/* <button onClick= { function (e)  {
        console.log("button clicked");
        console.log('e',e);}}>Click Me!!!!</button>
        </> */}

        {/* <button onClick = {(e)=>{
        console.log('e',e);
        }}>click me!!</button> */}

        {/* <button onClick = {(e)=>console.log('e',e)}>click me!!</button> */}

        <button onClick={(e)=>sayHii(e)}>click me</button>
        <br />
        <br />
        <CustomButton onClick={sayHello}/>
        </>
    )
}