/* 
// -----(six js fundamentals,es6)----
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

// ---ES6---
// 1.template string
const numbers = [10, 20, 30, 50];
const student = {
  name: "mohin",
  age: 21,
  favouriteSub: ["Math", "Englist"],
};
const about = `My name is ${student.name}. My age is ${student.age}. has number ${numbers[2]}. my favourite subject is ${student.favouriteSub}`;
console.log(about);

// 2.arrow function
const getFiftyFive = () => 55;
const multiply = (x) => x * 2;
const isEven = (x) => x % 2 === 0;
const add = (x,y,z) => x + y + z
const sub = (num1,num2) =>{
    const result = num1 - num2
    return result
}
console.log(sub(20,10))

//3. spread operator
const numbs = [10,20,50,80,100]
const newNumbs = [...numbs]
const curNumbs = [...numbs,505]
numbs.push(200)
newNumbs.push(500)
console.log(numbs)
console.log(newNumbs)
console.log(curNumbs)

// 4.Array methods(forEach,map,filter,find)
const products = [
  { name: "laptop", price: 20000, brand: "lenovo", color: "white" },
  { name: "Pc", price: 40000, brand: "Hp", color: "blue" },
  { name: "Monitor", price: 30000, brand: "Dell", color: "yellow" },
  { name: "Camera", price: 10000, brand: "lenovo", color: "golden" },
  { name: "Watch", price: 3000, brand: "lenovo", color: "gray" },
];
// map : return array
const brands = products.map(product =>{ return product.brand})
const prices = products.map(product => product.price)
// console.log(brands)
// console.log(prices)

// forEach : just loop throgh kore but array return kore na
products.forEach(product => console.log(product))
products.forEach(product => console.log(product.color))

// filter : loop through after array return
const  cheap = products.filter(product => product.price <= 10000)
console.log(cheap)

const specificName = products.filter(product => product.name.toLowerCase().includes('p'))
console.log(specificName)

// find : loop through then just first element show
const specificWord = products.find(product => product.name.includes('a'))
console.log(specificWord)

// 5. destructuring of array and object
// array destructuring
const numbers = [10,20,30]
const [x,y] = numbers
console.log(x)
console.log(y)
function boxify (num1,num2){
    const nums = [num1,num2]
    return nums;
}
console.log(boxify(90,100))
const [first,second] = boxify(50,40)
console.log(first)

// object destructing 
const student = {
    name:'mohin',
    age:21,
    salary: "000",
}
const {name , age} = student
const {nam , boyos} = {nam : 'Rafi', salary:'2000', boyos: 20}
console.log(name)
console.log(age)
console.log(nam)
console.log(boyos)
const employee = {
    ide : 'vs code',
    designation: 'developer',
    languages:['html , js'],
    specification : {
        weight:60,
        address:'rayerbag',
        drink:'water',
        watch:{
            color:'golden',
            brand:'rolex',
        }
    }
}
const {designation, ide} = employee;
const {address , drink} = employee.specification
const {brand} = employee.specification.watch
console.log(brand)

// 6.json
const student = {
    name:'mohin',
    age:21,
    salary: "000",
}
// stringfy (obj to string)
const studentJson = JSON.stringify(student)
console.log(student)
console.log(studentJson)
// parse (string to obj)
const studentObj = JSON.parse(studentJson)
console.log(studentObj)

// fetch
fetch('url')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
   
// keys and values
const student = {
    name : 'mahi',
    age:21
}
const keys = Object.keys(student)
const values = Object.values(student)
console.log(keys)
console.log(values)

// add or remove 
const products = [
    { name: "laptop", price: 20000, brand: "lenovo", color: "white" },
    { name: "Pc", price: 40000, brand: "Hp", color: "blue" },
    { name: "Monitor", price: 30000, brand: "Dell", color: "yellow" },
    { name: "Camera", price: 10000, brand: "lenovo", color: "golden" },
    { name: "Watch", price: 3000, brand: "lenovo", color: "gray" },
];
const newProduct = {name:'phone', price:15000, brand: 'iphone', color:'white'}
// copy products array and then add newProduct
const newProducts = [...products, newProduct]
console.log(newProducts)
// create a new array without one specific item
// remove lenovo
const remaining = products.filter(product => product.brand !== 'lenovo')
console.log(remaining)
 
// truthy and falsy value
let money = 50;
if(money){
    console.log('truthy')
}

let tk = 0
if(!tk){
    console.log('falsy')
}
// 
const taha = 50;
let food;
if(taha > 50){
    food = 'biryani'
}
else{
    food = 'cha biscut'
}
console.log(food)

// shortcut  
// ternary operator 
let food1 = taha > 50? 'biryani' : 'cha biscut'
console.log(food1)

let drink = (taha >= 50 && money >= 50)? 'coke': 'filter water'
console.log(drink)

// number to string convert 
const num = 10
const numStr = num + ''
console.log(numStr)
// string to number convert
const input = '50'
const stringNum = +input
console.log(stringNum)
// 
let isActive = false
const showUser = () => console.log('display user')
const hideUser = () => console.log('hide user')
isActive ? showUser() : hideUser()
// both true then excute
isActive && showUser()
// just one condition true then excute
isActive || showUser()
// toggle boolean
isActive = !isActive
console.log(isActive)

// dot and bracket notation
const person ={
    name : 'abrar',
    age:21,
    '25' : 50
}
// dot notation
const name = person.name
console.log(name)
// braket notation
const age = person["age"]
const newAge = 'age'
console.log(person[newAge])
console.log(age)
const num = '25'
console.log(person[num])
*/