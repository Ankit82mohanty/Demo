// const a= 10;


// const outer = function(){
//     const b = 20;
//     // const x = 111;

//     const add = function(){
//     console.log("addition is", a+b)
//   }
//   //add()
// return add;

// }
// const func = outer()
// // console.log('func',func)
// // console.dir(func)
// // console.log(add)
// // console.dir(add)
// func()

function f1(){
    let firstname = "ankit"
    let lastname = "mohanty"

    function f2(){
        console.log("firstname is ", firstname)
    }
    return f2;
}
const printname = f1()
printname()