//< const, let > <variable_name> = function(){}

//<const,let> <variable_name> = (list of params) => {//body}

// const sayHello = (fullname) =>{
//     console.log(fullname, "says, good morning everyone!!!")
// }

//const sayHello = (fullname,lastname = 'lastname) =>{
//     console.log(fullname, lastname "says, good morning everyone!!!")
//}


// const sayHello = fullname => console.log(fullname,"says,good morning everyone!!!")


// sayHello()
// sayHello("ankit")
// sayHello("mohanty")


// const square = n => console.log(n * n)

const square = n => n * n;
const number = prompt('enter a number')
console.log(square(parseInt(number)))
// console.log(square(5))
