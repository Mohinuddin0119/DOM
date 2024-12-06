// set item 
const addItem = window.localStorage.setItem('Name','Mohin')

const setAge = () =>{
    window.localStorage.setItem('age',21);
}

// add object item
const person = {name:'Abul',age:21}
// obj to string
const personStr = JSON.stringify(person)
localStorage.setItem('obj',personStr)

// string to object
const personObj = JSON.parse(personStr)
// console.log(personObj)

// add array item
const student = [10,20,50]
// array to string
const studentStr = JSON.stringify(student)
// console.log(studentStr)
// add to local storage
localStorage.setItem('chtro',studentStr)
// string to array
const studentArr = JSON.parse(studentStr)
// console.log(studentArr)

// get item
const readItem = localStorage.getItem('Name')
// console.log(readItem)

// remove item 
const del = localStorage.removeItem('Name')
//  console.log(del)

// clear all item
// const clean = localStorage.clear()




// sum by user 
// const a = parseInt(prompt('enter a is :'))
// const b = parseInt(prompt('enter b is:'))
// console.log(a+b)
