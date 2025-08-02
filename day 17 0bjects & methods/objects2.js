let username = "anish"
// console.log(username)

// username = "lipun"
// console.log(username)

const person = {
     firstname : 'ankit',
    lastname : 'mohanty',
    

}

// console.log(person.lastname)
// person.lastname= "mohpatra"
//console.log(person.lastname)

//person = {} //error -> as person is declared with const

// let = person2 ={
//     firstname : 'Raj',
//     lastname : 'patra'
// }
//  person2 = {} //empty object


//DELETE :-
//  const isDeleted = delete person.lastname
//  console.log(isDeleted)
// console.log(person)

// console result:-
// --------------------
// delete person.lastname
// true
// delete person.firstname
// true
// person
// {}[[Prototype]]: Object
// delete person.age
// true

//  Object.seal(person) // it restrict the object ,so that any addition & deletion of any key can't be possible (still updating key & value are possible)

//  console results:-
// ------------------------------
//  person
// {firstname: 'ankit', lastname: 'mohanty'}
// delete person.firstname
// false
//  person.lastname = 'sahoo'
// 'sahoo'
// person
// {firstname: 'ankit', lastname: 'sahoo'}
// person.age =23
// 23
// person
// {firstname: 'ankit', lastname: 'sahoo'}

Object.freeze(person) // through freeze method, we can't make any kind of operation (expect extracting values)

// console Result :-
// ---------------------
// person
// {firstname: 'ankit', lastname: 'mohanty'}
// delete person.lastname
// false
// person.age =23
// 23
// person
// {firstname: 'ankit', lastname: 'mohanty'}
// person.lastname = 'mohapatra'
// 'mohapatra'
// person
// {firstname: 'ankit', lastname: 'mohanty'}