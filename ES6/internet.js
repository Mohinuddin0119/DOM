// ----JSON, Fetch(GET,POST,PUT,PATCH),async(await),single threaded(async,sync),setTimeOut,setInterval and clearInterval,event loop,try,catch,finally,throw
/* 

// -----JSON
const user = {name:'hero',age:20};
// JavaScript Object Notation
const stringfied = JSON.stringify(user)
console.log(user)
// convert to a string
console.log(stringfied)

const shop = {
  owner: "Karim",
  address: {
    street: "9/10 road",
    thana: "Jatrabari",
    city: "Dhaka",
  },
  products: ["laptop", "Mic", "Monitor"],
  isOpen: true,
  isNew: false,
};
console.log(shop)
// convert a value to string
const shopJson = JSON.stringify(shop)
console.log(shopJson)
// convert string to object
const shopObj = JSON.parse(shopJson)
console.log(shopObj)

// Fetch
// ----GET---
const url =("https://jsonplaceholder.typicode.com/todos/1")
fetch(url)
.then(response => response.json())
.then(json => console.log(json))
// different way of using
function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//
function loadData2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
const data2 = document.getElementById("loadData2");
data2.addEventListener("click", loadData2);
// user
function user() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}
// inside function of user
function displayUsers(data) {
  console.log(data[1]);
}
// click
const userId = document.getElementById("users");
userId.addEventListener("click", user);

// user2
function user2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers2(data));
}
// 
function displayUsers2(users){
    const ul = document.getElementById('item-list')
    for(const user of users){
        console.log(user)
        const li = document.createElement('li')
        li.innerText = user.name
        ul.appendChild(li)
    }
}
// call
const userId2 = document.getElementById('users2');
userId2.addEventListener("click", user2)

// Post 
function post(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}
// 
function displayPost(posts){
    const postContainer = document.getElementById('post-container')
    for(const post of posts){
        console.log(post)
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h4 class="font-bold">User-${post.userId}</h4>
        <h5 class="font-semibold">Title: ${post.title}</h5>
        <p>Post description: ${post.body}</p>
        `
        postContainer.appendChild(div)
    }
}
// call
const postId = document.getElementById('post')
postId.addEventListener('click',post)

// Create or post
function create() {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Tiktoker",
      body: "I am hero alom. I want to be a leader of bangledesh",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => createDisplay(json));
}
function createDisplay(data) {
  const createContainer = document.getElementById("create-container");
  const div = document.createElement("div");
  div.classList.add("create");
  div.innerHTML = `
    <h3 class="font-bold">User -${data.userId}</h3>
    <h4 class="font-semibold">Title: ${data.title}</h4>
    <p>Post description: ${data.body}
    `;
  createContainer.appendChild(div);
}
// call
const createId = document.getElementById("createPost");
createId.addEventListener("click", create);

//Update (put)
function updateAPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify({
      id: 1,
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
// update(patch)
function patchingAPost(){
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PATCH",
        body: JSON.stringify({
          title: "foo",
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

// simple fetch(catch)
const loadComments = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('error happended',error))
}
// async(await)
const loadComments2 = async() =>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await res.json()
        console.log(data)
    }
    catch(error){
        console.error('data error')
    }
}

// ----sigle threaded
// synchronous (serial maintain)
const one = () =>{
  console.log('1')
  two()
  console.log('3')
  four()
}
function two(){
  console.log('2')
}
function four(){
  console.log('4')
}
one()
// asynchronous(serial does not maintain)
console.log('I')
setTimeout(() =>{
  console.log('eat')
},2000)
console.log('Rice')
// 
console.log(1)
setTimeout(() =>{
  console.log(2)
},3000)
console.log(3)

// promise
const myLoader = () =>{
  return new Promise((resolve,reject) =>{
    const succes = Math.random()
    if(succes < 0.5){
      resolve(succes)
    }
    else{
      reject(succes)
    }
  })
}
myLoader()
.then(data => console.log('resolved data',data))
.catch(err => console.log('reject with value',err))

// setTimeOut()
console.log(1)
console.log(2)
// setTimeout(() =>{
//   console.log(3)
// })
// setTimeout(() =>{
//   console.log('I am timeOut')
// },2000)
console.log(4)
console.log(5)
let num = 0
const clockId = setInterval(() =>{
  num++;
  if(num  === 6){
    clearInterval(clockId)
  }
  console.log(clockId,num)
},2000)

// event loop
// stack (first in last out)
function a(){
  console.log('a');
  b();
  console.log('e')
}
function b(){
  console.log('b')
  console.log('bb')
  c();
}
function c(){
  console.log('c')
  console.log('cc')
  d();
  f();
}
// asynchrouns
function d(){
  setTimeout(()=>{
    console.log('d');
  },2000)
}
function f(){
  console.log('f')
  console.log('ff')
}
function x(){
  console.log('x');
  y();
}
function y(){
  console.log('y')
  console.log('yy')
  z()
}
function z(){
  console.log('z')
  console.log('zz')
}
// queue(first in first out)
a();
x();

// another example
const third = () =>{
  console.log('third')
}
const second =() =>{
  console.log('second')
}
function one(){
  console.log('one');
  // macro task queue
  setTimeout(second,1000)
  // micro task queue
  new Promise((resolve,reject) =>
    resolve('This is resolve'))
    .then(resolve => console.log(resolve))
    .catch(reject => console.log('reject with value',reject))
  third()
}
one()

// error handling
function checkAge() {
  const inputFieldId = document.getElementById("inputField");
  const inputText = inputFieldId.value;
  // 
  const errorId = document.getElementById('error')
  try {
    const age = parseInt(inputText);
    if(isNaN(age)){
      throw 'please enter a number'
    }
    else if(age < 18){
      throw 'Child is not allowed'
    }
    else if (age > 30) {
      throw 'murubbi is not allowed'
    }
    errorId.innerText = 'Allowed'
  } catch (err) {
    console.error("error:", err);
    errorId.innerHTML = err
  }
  finally{
    console.log("All done")
  }
}
*/