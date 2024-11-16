/*
// -----variable-----
// var : no reason to use var
// let:allow it to reassign
// const : do not allow it to reasign
let money = 20;
money = 25;
console.log(money);

const tk = 25;
const rich = tk + 25;
console.log(rich)
// object
const person = {
    name: 'mohin',
    class: 13
}
// person = {name:'uddin',age: 20}
person.age = 20
console.log(person)
// array
const numbers = [10,2,3,5,10];
numbers[0] = 1
console.log(numbers);

// default parameter
function add (num1 = 0,num2 = 0){
    const result = num1 +num2;
    console.log(num1,"+",num2, "=",result)
}
add(2,8)
add(8)
add()
function fullName(first = '',last = ''){
    const full = first + ' '  + last;
    return full;
}
console.log(fullName("mohin",'uddin').toUpperCase())
console.log(fullName("mohin"))
console.log(fullName())

// template string
const first = 'mohin';
const last = 'uddin'
const fullName = `My first name is ${first}, last name is ${last}  And full name is ${first + last}`
console.log(fullName)
// old 
const message = "I am a mohin.\nI am a web developer \n"  +  'I live in Dhaka'
console.log(message)

// function declaration
function add(a, b) {
    return a + b;
}
console.log(add(2,8))
// function expression
const add2 = function(a,b){
    return a + b;
}
const sum = add2(2,3)
console.log(sum)
// Arrow function
const add3 = (num1,num2,num3) => num1 + num2 + num3
console.log(add3(3,7,5));

//single parameter
const getAge = (person) => person.name;
const student = {name:'mohin', age: 20};
const age = getAge(student)
console.log("Name :",age);
// 
const getThird = numbers => numbers[2];
const numbers = [10,20,30,50]
const third = getThird(numbers)
console.log(third)
// no parameter
const getPi = () => Math.PI
console.log(getPi())
// large arrow 
const doMath = (x,y,z) => {
    const sum = x + y;
    const mult = x * z;
    const result = sum + mult;
    return result;
}
console.log(doMath(2,4,6))

// spread (...)
// array max
const max = Math.max(10,10,50,60,1400);
console.log(max)
const numbers = [10,20,40,50,100];
const getMax = Math.max(...numbers);
console.log(getMax)
// use spread operator to  copy
const friends = [4,5,7,10];
const bondhu = [...friends];
bondhu.push(15);
console.log(friends);
console.log(bondhu);
// merge (join korar jonno use kore)
const num1 = [1,2,3,4,5]
const num2 = [100,20,30,50]
const add = [...num1, ...num2]
// advance
const sonkha = [...bondhu, 20];
console.log(sonkha)

// Destruture
const actor = {
    name: "mohin",
    age: 20,
    phone:'018423486580',
    email:'mohinuddin0119@gmail.com'
}
// object destructuring
const {name,age,phone} = actor;
const {name:nam,age:boyos} = actor;
console.log(nam)
console.log(boyos)
console.log(phone)
// array destucturing
const numbers = [20, 40, 50, 60];
const [first, second] = numbers;
console.log(first);
const [x, y] = [1, 2];
console.log(x);
// advanced
function doubleTham(a, b) {
  return [a * 2, b * 2];
}
const [prothom, ditiyo] = doubleTham(9, 10);
console.log(prothom);
console.log(ditiyo);

// object keys
const person = {
    name : 'mohin',
    age:20,
    phone:'01842348650',
    email:'mohinuddin119@gmail.com'
}
// keys (all property returns an array)
const keys = Object.keys(person)
console.log(keys)
// values (all value returns an array)
const values = Object.values(person);
console.log(values);
// entries (returns property and value an array)
// array is an array, two dimensional array(2D)
const entries = Object.entries(person)
console.log(entries)
// delete
delete person.email
console.log(person)
// another way of delete
const {phone, ...newObj} = person
console.log(newObj)
// freeze
// Object.freeze(person)
// person.age = 25;
// person.p = 1
// console.log(person)
// seal (just update do not allow to add or delete)
Object.seal(person);
person.age = 30;
person.add = 100
console.log(person)

// for of (use an array and string)
const numbers = [10,20,30,50,100]
for(const num of numbers){
    console.log(num)
}
const nobab = 'Shiraj ud doula';
for(const char of nobab){
    console.log(char)
}
// for in (use an object)
const person = {
    name : 'hero',
    age:20,
    class:12,
}
for(const prop in person){
    const value = person[prop]
    console.log(prop,value)
}
// for of use this object
const keys = Object.keys(person);
console.log(keys)
for(const key of keys){
    const value = person[key]
    console.log(key,value)
}

// optional chining 
const user = {
    name : 'hero',
    age:20,
    address:{
        thana:'jatrabari',
        zilla:'Dhaka',
        ward:[5,10],

    }
}
const user2 = {
    name : 'hero',
    age:20,
    address:{
        thana:'jatrabari',
        zilla:'Dhaka',
        ward:[5,10],

    }
}
console.log(user.address.ward[1].zilla?.thana)
console.log(user.address?.thana)
// map (function will be result than returns an array)
const numbers = [10,20,30,50,40]
const double = numbers.map(num => num * 2);
console.log(double);
const add = numbers.map(num => num + 5);
console.log(add)
const halves = numbers.map(num => num / 2);
console.log(halves)
const friends = ['mahi','abrar','Sayel','hasan','Shofiqul'];
const lengths = friends.map(len => len.length)
console.log(lengths)
const firstLetter = friends.map(frn => frn[0].toUpperCase())
console.log(firstLetter)

// forEach(just returns result)
// dont allow return an array
const numbers = [1,5,6,10,15];
numbers.forEach(num => console.log (num * 2))
// filter(if condition true than will be  return)
const players = [57,50,67,70,75]
const selected = players.filter(p => p > 60)
console.log(selected)
const even = players.filter(p => p % 2 === 0)
console.log(even)
const friends = ['Mahi','Sayel','Abrar','Hasan','Sahara','sabbir']
const len = friends.filter(frn =>{
    if(frn.length % 2 === 0 && frn.length > 4){
        return frn;
    }})
    
console.log(len)

// find (condition fulfill hole just one element show korbe)
const numbers = [10,20,30,50,40]
const even = numbers.find(p => p % 2 === 0)
const odd = numbers.find(p => p % 2 === 1)
console.log(even) //10
console.log(odd)  //undefined
// reduce (returns total value)
const total = numbers.reduce((p,c) => p + c ,0 )
console.log(total)

// recap module
// use array of Object
const products = [
  { id: 1, name: "lenovo", price: 65000 },
  { id: 1, name: "dell", price: 45000 },
  { id: 1, name: "Hp", price: 150000 },
  { id: 1, name: "Mac", price: 30000 },
];
// map
const names = products.map(product => product.name);
console.log(names)
// forEach
products.forEach(p => console.log(p.price));
// filter
const prices = products.filter(p => p.price > 50000)
console.log(prices)
// find
const affordable = products.find(p => p.price < 50000);
console.log(affordable)
// reduce
const total = products.reduce((accum,current) => accum + current.price,0)
console.log(total)

// ----Class--
class Teacher{
    constructor(name,subject,address){
        this.name = name;
        this.subject = subject;
        this.address = address;
    }
    lecture(){
        console.log('sir is teaching')
    }
}
const kamrul = new Teacher('Kamrul',"English",'Dhaka')
console.log(kamrul)
kamrul.lecture();
// 
const leeza = new Teacher('Leeza','Math','Dhaka')
console.log(leeza)
// inheritance
class Vehicle{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    move(){
        console.log('car is running')
    }
}
class Bus extends Vehicle{
    constructor(name,price,seat,ticketPrice){
        super(name,price);
        this.seat = seat;
        this.ticketPrice = ticketPrice;
    }
    stop(){
        console.log('this bus is stop')
    }
}
const bus = new Bus('hanif','2crore',40,500);
console.log(bus)
const car = new Vehicle('Asia aircon',20000000)
console.log(car)

// this keyword
console.log(this);
// inside an object use this keyword
const person = {
  name: "hero",
  greet: function () {
    console.log(this.name);
  },
};
person.greet();

// ______data type
// --Javascript is dynamic typed language

//primitive type(string,numbers,boolean,null,undefined)
let x = 5;
let y = "abul kabul babul";
let z = true;
y = x;
console.log(x, y);
y = 7;
console.log(x, y); //not change orginal value
// console.log(typeof x, typeof y, typeof z)

//  non primitive(objects,array)
let a = [10, 20, 30];
let d = a;
d.push(50);
console.log(a,d);
let b = { name: "hero", age: 21 };
let c = b;
c.surname = 'alom'
console.log(b,c) //change orginal value

// ____8 ways to get undefined--
//__1 variable that is not initialized will give undefined
let a;
console.log(a)
// __2 function  with no return
function add(a,b){
    const result = a +b
    console.log(a ,b)
}
add()
// __3 parameter that is not passed will be undefined
function sub(a,b,c){
    const sub = a - b - c
}
console.log(sub())
// __4 if return has nothing on the right side will return undefined
function multiply(a,b){
    if(a < 0 || b < 0){
        return
    }
    return a + b
}
console.log(multiply(2,-5))
// __5 property that doesn't exists on an object will give you undefined
const fifth = {name:'hero', age:20}
console.log(fifth.selary)
// __6 accessing array elements outside of the index range
const sixth = [10,20,30,60,5]
console.log(sixth[2], sixth[6])
// __7 delete an element inside an array
delete sixth[2]
console.log(sixth[2])
// __8 set a value directly to undefined
const seventh = undefined
console.log(seventh)

// you need to null  
const ninth = null
console.log(ninth)

// -----Truthy and falsy value

// ----Truthy---
// 1.true
// 2.any number (+ve,-ve) will be truthy other than 0
// 3.any string other than empty string
// 4."0",'false
// 5.[]
// 6.{}

// const x = true;
// const x = -5
// const x = 'string'
// const x = 'false'
// const x = '0'
// const x = []
const x = {}
if(!!x){
    console.log('Value is truthy')
}
else{
    console.log('Value is falsy')
}

// ----Falsy value
// 1.false
// 2.0
// 3.''(empty string)
// 4.null
// 5.undefined

// const x = false;
// const x = '';
// const x = null;
const x = undefined;
if(!x){
    console.log('Value is falsy')
}
else{
    console.log('Value is truthy')
}

// double and triple equal 
// dounle equal(==)
const first = true
const second = 1
if(first === second){
    console.log('value are equal')
}
else{
    console.log('value are not equal')
}
// hoisting (first declare or call than declare or call)
console.log(add(5,7))
function add(a,b){
    if(a>5){
        const sum = a + b;
        return sum;
    }
    else{
        var sub = a - b;
        return sub
    }
}

// closure(one function inside another function call that's means closure)
function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter
    }
}
const watch1 = stopWatch()
console.log(watch1())
console.log(watch1())
console.log(watch1())
const watch2 = stopWatch()
console.log(watch2())
console.log(watch2())
console.log(watch2())

// callback function(when function argument inside call another function)
function greeting(greetingMoment, name){
    greetingMoment(name)
}
// morning
function greetingMorning(name){
    console.log('Good Morning',name)
}
// evening
function greetingEvening(name){
    console.log('Good Evening',name)
}
// night
function greetingNight(name){
    console.log('Good Night',name);
}
// call
greeting(greetingMorning , 'Mahi')
greeting(greetingMorning , 'Abrar')
greeting(greetingEvening , 'Rafiul')
greeting(greetingNight , 'Sayel')

// Arguments
function sub(a, b,c) {
    console.log(arguments)
    console.log(arguments[1])
    const arg = [...arguments];
    arg.push(50)
    console.log(arg)
  const sub = a - b - c;
  return sub;
}
console.log(sub(5,2,1,5,47))

// pass by value (primitive)
let num1 = 5;
let num2 = 7;
function modify(a,b){
    console.log(a,b)   //5,7
    a = 10;
    b = 20;
    console.log(a,b) //10,20
}
console.log(num1, num2)
modify(num1,num2)
console.log(num1, num2)

// pass by reference(non primitive)
const student1 = {name:'hero', age:25}
const student2 = {name:'Parvez', age:20}
function add(a,b){
    a.salary = 20000
    b.age = 30
}
console.log(student1,student2)
add(student1,student2)
console.log(student1,student2)

// scope(global,function,block)
// global scope
let year = "2024";
// function scope
function theYear(){
    let text = "the year is";
    return text + " " + year
}
console.log(theYear())

// block scope
if(10 < 20){
    console.log("Hi")
}
*/
