// const s1 = "raj"
// const s2 = "ankit"
// const s3 = "chandan"

// const students = ["raj","ankit","chandan",10,true,NaN,null]
// console.log(students)
// console.log(students.length)

// // const fruits = new Array(3)
// // console.log(fruits)

// console.log(students[0])
// console.log(students[1])
// console.log(students[2])
// console.log(students[3]) //undefined

// for(let i=0;i<students.length;i++){
//     console.log(students[i])

// }

// students[7] = 'Dhananjaya'
// console.log(students)

// students[20]="rakesh"
// console.log(students)

// students[students.length] = "mantosh"
// console.log(students)

// students.push("sai")
// console.log(students)

// const removedStudents = students.pop()
// console.log(removedStudents)
// console.log(students)

//=====================================================

// const fruits = ['apple', 'banana','mango']
// console.log(fruits)

// fruits.unshift('orange') // add the element in the front
// fruits.shift() // remove the element from the first

// fruits.push('orange')

// fruits.pop()
// 'mango'
// fruits
// (2) ['apple', 'banana']
// fruits.pop()
// 'banana'
// fruits
// ['apple']
// fruits.pop()
// 'apple'
// fruits
// []
// fruits.pop()
// undefined

// const isMangoIncluded = fruits.includes('mango')
// console.log(isMangoIncluded)
// isMangoIncluded
// true


// const isDatesIncluded = fruits.includes('dates')
// console.log(isDatesIncluded)
// isDatesIncluded
// false

// const moreFruits = ['pineapple','grapes']
// const addedFruits = fruits.concat(moreFruits)

// fruits
// (3) ['apple', 'banana', 'mango']
// moreFruits
// (2) ['pineapple', 'grapes']
// addedFruits
// (5) ['apple', 'banana', 'mango', 'pineapple', 'grapes']


// fruits.reverse()
// console.log(fruits)


// slice () => returns a new array,
const morefruits= ['apple', 'banana','mango','pineapple','grapes','litchy']
// let slicedFruits = morefruits.slice()
// let slicedFruits = morefruits.slice(2)
//let slicedFruits = morefruits.slice(2,4) //ending index is not included
// console.log('morefruits',morefruits)
// console.log('slicedFruits',slicedFruits)


// splice() -> it deletes the elements in the org array & returns the deleted elements in an new array
// const splicedFruits = moreFruits.splice()
// const splicedFruits = moreFruits.splice(2)
// const splicedFruits = moreFruits.splice(2, 2, "Dates", 'Orange', 'Guava')
// console.log('morefuits', moreFruits);
// console.log('splicedfruits', splicedFruits)


// sort ()
// morefruits.sort()
// console.log('sort',morefruits)


////////////////////////////////////////////////////////////////
// forEach()
// map()
// filter()
// reduce()
// every()
// some()

//forEach :-
const months = ['JAN','FEB','MAR','APR','MAY']
// months.forEach(printMonth)

// const printMonth = function(value,idx){
//         console.log("month:",value,idx)
// }

// function printMonth(value , idx , arr){
//     console.log("month:",value , idx , arr)
//}
// months.forEach((value , idx , arr)=>{
//    console.log("month:",value , idx , arr)
// })

// function printMonth(value , idx  ){
//     console.log("month:",value , idx )
// }
//-----------------------------------------------------------------------------------------

//Map :-
// const months1=months.map((value , idx , )=>{
//     console.log("month:",value , idx , )

//     return true + ":"+idx
// })

// const months2 = months.forEach((value,idx)=>{
//     console.log("months:",value,idx)
// })

// console.log(months1) //we can expect an array -cause map() returns an array
// console.log(months2) // it will be undefined - cause forEach() returns nothing
//----------------------------------------------------------------------------------------------

//Filter :-
// const filteredMonths = months.filter((month)=>{
//     console.log("month: "+month)
//     return month.toLowerCase().includes('m') //toLowerCase()=> in case of lower case
// }
// )
// console.log("filteredMonths",filteredMonths)


// const students = [
//     {name: 'Soumya',roll: 20},
//     {name: 'Ankit',roll:18},
//     {name: 'Bishal',roll:22},
//     {name: 'saswat',roll:16}
// ]
// // const rollGreaterThan18 = students.filter(students =>{
// //     return students.roll >= 18
// //})
// const rollGreaterThan18 = students.filter(student => student.roll >= 18)
// console.log(rollGreaterThan18)
//-------------------------------------------------------------------------------------------------

//Reduce :-
// const nums = [10,20,30,40,50,60]
// // nums.reduce((accumulator, current,idx,arr)=>{
// //     console.log(accumulator,current,idx,arr)
// // })
// const result =nums.reduce((accumulator,current,idx,)=>{
//     console.log(accumulator,current,idx,)

//     return true + ":"+ idx
// },0)
// console.log("result:"+ result) // result value depends upon the last value of the accumulator

// const sum = nums.reduce((accumulator,current )=>
//     accumulator + current
// )
// console.log("sum is:",sum)
//----------------------------------------------------------------------------------------------------

//Some :-
// const numbers = [2,11,13]
// const numbers1 = [11,13]
//  let isSomeEvens =  numbers.some(num => num % 2 ==0)
//  console.log(isSomeEvens)

//  isSomeEvens = numbers1.some(num => num %2 ==0 )
//  console.log(isSomeEvens)

 const num = [24,36,48,96]
 const isSomeOdd = num.some(num => num %2 !=0)
 console.log(isSomeOdd)
//----------------------------------------------------------------------------------------------------

//Every :-
let isEveryOdds = num.every(num => num%2 !=0)
console.log(isEveryOdds)







