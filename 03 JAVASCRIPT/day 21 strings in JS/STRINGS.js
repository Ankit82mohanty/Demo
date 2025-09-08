
// let str = 'helllo'
// undefined
// let str= new String('World')
// undefined
// typeof str
// 'object'
// str
// String {'World'}0: "W"1: "o"2: "r"3: "l"4: "d"length: 5[[Prototype]]: String[[PrimitiveValue]]: "World"
// str[0]
// 'W'
// str[4]
// 'd'
// str.length
// 5
// 'sai'.length
// 3
// 'ankit'.length
// 5

// const str ="    HELLO WORLD    "
// console.log(str.toUpperCase())
// console.log(str)

// const lowerStr = str.toLowerCase()
// console.log(str,"=>",lowerStr)
// console.log(str)

// const  bothSideTrim = str.trim()
// console.log(str,"=>" ,bothSideTrim)

// const startTrim = str.trimStart()
// console.log(str, "=>", startTrim)

// const endTrim = str.trimEnd()
// console.log(str,"=>",endTrim)

//====================================================

const str = 'javascript'

console.log(str.charAt(4)) //s
console.log(str[4]) //s

const str1 = str.concat('is fun!')
console.log(str,"=>",str1)

console.log(str.includes('a'))
const letter = 'A'
console.log(str.includes('A'))
console.log(str.includes(letter.toLowerCase()))


console.log(str.includes('script'))
console.log(str.indexOf('a'))
console.log(str.indexOf('a',2))
console.log(str.lastIndexOf('a'))

const replacedString = str.replace("a","k")
console.log(str,"=>",replacedString)

const replacedStr = str.replaceAll('a','k')
console.log(str,'=>',replacedStr)

console.log(str.repeat(3))

console.log('5'.padStart(3,'0'))
console.log(str.padStart(3,'0'))
console.log('5'.padEnd(15,'0'))
    console.log(str.padEnd(15,'0'))


const fruitsStr = 'APPLE, BANANA, CHEERY, MANGO,ORANGE'
const fruitsArr = fruitsStr.split(',')
console.log(fruitsStr,'=>',fruitsArr)

const s = 'we are developers'
console.log(s.length)
console.log(s.slice())
console.log(s.substring())

console.log(s.slice(10))
console.log(s.substring(10))

console.log(s.slice(-9))
console.log(s.substring(-7)) //-7 = 0

console.log( s.slice(17)) // ""
console.log(s.substring(17)) // ""

console.log(s.slice(11,13))
console.log(s.substring(11,13))

console.log(s.slice(13,11)) // ""
console.log(s.substring(13,11)) //lo

console.log(s.slice(-6,-2))
console.log(s.substring(-6,-2))

console.log(s.slice(-6,2)) //(11,2)
console.log(s.substring(-6,2))

console.log(s.slice(2,-6)) //
console.log(s.substring(2,-6)) // => substring (2,0) => substring (0,2)

