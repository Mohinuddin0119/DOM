/* 
// -----six js fundamentals----
//1. --how to declare a variable using let and const
// changeable
const fatherName = 'Salam'
// not changeable
let season = 'winter'

//2.--conditions
// basic conditions : >, <, ===, !==, >=, <=
// multiple conditions : && , ||
if(fatherName === 'salam' && season === 'winter'){
    console.log('first loop complete')
} 
else if(fatherName === 'Salam'){
    console.log('second loop complete')
}
else{
    console.log('last loop complete')
}

//3. --Array
// array declare
// index
// length,push,pop,shift,unshift,
const numbers = [10,20,30]
console.log(numbers.length)
numbers[0] = 100
numbers.push(40)
console.log(numbers)
numbers.pop()
console.log(numbers)
// first element remove
numbers.shift()
console.log(numbers)
// first element add
numbers.unshift(200)
console.log(numbers)

//4. --for and while loop
const numbs = [10,20,50,80]
for(let i = 0; i < numbs.length; i++){
    console.log(numbs[i])
}
// while
const nums = [100,200,300,500]
let i = 0
while( i < nums.length){
    console.log(nums[i])
    i++
}
*/
//5. --function and arrow function
function multiply(num1,num2){
    const result = num1 * num2
    return result;
}
console.log(multiply(10,5))
// arrow function
const add = (num1,num2) =>{
    const result = num1 + num2
    return result
}
console.log(add(10,90))
// 6. --Object
const student = {
    name:'mohin',
    age:21,
    study:'diploma'
}
// 3 ways to acces  by property
// acces by dot notation
console.log(student.name)
// acces by property string
console.log(student['age'])
// acces by property in a variable
const prop = 'study'
console.log(student[prop])