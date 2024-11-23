/* 
// problem 1
const mult = (num1,num2,num3) =>{
    const result = num1 * num2 * num3;
    return result
}
console.log(mult(2,2,5))
// problem 1_2
const temp = `I am a web developer.
I love to code.
I love to eat biryani`
console.log(temp)
// problem 1_3
const add = (a,b = 10) => a + b
console.log(add(10))

// problem 2
const friends = ['mohin','Abrar','Mahi','Rafiul']
const bondhu = (friends) =>{
    const newArr = []
    for(const friend of friends){
        if(friend.length % 2 === 0){
            newArr.push(friend)
        }
    }
    console.log("Even character friend is :",newArr)
}
bondhu(friends)
// problem 3
const numbers = [1,2,4,5];
const len = numbers.length
const arFun = (numbers) =>{
    let sum = 0;
    for(const number of numbers){
        const square = number * 2
        // console.log(square)
        sum = sum + square
    }
    let avg = sum / len
    console.log(sum)
    return avg;
}
const aver = arFun(numbers)
console.log('avarage sum is:',aver)

// problem 4
const num1 = [1, 2, 3, 4, 5];
const num2 = [100, 20, 30, 50];
const add = [...num1, ...num2];
const max = Math.max(...add);
console.log(max);
// ---module 31
// task 1
let data = {
  sophia: {
    id: 33,
    study: [
      {
        primary: [
          { school_name: "Hazi monir hossain school" },
          { location: "peters bugs" },
        ],
      },
      {
        scondary: [
          { school_name: "ABC secondary school" },
          { location: "st lorence" },
        ],
      },
    ],
  },
};
const loc_of_sophia = data.sophia.study[1].scondary[1].location;
console.log(loc_of_sophia);

// task 2
let students = {
    2222:{
        name:"jack",
        section:"C",
        class:"IX",
        address:{
            'building no':12,
            'street': "st. Jonson",
            'city': "Peterburg",
            'country': "UK"
        }
    },
    3333:{
        name: 'herry',
        section:"D",
        class:"X",
        address:{
            'building no' : 85,
            "street": "DC road",
            "city":"Kachu-khet",
            "country": "Bangladesh"
        }
    }
}
const city = students['2222'].address['city']
console.log(city)
const herry = students['3333'].name
console.log(herry)

// task 3
let data2 = {
  data: [
    {
      bookId: 1,
      bookDetails: {
        name: "habluder adda",
        category: "XYZ",
        price: "20$",
      },
      bookCategory: "Basic",
    },
    {
      bookId: 2,
      bookDetails: {
        name: "programming hero",
        category: "ABC",
        price: "50$",
      },
      bookCategory: "Beginner",
    },
  ],
};
const hablu = data2.data[0].bookDetails.name
console.log(hablu)
const beginner = data2.data[1].bookCategory
console.log(beginner)

// module 31
// problem 31_1
const odd = [1, 3, 5, 7, 9];
const oddNumbers = odd.map((o) => o + 1);
console.log(oddNumbers)
// problem 31_2
const nums = [33,50,79,78,90,101,30];
const divisibleBy10 = nums.filter(d => d % 10 === 0)
console.log(divisibleBy10)
// problem 31_2_1
const divBy10 = nums.find(d => d % 10 === 0)
console.log(divBy10)

// problem 31_3
const instructor = [
    {name:'Nodi',age:28,position:'Senior'},
    {name:'Akil',age:26,position:'Junior'},
    {name:'Shobuj',age:30,position:'Senior'},
]

for(const ins of instructor){
    // console.log(ins.position)
    if(ins.position.toLowerCase() === "senior"){
        console.log(ins);
        console.log(ins.name);
    }
}

// problem 31_4
const people = [
    {name: "Meena", age:20},
    {name: "Rina", age:15},
    {name: "Suchorita", age:25},
]
// use map and reduce
const ages = people.map(a => a.age)
const total = ages.reduce((accum, current) =>{
 const sum = accum + current
 return sum
} , 0)
    
console.log(total)

// use for loop
// let sum =0;
// for(const per of people){
//     console.log(per)
//     sum = sum + per.age
// }
// console.log(sum)

//Task 35_1
// display a message after 5s
const timer = () =>{
  const timerId = document.getElementById('setInterval')
  timerId.innerText = 'Hello Chandu'
  timerId.classList = 'text-black font-bold text-xl text-center'
}
setInterval(timer,5000);
*/
// Task 35_2 (don't work this task)
const showGreeting = (name) => {
  const delayTextId = document.getElementById("delayText");
  delayTextId.innerText = `Hello, ${name}!`;
};
const delayGreeting = (name, delayTime) => {
  // console.log(name);
  // console.log(delayTime);
  setTimeout(() => showGreeting(name), delayTime);
};
// delayGreeting('Mohin',2000);
delayGreeting("Mohin", 2000);

//
function tellJoke(name, count) {
  const tellJokeId = document.getElementById("telljokeId");
  setTimeout(() => {
    tellJokeId.innerText = `My name is ${name} .I am a good boy! My roll number is ${count}`;
  }, 0);
}

// After 10 seconds, stop telling jokes
const showMessage = (name, delayTime) => {
  let count = 0;
  const timeOut = setInterval(() => {
    if (count <= 5) {
      tellJoke(name, count);
      console.log(count);
      count++;
    } else {
      clearInterval(timeOut);
    }
  }, delayTime);
};
showMessage("Mohin", 2000);

// // Task 35_3
// const loadData = async() =>{
//   const res = await fetch('https://v2.jokeapi.dev/joke/Programming?typ=single')
//   const data = await res.json()
//   const joke = data.joke
//   console.log(joke)
// }
// loadData()
