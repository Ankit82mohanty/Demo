const numbers = [300, 70, 265, 90, 40, 112, 78];

// maximun number
const max = numbers.reduce((acc, curr) => Math.max(acc, curr));
console.log("Maximum:", max); // Output: 9

const min = numbers.reduce((acc,curr) => Math.min
(acc,curr))
console.log("Minimum:",min) //output : 1
