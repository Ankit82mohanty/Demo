const numbers = [1,2,3,4,5]
console.log(...numbers)

const employees = [
    { name:'Raj', age : 22},
    {name:'Rakesh',age: 23 },
    {name:'Amit', age:24 },
    {name:'Rahul',age:23},
    { name:'Ankit', age:22},

]
console.log(employees)
console.log(...employees)

const myName = 'Ankit Mohanty'
console.log(...myName)

//================================================

const arr1 =[10,20,30,40]
    const arr2 = []
   for(let i =0;i<arr1.length;i++){
        arr2[i] = arr1[i]   
     }
    arr2.push(50)
    console.log(arr1)
    console.log(arr2)
//=================================================
    const arr3 =[10,30,50]
    //const arr4 = [...arr3,...'hello']
    const arr4 =[]
    Object.assign(arr4,arr3)

    arr4.push(90)
    console.log(arr3)
    console.log(arr4)

    //=============================================
    const user= {
        name:'Ankit Mohanty',
        age :21,
        state: 'Odisha',
        pin: 751007
    }
    const copiedUser={...user,city:'BBSR'}

    
    console.log(user)
    console.log(copiedUser)

    
const copyUser = { ...user }
// copyUser.address.state = "Jharkhand"
console.log(user)
console.log(copyUser)

// SHALLOW COPY



// DEEP COPY
// json.parse(), json.stringify()