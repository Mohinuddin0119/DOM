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
*/
// problem 4
const num1 = [1,2,3,4,5]
const num2 = [100,20,30,50]
const add = [...num1, ...num2]
const max = Math.max(...add)
console.log(max)