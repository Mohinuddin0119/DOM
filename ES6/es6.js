// ?-----ES6---
// basic,arrowFunction,arrowMethods,spreadArray,spreadObj,find,filter,accessingObj,indexing,optionalChining,callby,callback,scope,class,inheritace,default

/* 
// primitive 
const x = 5;
const y = 6;

let z = x;
z = 10;
console.log("x is",x);
console.log("z is",z);

// non primitive

const a = {name: 'mohin'};
const b = [1,2,3];

let d = a;
a.age = 20;

let c = b;
c.push(4)
b.push(5)
console.log('b',b)
console.log('c',c)
console.log('a',a)
console.log('d',d)

// truthly and false value

// false value => false,0,"",null,undefined,NaN
// true value => true,"name",12,1,[],{}

const value = '';
console.log(!!value)

// spread array
 const  number = [2,4,1]
 const number1 = [...number];
 number1.push(10)
 console.log(number)
 console.log(number1)
 
// spreading
const nums  = [100,2,3,5,4,10];
// destructor
// const [a,b,c] = nums;
// const [x,y,z, ...d] = nums;
// console.log(a,b,c)
// console.log(x,y,z,d)

// spread object
const person = {
    name: 'hero',
    age : 19,
    phone: "015873541324368",
    address : {
        zilla:"chandpur",
        village:"nurpur"
    },
    p:[1,2,5,8]
}
const person1 = {...person}
person1.email = 'heroalom@gmail.com'
// console.log(person1)
// console.log(person)

// const {name,phone,age} = person;
// console.log(name,phone,age)
// rename
// const {name:amarName,address,phone:mobile} = person
// console.log(amarName);
// console.log(mobile);
// spread
const {name,...rest} = person;
console.log(name)
console.log(rest)
// nested obj
// const {address} = person;
// const {zilla} = address;
// console.log(zilla)
// one line solution
const {address: {zilla}} = person;
const {address: {zilla:thikana}} = person;
console.log(zilla)
console.log(thikana)
// const {zilla} = person.address;
const {village} = person.address;
// console.log(zilla)
// console.log(village)

// ----Arrow function---
const add = (x,y) => x + y;
const double = x => x*2;
const double1 = x => {
    const a = x * 2;
    return a;
}
const concat = () => console.log('hello world');
console.log(double(3))
console.log(add(2,3))
console.log(double1(5))
concat();

// ----Array Methods--
// ----ForEach just acces item
const numbers = [10,20,30,50];
numbers.forEach(item => console.log(item));
// not return array
const a = numbers.forEach(item => console.log(item));
console.log(a); //undefined

// ---map(acces and return array)--
const numbs = [20,50,70,100];
numbs.map(item => console.log(item));
// return array
const b = numbs.map(item => item+1);
console.log(b);  //[21,51,71,101]

// Find
// just search that condition item
const nums = [10,20,40,50];
const c = nums.find(item => item === 20)
const d = nums.find(item => item === 21)
console.log(c);
console.log(d); //undefined

// filter
const num = [10,21,30,40,511];
const d = num.filter(item => item < 100)
const e = num.filter(item => item > 100)
const f = num.filter(item => item % 2 === 0)
const g = num.filter(item => item % 2 === 1)
console.log(g)

// reduce
const numbs = [1,2,3,4,5,10];
const sum  = numbs.reduce((preValue,curValue) => preValue + curValue,0);
console.log(sum)

// optional chaining
const poetOwner = {
    name: "mohin", 
    contact:{
        phone:"1842348650",
        email:'mohinuddin0119@gmail.com',
    },
    pet:{
        name : 'lofi',
        info:
        {
            color:'black',
            weight:'1.5kg',
        }
    }

}
console.log(poetOwner.contact.email);
// optional chining (?)
console.log(poetOwner.pet.info.color.food?.apple);

// accessingObject
const person = {
    name:'abul',
    age:19,
    contact:{
        phone:"01842348650",
        email:"abul@gmail.com",
    },
    education:{
        schoolName: "andorkilla high school",
        subjects:[
            {name:'bangla', mark: 45},
            {name:"english", mark:64},
            {name:'math', mark:70},
        ]
    }
}
console.log(person.contact.email)
console.log(person.education.subjects[1].mark)
console.log(person.education.subjects[0].name)

// indexing
const numbers = [10,20,3,50];
numbers.map((item,index) =>{
    console.log('item:',item,'index:',index)
})
numbers.map((item,index,arr) =>{
    console.log('item:',item,'index:',index,'array:',arr)
})

// Scope
// global scope(acces while space)
let y = 5;
{
    console.log(y);
}
console.log(y);
// block scope(just acces in block)
const x = 10;
{
    let x = 5;
    console.log(x);
}
console.log(x);
// local scope / functional scope
function add(){
    let a = 15;
    console.log(a);
}
add()

// callby value
const x = 5;
const y = [10,20,30];

// callby primitive value
const modify = (a) => {
    a+=2
    console.log(a);
}
modify(x);
console.log(x) //not change x
// callby non primitive value
const modify1 = (b) =>{
    b.push(50);
    console.log(b);
}
modify1(y)
console.log(y); //change y 

// callback
function show(name,age){
    console.log('My name is ',name,'age is ',age);
}

function fun(name,age,callback){
    console.log("Hello World")
    setTimeout(() => {
        callback(name,age)
    }, 2000);
}
fun('mohin',20,show)

function a(){
    console.log('hello from callback');
}

function main(callback){
    callback()
}
main(a)

// closure(return function)
const outerFunction = () => {
  let count = 0;
  const inner = () => {
    count++;
    console.log("count:", count);
  };
  return inner;
};
const x = outerFunction();
const y = outerFunction();
// console.log(typeof x)
x();
x();
x();
y()
y()
y()

// class
class Animal{
    // name;
    // color;
    constructor(petName,petColor){
        this.name =petName; 
        this.color = petColor;
    }
    showInfo(){
        console.log(`My pet name is ${this.name}.This color is ${this.color}`)
    }
}
const dog = new Animal('travis', 'black')
const cat = new Animal('mew', 'white')
// console.log(dog.name)
dog.showInfo()
cat.showInfo()

// inheritance
class owner {
  //   ownerName = 'mohin'
  //   ownerAge = 20
  ownerName;
  ownerAge;
  constructor(name, age) {
    this.ownerName = name;
    this.ownerAge = age;
  }
  ownerInfo() {
    console.log(
      `Owner Name is ${this.ownerName}. Owner age is ${this.ownerAge}`
    );
  }
}
class Animal extends owner {
  name;
  color;
  constructor(petName,petColor,wName,wAge) {
    super(wName,wAge);
    this.name = petName;
    this.color = petColor;
  }
  showInfo() {
    console.log(`My pet name is ${this.name} .this color is ${this.color}`);
  }
}
const cat = new Animal("travis","white",'mohin',20);
const dog = new Animal("mitu", "black",'uddin',21);
cat.showInfo();
dog.ownerInfo();
// console.log(cat)

// default parameter
const add = (x = 0, y = 0) => {
  console.log(x + y);
};
add(3);
add();
*/
// destructure
const person = {
    name:'mohin',
    age:20
}
const showInfo = ({name,age}) => console.log(name,age);
showInfo(person)
