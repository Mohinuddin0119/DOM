// ----JSON, Fetch(GET,POST,PUT,PATCH),async(await)
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
*/
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