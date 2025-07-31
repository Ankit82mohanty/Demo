

// const user = {

// }

// console.log(user)
// console.log(typeof user)

let username = 'adarsh'
const user = {

    firstname : 'ankit',
    lastname : 'mohanty',
    
    'full-Name': 'ankit mohanty' ,// must define between (' '). 
     age : 21,
     isGraduated : true

}

//GET VALUES :-
console.log(username)

// console.log(firstname)
console.log(user.firstname) //extract object by using '.'
console.log(user['lastname']) // extract object by using string value in '[]' notation.

// console.log(user.full-Name) //error
console.log(user["full-Name"])

let age2= 'age'
console.log(user.age2)
console.log(user[age2])

//UPDATE VALUES :-
console.log(user.isGraduated)
user.isGraduated = false
console.log(user.isGraduated)
// console.log(user)

//ADD VALUES :-
console.log(user.mobileNumber) // undefined
user.mobileNumber= 8260754453
console.log(user.mobileNumber)

// NESTED OBJECTS :-


const user2 = {

    firstname : 'ankit',
    lastname : 'mohanty',
    'full-Name': 'ankit mohanty' ,// must define between (' '). 
     age : 21,
     isGraduated : true,
     address :{
        city : 'bbsr',
        pin : 751006,
        isRental : true
     } ,

    //  function greet (){
    //     console.log("user says hello")
    //  }

    greet : function (){
        console.log("user says hello")

        // return undefined
        // return 100
    },
        showNameAndMessage : function(name,msg){
            return "hello"+ name + ", your msg is  " + msg
            
        }
         
     
    }

    console.log(user2)
    console.log(user2.address.city)
    user2.address.city = 'CTC'
    console.log(user2.address.city)

    console.log( 'state',user2.address?.state) //undefined

    // console.log(user2.greet2())
    console.log(user2.greet())

    // console.log(user2.showNameAndMessage("ankit","good morning"))
    const x = user2.showNameAndMessage('ankit','good morning')
    console.log(x)