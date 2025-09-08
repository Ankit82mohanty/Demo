function f1 (b){
    console.log( "value of b ",b)
    console.log("typeof b :", typeof b)

    b()

    return "java Technocrat"
}

// f1()
// f1(10)
// f1(true)
// f1("hello")
// f1(null)

function sayHello(){
    console.log("hello everyone!!,good morning")
}
//f1(sayHello()) //--> f1(undefined) // bcoz -> sayHello returns nothing.

f1(sayHello)

console.log(1)
console.log(2)
console.log(3)

function f2(b){
   f1() 
}
f2(F1)
    