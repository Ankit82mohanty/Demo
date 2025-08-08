// //function add(a,b){
//     //const add = function(a,b){

//    // const add = (a,b) => error - as arguments keyword is no supported in arrow function
//     console.log(a+b)
//     console.log('arguments',arguments)
//     // arguments.forEach(() => console.log('hello'))
//     console.log(arguments.length)

// let sum = 0
// for(let i = 0; i< arguments.length;i++){ 
//     //console.log(arguments[i])
// sum += arguments[i]
// }
// console.log('sum is ',sum)
// //}
// add(10,20,30,40)
// add(10,40,50,20,2457)
// console.dir(add)


//rest params => ....args
//const sum = (...args,a,b)=> { //A rest parameter must be last in a parameter list.
// const sum = (a,b,...args) =>{
//     console.log("sum of (a+b)",a+b)

//     console.log(args)
//     console.log(args.length)
//     const sum = args.reduce((acc,curr) => acc+curr)
//     console.log("sum of rest params",sum)
// }
// sum(10,30,20,60,90)


function printmessages (...params){
    params.forEach(msg => console.log(msg))
}
printmessages('hii','hello','tata','bye bye','khatam')