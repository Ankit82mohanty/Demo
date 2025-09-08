console.log("EXCEUTATION STARTED")
function A(){
    console.log("A")

}
A()
function B(){
    console.log("B")

}
B()

function C(){
    console.log("C1")
    B();
    console.log("C2")

}
C()

function D (){
    console.log("D1")
    C()
    console.log("D2")
}
D()

console.log("EXECUTATION ENDED")